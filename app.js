const {tablaMunltiplicar} = require('./helpers/multiplicar');
const argv=require('./config/yargs');


console.clear();
let base=argv.base;
let listar=argv.listar;
let hasta=argv.hasta;


console.log(argv);
console.log('Valor de la base:', base);
console.log('Valor del listar:',listar);
console.log('Valor de hasta:',hasta);



tablaMunltiplicar(base,listar,hasta);


