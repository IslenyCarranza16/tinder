const Joi = require('joi');
const id = Joi.string().uuid();
const abilities = Joi.string().min(1).max(40);
const wage = Joi.number().integer();
const duration = Joi.string().alphanum().min(1).max(40);

const createProjectschema = Joi.object({
   
    abilities: abilities.required(),
    duration: duration.required(),
    wage: wage.required()
   })

   const updateProjectschema = Joi.object({
    abilities: abilities,
    duration: duration,
    wage: wage
   })




const getProjectschema = Joi.object({
   id: id.required()
 
})

module.exports = {createProjectschema, updateProjectschema, getProjectschema}