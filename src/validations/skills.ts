import { body } from 'express-validator';

export const skillValidator = [
  body('name').notEmpty().withMessage('name is required'),
  body('url').isString().withMessage('url is string'),
];
