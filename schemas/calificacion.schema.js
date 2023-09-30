const Joi = require('joi');
const id = Joi.number().integer();
const grade = Joi.number().integer().max(10);
const idUser = Joi.string().uuid();

const createGradeschema = Joi.object({
   id: id.required(),
   grade: grade.required(),
   idUser: idUser.required()
   })

   const updateGradeschema = Joi.object({
    grade: grade,
    idUser: idUser
   })




const getGradeschema = Joi.object({
   id: id.required()
 
})

module.exports = {createGradeschema, updateGradeschema,getGradeschema} 