const Joi = require('joi')

const id = Joi.number()
const name = Joi.string().alphanum().min(3).max(15)

const createProductSchema = Joi.object({
    name:name.required(),
    id,
})

module.exports = {createProductSchema}