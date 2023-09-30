const Joi = require('joi');
const id = Joi.number().integer();
const name = Joi.string().alphanum().min(1).max(20);
const profession = Joi.string().alphanum().min(1).max(40);
const age = Joi.number().integer().min(18);
const abilities = Joi.string().alphanum().min(1).max(40);
const wage = Joi.number().integer();

const createUsersschema = Joi.object({
   id: id.required(),
    name: name.required(),
    profession: profession.required(),
    age: age.required(),
    abilities: abilities.required(),
    wage: wage.required()
   })

   const updateUsersschema = Joi.object({
    name: name,
    profession: profession,
    age: age,
    abilities: abilities,
    wage: wage
   })




const getUsersschema = Joi.object({
   id: id.required()
 
})

module.exports = {createUsersschema, updateUsersschema, getUsersschema}