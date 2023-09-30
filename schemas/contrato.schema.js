const Joi = require('joi');
const id = Joi.number().integer();
const idUser = Joi.string().uuid();
const idEnterprise = Joi.string().uuid();
const idGrade = Joi.string().uuid();
const payment = Joi.number().integer();
const advance = Joi.number().integer();
const balance = Joi.number().integer();
const status = Joi.boolean();
const dateInitial = Joi.date();


const createContractSchema = Joi.object({
   id: id.required(),
   idUser: idUser.required(),
   idEnterprise: idEnterprise.required(),
   idGrade: idGrade.required(),
   payment: payment.required(),
   advance: advance.required(),
   balance: balance.required(),
   status: status.required(),
   dateInitial: dateInitial.required()
  
   })

   const updateContractschema = Joi.object({
    idUser: idUser,
   idEnterprise: idEnterprise,
   idGrade: idGrade,
   payment: payment,
   advance: advance,
   balance: balance,
   status: status,
   dateInitial: dateInitial
   
   })




const getContractSchema = Joi.object({
   id: id.required()
 
})

module.exports = {createContractSchema, updateContractschema, getContractSchema}