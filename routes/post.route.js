const express = require('express')
const router = express.Router()

const { body, param, validationResult } = require('express-validator')
const postController = require('../controllers/post.controller')

const textAndTitleValidator = () => {
  return [
    body('title').not().isEmpty().withMessage('Field is required'),
    body('title').isString().withMessage('The field requires string'),
    body('text').not().isEmpty().withMessage('Field is required'),
    body('text').isString().withMessage('The field requires string'),
  ]
}

router.get('/', postController.findAll)

router.get('/:id', postController.findOne)

router.post('/', textAndTitleValidator(), (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: false,
        data: errors.array()
      })
    }

    next()
  }, postController.insert)

router.patch('/:id', postController.update)
router.patch('/:id/category', postController.updateCategory)
router.delete('/:id', postController.delete)
router.delete('/:id/categories', postController.deleteCategories)


module.exports = router