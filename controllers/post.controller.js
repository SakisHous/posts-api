const postService = require('../services/post.service')

exports.findAll = async (req, res) => {
  console.log(`Retrieving all posts`)

  try {
    const result = await postService.findAll()
    res.status(200).json({status: true, data: result})
  } catch (err) {
    console.log( `Problem in finding all Posts \n ${err}`)
    res.status(400).json({status: false, data: err})
  }
}

exports.findOne = async (req, res) => {
  const id = req.params.id
  console.log(`Retrieving Post with id = ${id}`)

  try {
    const result = await postService.findOne(id)
    res.status(200).json({status: true, data: result})
  } catch (err) {
    console.log( `Problem in finding Post with ${id} \n ${err}`)
    res.status(400).json({status: false, data: err})
  }
}

exports.update = async (req, res) => {
  const id = req.params.id
  console.log(`Updating Post with id = ${id}`)

  try {
    const result = await postService.updatePost(req.body)
    res.status(200).json({status: true, data: result})
  } catch (err) {
    console.log( `Problem in updating Post with ${id} \n ${err}`)
    res.status(400).json({status: false, data: err})
  }
}

exports.insert = async (req, res) => {
  const data= req.body
  console.log(`Insert new Post with title ${data.title}`)

  try {
    const result = await postService.insert(data)
    
    res.status(200).json({status: true, data: result})
  } catch (err) {
    console.log( `Problem in inserting new Post \n ${err}`)
    res.status(400).json({status: false, data: err})
  }
}

exports.updateCategory = async (req, res) => {
  const id = req.params.id
  console.log(`Update categories of the Post with id = ${id}`)

  try {
    const result = await postService.updateCategories(req.body)
    
    res.status(200).json({status: true, data: result})
  } catch (err) {
    console.log( `Problem in updating Post's category \n ${err}`)
    res.status(400).json({status: false, data: err})
  }
}

exports.delete = async (req, res) => {
  const id = req.params.id
  console.log(`Delete Post with id = ${id}`)

  try {
    const result = await postService.deletePost(id)
    
    res.status(200).json({status: true, data: result})
  } catch (err) {
    console.log( `Problem in deleting Post with id = ${id} \n ${err}`)
    res.status(400).json({status: false, data: err})
  }
}

exports.deleteCategories = async (req, res) => {
  const data= req.body
  console.log(`Delete Categories from Post with id ${req.params.id}`)

  try {
    const result = await postService.deleteCategories(data)
    
    res.status(200).json({status: true, data: result})
  } catch (err) {
    console.log( `Problem in inserting new Post \n ${err}`)
    res.status(400).json({status: false, data: err})
  }
}
