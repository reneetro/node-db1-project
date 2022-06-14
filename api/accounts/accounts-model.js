const db = require('../../data/db-config')

const getAll = async () => {
  // DO YOUR MAGIC
  return await db('accounts')
}

const getById = async id => {
  // DO YOUR MAGIC
  return await db('accounts')
    .where('id', id)
    .first();
}

const create = async account => {
  // DO YOUR MAGIC
  const [id] = await db('accounts').insert(account)
  return getById(id)
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
