// requireds    
const { getTable, listar } = require('./multiplicar/multiplicar')
const { argv } = require('./yargs/yargs')

let base = argv.base;
let limite = argv.limite;
let comando = argv._[0]

getTables = async () => {
    try{
        let archivo = await getTable(base,limite);
        console.log('Se creo el archivo: '+archivo)
    }
    catch(err){
        console.log(err);
    }
}

switch (comando) {
    case 'listar':
        listar(base,limite);
        break;
    case 'crear':
        getTables();
}


