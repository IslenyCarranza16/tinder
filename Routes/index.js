const express = require('express') // llamar express
const gradesRouter = require ('./CalificacionRoutes')  
const contractRouter = require('./ContractRouter')
const companyRouter = require('./CompanyRouter');
const projectRouter = require('./ProjectRouter')
const userRouter = require('./UserRouter')


function routerApi(app){ //funcion para usar los datos del product router
    const router = express.Router();
    app.use('/api/v1',router); // poner un  endpoint base
    // para crear un versionamiento del api
 router.use(`/grades`,gradesRouter);
 router.use(`/contract`,contractRouter);
 router.use(`/company`,companyRouter);
 router.use(`/project`,projectRouter);
 router.use(`/users`,userRouter);

}


module.exports = routerApi; //  se exporta la funcion