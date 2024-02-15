function saludar(nombre, edad, genero) {
  const fecha = new Date();
  const hora = fecha.getHours();
    if(edad>=30){
    if(genero==="M"){
      if(hora>=0 && hora < 12){
        return "Buenos dias Sr " + nombre;
      }
      else if(hora>=12 && hora < 19){
        return "Buenas tardes Sr " + nombre;
      }
      else if(hora>=19 && hora < 24){
        return "Buenas noches Sr " + nombre;
      }
    }
    else{
      if(hora>=0 && hora < 12){
        return "Buenos dias Sra " + nombre;
      }
      else if(hora>=12 && hora < 19){
        return "Buenas tardes Sra " + nombre;
      }
      else if(hora>=19 && hora < 24){
        return "Buenas noches Sra " + nombre;
      }
    }
  }
  else{
    if(hora>=0 && hora < 12){
      return "Buenos dias " + nombre;
    }
    else if(hora>=12 && hora < 19){
      return "Buenas tardes " + nombre;
    }
    else if(hora>=19 && hora < 24){
      return "Buenas noches " + nombre;
    }
  }
}

export default saludar;
