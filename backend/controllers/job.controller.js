import { asyncHandler } from "../utils/asyncHandler.js";
import Job from "../models/job.model.js";

export const createJob = asyncHandler(async (req, res) => {
  const {title,description,requirements,salary,experience,location,jobType,companyId} = req.body;
  const userId = req.id;

  if (!title ||!description ||!requirements ||!salary ||!experience ||!location ||!jobType ||!companyId) {
    return res.status(400).json({
      message: "All Fields Are Required",
    });
   }

    const createdJob = await Job.create({
      title,
      description,
      requirements,
      salary,
      experience,
      location,
      jobType,
      company:companyId,
      created_by:userId,
    });
  
    if(!createdJob){
        return res.status(400).json({message:"Unable To Create Job"})
    }

    res.status(201).json(createJob)
});

export const getAllJobs=asyncHandler(async(req,res)=>{

})


// export const deleteJob=asyncHandler(async(req,res)=>{
//     const jobId=req.params.id
//     const deletedJob=await Job.findByIdAndDelete(jobId)
//     if(!deletedJob){
//         return res.status(400).json({message:"Unable To Delete Job"})
//     }

//     res.status(200).json({message:"Job Deleted Sucessfully"})
// })