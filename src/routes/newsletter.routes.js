import express from 'express'
import { validateNewsLetterRegistration } from '../validators/newsLetter.validator.js';
import { create } from '../controllers/newsletter.controller.js';

const router = express.Router()

router.post("/create", validateNewsLetterRegistration, create)

export default router;