import UserModel, { UserData } from './UserModel'
import data from '../data/user'

const records = data.map((record: UserData) => new UserModel(record).toObject())

const findAll = (cb: Function) => cb(null, records)

export default {
  findAll,
}
