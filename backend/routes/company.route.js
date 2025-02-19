import express from "express"
import { createCompany, deleteCompany,getAllCompanies, updateCompany, getCompanyById } from "../controllers/company.controller.js"
import isAuthenticated from "../middleware/isAuthenticated.js"
const router=express.Router()

router.route("/create_company").post(isAuthenticated,createCompany)

router.route("/get_companies").get(isAuthenticated,getAllCompanies)

router.route("/get_company/:id").get(isAuthenticated,getCompanyById)

router.route("/update_company/:id").put(isAuthenticated,updateCompany)

router.route("/delete_company/:id").delete(isAuthenticated,deleteCompany)

export default router