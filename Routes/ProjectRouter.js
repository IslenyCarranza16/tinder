const express = require('express') // llamar express
const cliente = require('../libraries/postgress')
const router = express.Router();
//const calificacionServices = require('./../services/calificacion.services');

const validatorHandler = require('./../middlewares/validator.handler'); 
const {createContractSchema, updateContractschema, getContractSchema} = require('./../schemas/contrato.schema');

// 
router.get('/', (req,res)=>{

    cliente.query('SELECT id_proyecto, "Habilidades_requeridas", salario_hora, "Duración" FROM public."Proyecto";', (err, result)=>{
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
        cliente.query(`SELECT * FROM public."Proyecto" WHERE id_proyecto=${id};`, (err, result)=>{
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
        
        cliente.query(`INSERT INTO public."Proyecto"(
            id_proyecto, "Habilidades_requeridas", salario_hora, "Duración")
           VALUES (${user.id}, '${user.abilities}', ${user.wage},${user.duration});`, (err, result)=>{
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
        let updateQuery = `UPDATE public."Proyecto"
        SET "Habilidades_requeridas"='${user.abilities}', salario_hora=${user.wage}, "Duración"=${user.duration}
        WHERE id_proyecto=${id};`
     
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
        let insertQuery = `DELETE FROM public."Proyecto" WHERE id_proyecto=${id};`
     
        cliente.query(insertQuery, (err, result)=>{
            if(!err){
                res.send('Deletion was successful')
            }
            else{ console.log(err.message) }
        })
        cliente.end;
     })







module.exports = router;