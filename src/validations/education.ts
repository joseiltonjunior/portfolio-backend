import { body } from 'express-validator';

export const educationValidations = [
  body('name').notEmpty().withMessage('name is required'),
  body('course').notEmpty().withMessage('course is required'),
  body('description').notEmpty().withMessage('description is required'),
  body('time').notEmpty().withMessage('time is required'),
];
