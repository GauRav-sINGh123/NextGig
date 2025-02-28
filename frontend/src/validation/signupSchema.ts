import {z} from 'zod'


export const signupSchema=z.object({
    fullName:z.string().min(3,{message:"Full name must be at least 3 characters long"}),
    email:z.string().email(),
    password:z.string().min(8,{message:"Password must be at least 8 characters long"}),
    role:z.enum(['student','recruiter']).default('student')
})