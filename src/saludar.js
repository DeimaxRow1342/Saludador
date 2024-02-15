function saludar(nombre, edad, genero) {
  if(edad>=30){
    if(genero==="M"){
      return "Hola Sr " + nombre;
    }
    else{
      return "Hola Sra " + nombre;
    }
  }
  else{
    return "Hola " + nombre;
  }
}

export default saludar;
