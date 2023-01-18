import { body } from 'express-validator';

export const aboutValidations = [
  body('description')
    .isLength({ min: 50 })
    .withMessage('must be at least 50 chars long'),
];
