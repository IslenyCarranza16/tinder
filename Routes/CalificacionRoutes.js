const express = require('express') // llamar express
const cliente = require('../libraries/postgress')
const router = express.Router();
//const calificacionServices = require('./../services/calificacion.services');

const validatorHandler = require('./../middlewares/validator.handler'); 
const {createGradeschema, updateGradeschema,getGradeschema} = require('./../schemas/calificacion.schema');   // importar los prodcutos servies 

//const servici = new calificacionServices();

//obtener

router.get('/', (req,res)=>{

cliente.query('SELECT * FROM public."Calificacion";', (err, result)=>{
   if(!err){
      console.log(result)
       res.send(result.rows);
   }
});
cliente.end;

})


//obtener por ID
 
router.get('/:id',(req,res)=>{
   const id = parseInt(req.params.id)
   console.log(id)
   cliente.query(`SELECT * FROM public."Calificacion" WHERE "id_calificaciòn"=${id};`, (err, result)=>{
      if(!err){
          res.send(result.rows);
      } 
  });
  cliente.end;

})


// insertar

router.post('/',(req, res)=> {
   const user = req.body;
   console.log(user)
   
   cliente.query(`INSERT INTO public."Calificacion"(
      "id_calificaciòn", id_usuario, "calificación")
      VALUES (${user.id}, ${user.idUser}, ${user.grade});`, (err, result)=>{
       if(!err){
           res.status(201).send('Insertion was successful')
       }
       else{res.send(err.message)}
   })
   cliente.end; 
})

router.put('/:id', (req, res)=> {
   let user = req.body;
   let id = parseInt(req.params.id)
   console.log(id)
   console.log(user)
   let updateQuery = `UPDATE public."Calificacion"
	SET id_usuario=${user.idUser}, "calificación"=${user.grade}
	WHERE "id_calificaciòn"=${id};`

   cliente.query(updateQuery, (err, result)=>{
       if(!err){
           res.send('Update was successful')
       }
       else{ res.send(err.message)}
   })
   cliente.end;
})


//eliminar


router.delete('/:id', (req, res)=> {
   const id = parseInt(req.params.id)
   let insertQuery = `DELETE FROM public."Calificacion"
	WHERE "id_calificaciòn"=${id};`

   cliente.query(insertQuery, (err, result)=>{
       if(!err){
           res.send('Deletion was successful')
       }
       else{ res.send(err.message) }
   })
   cliente.end;
})

cliente.connect(); 

module.exports = router;