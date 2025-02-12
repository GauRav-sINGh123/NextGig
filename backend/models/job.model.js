import {Schema,model} from "mongoose";

const jobSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requirements: [{
        type: String
    }],
    salary: {
        type: Number,
        required: true
    },
    experience:{
        type:Number,
        required:true,
    },
    location: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        required: true
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    applications: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Application',
        }
    ]
},{timestamps:true});

const Job = model("Job", jobSchema);

export default Job