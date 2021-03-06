import axios from 'axios'
const baseUrl = '/api/stores'

const getAll = async () => {
  try {
    const response = await axios.get(baseUrl)

    return response.data
  } catch (error) {
    throw Error('Get stores failed')
  }
}

const create = async (newObject) => {
  try {
    const response = await axios.post(baseUrl, newObject)

    return response.data
  } catch (error) {
    throw Error('Store creation failed')
  }
}

const update = async (id, newObject) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, newObject)

    return response.data
  } catch (error) {
    throw Error('Traffic update failed')
  }
}

const exportedObject = {
  getAll,
  create,
  update,
}

export default exportedObject
