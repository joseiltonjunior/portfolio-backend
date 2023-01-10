import { body } from 'express-validator';

export const experienceValidations = [
  body('name').notEmpty().withMessage('name is required'),
  body('office').notEmpty().withMessage('office is required'),
  body('activities').notEmpty().withMessage('activities is required'),
  body('technologies').notEmpty().withMessage('technologies is required'),
  body('time').notEmpty().withMessage('time is required'),
];
