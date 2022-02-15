const argv=require('yargs')
.option('b',{
    alias:'base',
    type:'number',
    demandOption:true,
    describe: 'Base para la multiplicacion'
})
.option('h',{
    alias:'hasta',
    type:'number',
    demandOption:true,
    describe: 'hasta donde... para la multiplicacion'
})
.option('l',{
    alias:'listar',
    type:'boolean',
    demandOption:true,
    default:false,
    describe:'Muestra u oculta la tabla'
}   
)
.check((argv,options)=>{
    if(isNaN(argv.b)){
        throw ('La base debe ser numerica')
    }
    return true;
})
.argv;

module.exports = argv;