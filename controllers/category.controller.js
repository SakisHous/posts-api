const categoryService = require('../services/category.service')

exports.findAll = async (req, res) => {
  console.log('Find all categories')

  try {
    const result = await categoryService.findAll()
    
    res.status(200).json({status: true, data: result})
  } catch(err) {
    console.log( `Problem in getting all categories \n ${err}`)
    res.status(400).json({status: false, data: err})
  }
}

exports.findOne = async (req, res) => {
  console.log('Find a category by id')
  const id = req.params.id
  try {
    const result = await categoryService.findOne(id)
    
    res.status(200).json({status: true, data: result})
  } catch(err) {
    console.log( `Problem in category by ${id} \n ${err}`)
    res.status(400).json({status: false, data: err})
  }
}

exports.insert = async (req, res) => {
  console.log('Insert new category name')
  const name = req.body.name
  
  try {
    const result = await categoryService.insert(name)
    
    res.status(200).json({status: true, data: result})
  } catch (err) {
    console.log( `Problem in saving category \n ${err}`)
    res.status(400).json({status: false, data: err})
  }
}

exports.update = async (req, res) => {
  console.log('Update category\'s name with id')
  const id = req.params.id

  const data = req.body
  try {
    const result = await categoryService.update(data)
    
    res.status(200).json({status: true, data: result})
  } catch(err) {
    console.log( `Problem in updating category with ${id} \n ${err}`)
    res.status(400).json({status: false, data: err})
  }
}

exports.delete = async (req, res) => {
  const id = req.params.id
  console.log(`Delete category with id: ${id}`)

  try {
    const result = await categoryService.deleteCategory(id)
    
    res.status(200).json({status: true, data: result})
  } catch(err) {
    console.log( `Problem in deleting category with ${id} \n ${err}`)
    res.status(400).json({status: false, data: err})
  }
}