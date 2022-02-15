const fs = require("fs");




const tablaMunltiplicar = (base = 5,listar=false,hasta=10) => {
  let salida = "";
  for (let i = 1; i <= hasta; i++) {
    salida += `${base} X ${i} = ${base * i}\n`;
  }
  fs.writeFileSync(`./output/tabla -${base}.txt`, salida);
  if(listar==true){
    console.log(salida);
  }
  
  console.log(`¡Tabla del ${base} creada!`)
};

module.exports = {
  tablaMunltiplicar
};
