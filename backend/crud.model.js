const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let crudStudent = new Schema({
    student_name: {
        type: String
    },
    student_address: {
        type: String
    },
    student_number: {
        type: Number
    },
    student_entry: {
        type: String
    },
    student_year: {
        type: Number
    },
    student_verification: {
        type: Boolean
    }
});

module.exports = mongoose.model('school_student', crudStudent);
