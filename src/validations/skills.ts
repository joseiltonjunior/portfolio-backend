import { body } from 'express-validator';

export const skillValidations = [
  body('name').notEmpty().withMessage('name is required'),
  body('url').isString().withMessage('url is string'),
];
