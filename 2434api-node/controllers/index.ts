import modelHandler from '../models/'

const findAll = (req: any, res: any) => {
  modelHandler.findAll((err:any, data: any) => {
    if (err) {
      return res.status(err.code).json(err.message)
    }
    return res.status(200).json(data)
  })
}

export default {
  findAll,
}
