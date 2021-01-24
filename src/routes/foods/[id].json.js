import { foods } from './_data.js'

export function get(req, res, next){
  const { id } = req.params
  const food = foods.find(f => f.id == id)
  console.log(food)
  res.json(food)
  next()
}