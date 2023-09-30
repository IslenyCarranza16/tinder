const express = require('express') // llamar express
const cliente = require('../libraries/postgress')
const router = express.Router();
//const calificacionServices = require('./../services/calificacion.services');

//const validatorHandler = require('./../middlewares/validator.handler'); 
//const {createContractSchema, updateContractschema, getContractSchema} = require('./../schemas/contrato.schema');

// 
router.get('/', (req,res)=>{

    cliente.query('SELECT id_usuario, "Nombre", "Profesion", "Edad", "Salario_cobrado_hora", habilidades FROM public."Usuario";', (err, result)=>{
       if(!err){
          console.log(result)
           res.send(result.rows);
       }
    });
    cliente.end;
    
    })


    // obtener por id
    router.get('/:id',(req,res)=>{
        const id = parseInt(req.params.id)
        console.log(id)
        cliente.query(`SELECT * FROM public."Usuario" WHERE id_usuario=${id};`, (err, result)=>{
           if(!err){
               res.send(result.rows);
           } 
       });
       cliente.end;
     
     })

     //post
     router.post('/',(req, res)=> {
        const user = req.body;
        console.log(user)
        
        cliente.query(`INSERT INTO public."Usuario"(
            id_usuario, "Nombre", "Profesion", "Edad", "Salario_cobrado_hora", habilidades)
           VALUES (${user.id}, '${user.name}', '${user.profession}',${user.age}, ${user.wage}, '${user.abilities}');`, (err, result)=>{
            if(!err){
                res.status(201).send('Insertion was successful')
            }
            else{ console.log(err.message) }
        })
        cliente.end; 
     })
     
     router.put('/:id', (req, res)=> {
        let user = req.body;
        let id = parseInt(req.params.id)
        console.log(id)
        console.log(user)
        let updateQuery = `UPDATE public."Usuario"
        SET id_usuario=${user.id}, "Nombre"='${user.name}', "Profesion"='${user.profession}', "Edad"=${user.age}, "Salario_cobrado_hora"=${user.wage}, habilidades='${user.abilities}'
        WHERE id_usuario=${id};`
     
        cliente.query(updateQuery, (err, result)=>{
            if(!err){
                res.send('Update was successful')
            }
            else{ console.log(err.message) }
        })
        cliente.end;
     })
     
     
     //eliminar
     
     
     router.delete('/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        console.log(`para borrar el id ${id}`)
        let insertQuery = `DELETE FROM public."Usuario"
        WHERE id_usuario=${id};`
     
        cliente.query(insertQuery, (err, result)=>{
            if(!err){
                res.send('Deletion was successful')
            }
            else{ console.log(err.message) }
        })
        cliente.end;
     })







module.exports = router;