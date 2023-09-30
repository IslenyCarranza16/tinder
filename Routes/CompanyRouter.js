const express = require('express') // llamar express
const cliente = require('../libraries/postgress')
const router = express.Router();
//const calificacionServices = require('./../services/calificacion.services');
  
//const validatorHandler = require('./../middlewares/validator.handler'); 
//const {createContractSchema, updateContractschema, getContractSchema} = require('./../schemas/contrato.schema');

// 
router.get('/', (req,res)=>{

    cliente.query('SELECT id_empresa, "Nombre_empresa", id_proyecto, "direcciòn" FROM public."Empresa";', (err, result)=>{
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
        cliente.query(`SELECT * FROM public."Empresa" WHERE "id_empresa"=${id};`, (err, result)=>{
           if(!err){
               res.send(result.rows);
           } 
       });
       cliente.end;
     
     })

     //post
     router.post('/',(req, res)=> {
        const user =req.body ;
        console.log(user.name)
        
        cliente.query(`INSERT INTO public."Empresa"(
            id_empresa, "Nombre_empresa", id_proyecto, "direcciòn")
           VALUES (${user.id},'${user.name}',${user.idProject},'${user.direction}');`, (err, result)=>{
            if(!err){
                res.status(201).send('Insertion was successful')
            }
            else{ res.send(err.message) }
        })
        cliente.end; 
     })
     
     router.put('/:id', (req, res)=> {
        let user = req.body;
        let id = parseInt(req.params.id)
        console.log(id)
        console.log(user)
        let updateQuery = `UPDATE public."Empresa"
        SET "Nombre_empresa"='${user.name}', id_proyecto=${user.idProject}, "direcciòn"='${user.direction}' WHERE "id_empresa"=${id};`
     
        cliente.query(updateQuery, (err, result)=>{
            if(!err){
                res.send('Update was successful')
            }
            else{ res.send(err.message) }
        })
        cliente.end;
     })
     
     
     //eliminar
     
     
     router.delete('/:id', (req, res)=> {
        const id = parseInt(req.params.id)
        console.log(`para borrar el id ${id}`)
        let insertQuery = `DELETE FROM public."Empresa"
        WHERE "id_empresa"=${id};`
     
        cliente.query(insertQuery, (err, result)=>{
            if(!err){
                res.send('Deletion was successful')
            }
            else{ res.send(err.message) }
        })
        cliente.end;
     })







module.exports = router;