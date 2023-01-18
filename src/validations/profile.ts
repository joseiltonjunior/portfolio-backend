import { body, check } from 'express-validator';

export const profileValidator = [
  body('name').notEmpty().withMessage('name is required'),
  body('office').notEmpty().withMessage('office is required'),
  body('pic').notEmpty().withMessage('pic is required'),
  body('links').notEmpty().withMessage('links is required'),

  check('links.*.name').notEmpty().withMessage('name link is required'),
  check('links.*.icon').notEmpty().withMessage('icon link is required'),
  check('links.*.url').notEmpty().withMessage('url link is required'),
];
