const express = require('express') // llamar express
const gradesRouter = require ('./CalificacionRoutes')  


function routerApi(app){ //funcion para usar los datos del product router
    const router = express.Router();
    app.use('/api/v1',router); // poner un  endpoint base
    // para crear un versionamiento del api
 router.use(`/grades`,gradesRouter);


}


module.exports = routerApi; //  se exporta la funcion