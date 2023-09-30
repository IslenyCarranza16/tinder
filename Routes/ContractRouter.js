const express = require('express') // llamar express
const cliente = require('../libraries/postgress')
const router = express.Router();
//const calificacionServices = require('./../services/calificacion.services');

const validatorHandler = require('./../middlewares/validator.handler'); 
const {createContractSchema, updateContractschema, getContractSchema} = require('./../schemas/contrato.schema');

// 
router.get('/', (req,res)=>{

    cliente.query('SELECT "id_Contrato", id_usuario, id_empresa, "Estado", "Fecha_inicio", "id_calificación", "Valor_pagar", "Adelanto", "Saldo" FROM public."Contrato";', (err, result)=>{
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
        cliente.query(`SELECT * FROM public."Contrato" WHERE "id_Contrato"=${id};`, (err, result)=>{
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
        
        cliente.query(`INSERT INTO public."Contrato"(
            "id_Contrato", id_usuario, id_empresa, "Estado", "Fecha_inicio", "id_calificación", "Valor_pagar", "Adelanto", "Saldo")
           VALUES (${user.id}, ${user.idUser}, ${user.idEnterprise},${user.status}, ${user.dateInitial}, ${user.idGrade}, ${user.payment}, ${user.advance}, ${user.balance});`, (err, result)=>{
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
        let updateQuery = `UPDATE public."Contrato"
        SET id_usuario=${user.idUser}, id_empresa=${user.idEnterprise}, "Estado"=${user.status}, "Fecha_inicio"=${user.dateInitial}, "id_calificación"=${user.idGrade}, "Valor_pagar"=${user.payment}, "Adelanto"=${user.advance}, "Saldo"=${user.balance}
         WHERE "id_Contrato"=${id};`
     
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
        let insertQuery = `DELETE FROM public."Contrato"
        WHERE "id_Contrato"=${id};`
     
        cliente.query(insertQuery, (err, result)=>{
            if(!err){
                res.send('Deletion was successful')
            }
            else{ res.send(err.message)}
        })
        cliente.end;
     })







module.exports = router;