const { Client } = require('pg');



async function getConection(){
   const cliente = new Client({
    host:'localhost',
    port: 5432, // se pone el port de que se conecta postgess 
    user:'postgres',
    password:'1018483371kr',
    database:'Tinder'
});
 await cliente.connect(); 

 return cliente ; // para conectarse  
}

module.exports = getConection; //libreria paa exportar 