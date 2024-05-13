import express from 'express'
import { create } from '../controllers/contact.controller.js'
import { validateContactUsMessageRegistration } from '../validators/contactUs.validator.js';

const router = express.Router()

router.post("/create", validateContactUsMessageRegistration, create)

export default router;