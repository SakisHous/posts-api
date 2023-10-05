const { dataSource } = require('../connect')
const PostEntity = require('../model/Post').PostEntity

function insert(data) {
  const result = dataSource
    .getRepository(PostEntity)
    .save(data)
    .catch((error) => console.log(error))

    return result
}

function findAll() {
  const result = dataSource
    .getRepository(PostEntity)
    .createQueryBuilder('post')
    .leftJoinAndSelect('post.categories', 'category')
    .getMany()

    return result
}

function findOne(id) {
  const result = dataSource
    .getRepository(PostEntity)
    .createQueryBuilder('post')
    .leftJoinAndSelect('post.categories', 'category')
    .where('post.id: :id', {id: id})
    .getMany()
}

function updatePost(data) {
  const result = dataSource
    .getRepository(PostEntity)
    .createQueryBuilder()
    .update(PostEntity)
    .set({
      title: data.title,
      text: data.text
    })
    .where('id = :id', { id: data.id })
    .execute()
    .catch(error => console.log(error))

    return result
}

async function updateCategories(data) {
  const actualRelationsShips = await dataSource
    .getRepository(PostEntity)
    .createQueryBuilder()
    .relation(PostEntity, "categories")
    .of(data.id)
    .loadMany()

    const result = await dataSource
      .getRepository(PostEntity)
      .createQueryBuilder()
      .relation(PostEntity, "categories")
      .of(data.id)
      .addAndRemove(data.categories, actualRelationsShips)
      .catch(error => console.log(error))

    return result
}

function deletePost(id) {
  const result = dataSource
    .getRepository(PostEntity)
    .createQueryBuilder()
    .delete()
    .from(PostEntity)
    .where('id = :id', { id: id })
    .execute()
    .catch(error => console.log(error))

    return result
}

function deleteCategories(data) {
  const result = dataSource
    .getRepository(PostEntity)
    .createQueryBuilder()
    .relation(PostEntity, "categories")
    .of(data)
    .remove(data.categories)
    .catch(error => console.log(error))

    return result
}

module.exports = { insert, findAll, findOne, updatePost, updateCategories, deletePost, deleteCategories }