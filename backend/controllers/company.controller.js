import {asyncHandler} from '../utils/asyncHandler.js';
import Company from '../models/company.model.js';

export const createCompany=asyncHandler(async(req,res)=>{
    const {name,description,website,location,logo}=req.body;
    if([name,location].includes('')) return res.status(400).json({message:"All fields are required"})
       
     const company=await Company.findOne({name})   
     if(company) return res.status(400).json({message:"Company already exists"})
     
     const newCompany=await Company.create(
        {
            name,
            description,
            website,
            location,
            userId:req.id,
            logo
        })

     if(!newCompany) return res.status(404).json({message:"Company not created"})

     res.status(201).json({message:"Company created successfully",newCompany})
})

export const getCompanies=asyncHandler(async(req,res)=>{
    
})

export const getCompany=asyncHandler(async(req,res)=>{
    
})

export const updateCompany=asyncHandler(async(req,res)=>{
    
})

export const deleteCompany=asyncHandler(async(req,res)=>{
    
})