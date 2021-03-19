const Joi = require('joi');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('connected to MongoDB..'))
    .catch(err => console.log('could not connect to MOngoDB..', err))

const courseSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        minlength: 5, 
        maxlength: 255
    },
    category: {
        type: String, 
        required: true,
        enum: ['web', 'mobile', 'network'],
        lowercase: true,
        trim: true
    },
    author: String,
    tags: {
        type: Array,
        validate: {
            validator: function (v) {
                return v && v.length > 0
            }, 
            message: 'A course should have at least one tag'
        }
    },
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: {
        type: Number,
        required: function () { return this.isPublished },
        min: 10, 
        max: 200,
        get: v => Math.round(v),
        set: v => Math.round(v)
    }
})

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'Node.js Course',
        category: 'mobile',
        author: 'Folajimi',
        tags: ['node', 'backend'],
        isPublished: true,
        price: 15
    },
    {
        name: 'Angular Course',
        category: 'Web',
        author: 'Mosh',
        tags: ['angular', 'frontend'],
        isPublished: true,
        price: 45
    });
    try {
        const result = await course.save();
        console.log(result)
    }
    catch (ex) {
        for (field in ex.errors) {
            console.log(ex.errors[field].message)
        }
    }
}
createCourse();

async function getCourses() {
    const pageNumber = 2;
    const pageSize = 10;

    const courses = await Course
        .find({ author: 'Mosh', isPublished: true })
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1})
    console.log(courses)
}
getCourses();

async function updateCourses(id) {
    const course = await Course.findById(id);
    if (!course) return 
    
    course.isPublished = true;
    course.name = 'React.js Course'
    course.author = "Gospel Pillars";
    course.category = "Web";
    course.price = 120;
    const result = await course.save();
    console.log(result)
}
updateCourses("604f2fadac60da1c285d131e")

async function updateCourse(id) {

    try {
        const course = await Course.findByIdAndUpdate(id, {
            $set: {
                author: 'Jason',
                isPublished: false,
                name: 'ASP.NET MVC Course',
                tags: ['aspnet', 'backend'],
                category: 'Web',
                price: 60
            }
        }, { new: true });
        console.log(course) 
    }
    catch (e) {
        if (e instanceof mongoose.CastError)
            console.err('No course with the given ID was found');
        else
            console.err('something failed.')
    }
    
}
updateCourse("604f6b1cb35e3322c8d84e67")