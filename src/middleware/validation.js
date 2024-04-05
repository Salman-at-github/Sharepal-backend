const { check, validationResult } = require('express-validator');

const validateTicket = [
  check('order').trim().notEmpty().withMessage('Order ID is required').isLength({ max: 30 }).withMessage('Invalid ID length'),
  check('description').trim().notEmpty().withMessage('Description is required').isLength({max: 3000}).withMessage("Maximum characters 3000 exceeded")
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Return without sending a response
    return next();
  }
  next();
};

module.exports = { validateTicket, handleValidationErrors };
