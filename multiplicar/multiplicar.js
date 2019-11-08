const fs = require('fs');
let resultS = '';



let getTable = (base,limite) => {
    return new Promise((resolve, reject) => {
        if ( !Number(base)){
            reject('La base introducida no es un numero');
            return;
        }
        for( let i = 1; i<limite ; i++ ){
            resultS += (base + "*" + i +"=" + base*i + "\n");
        }
        fs.writeFile('tablas/tabla-' + base +  '.txt', resultS, (err) => {
            if(err){
                reject('No se pudo crear');
        
            }else{
                resolve('tablas/tabla-' + base +  '.txt');
            }
        });
        
    });
   
}

let listar = (base,limite) => {
    return new Promise ((resolve,reject) => {
        if(!Number(base) || !Number(limite)){
            reject('La base y el limite deben ser numeros');
        }
        for( let i = 1; i<limite ; i++ ){
            console.log(base + "*" + i +"=" + base*i + "\n");
        }
    })
}
module.exports = {
    getTable,
    listar
}
