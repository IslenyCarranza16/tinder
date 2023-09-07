const Joi = require('joi');
const id = Joi.string().uuid();
const idProject = Joi.string().uuid();
const name = Joi.string().alphanum().min(1).max(20);
const direction = Joi.string().alphanum().min(1).max(30);


const createCompanyschema = Joi.object({
    name: name.required(),
    idProject: idProject.required(),
    direction: direction.required()
   
   })

   const updateCompanyschema = Joi.object({
    name: name,
    idProject: idProject,
    direction: direction
   })




const getCompnaySchema = Joi.object({
   id: id.required()
 
})

module.exports = {createCompanyschema, updateCompanyschema, getCompnaySchema}