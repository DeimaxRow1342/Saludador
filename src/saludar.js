function saludar(nombre, edad, genero, idioma) {
  const fecha = new Date();
  const hora = fecha.getHours();
  let saludo = "";

  if (idioma === "ingles") {
    if (edad >= 30) {
      if (genero === "M") {
        if (hora >= 0 && hora < 12) {
          saludo = "Good morning Mr " + nombre;
        } else if (hora >= 12 && hora < 19) {
          saludo = "Good afternoon Mr " + nombre;
        } else if (hora >= 19 && hora < 24) {
          saludo = "Good evening Mr " + nombre;
        }
      } else {
        if (hora >= 0 && hora < 12) {
          saludo = "Good morning Mrs " + nombre;
        } else if (hora >= 12 && hora < 19) {
          saludo = "Good afternoon Mrs " + nombre;
        } else if (hora >= 19 && hora < 24) {
          saludo = "Good evening Mrs " + nombre;
        }
      }
    } else {
      if (hora >= 0 && hora < 12) {
        saludo = "Good morning " + nombre;
      } else if (hora >= 12 && hora < 19) {
        saludo = "Good afternoon " + nombre;
      } else if (hora >= 19 && hora < 24) {
        saludo = "Good evening " + nombre;
      }
    }
  } else if (idioma === "espanol") {
    if (edad >= 30) {
      if (genero === "M") {
        if (hora >= 0 && hora < 12) {
          saludo = "Buenos días Sr. " + nombre;
        } else if (hora >= 12 && hora < 19) {
          saludo = "Buenas tardes Sr. " + nombre;
        } else if (hora >= 19 && hora < 24) {
          saludo = "Buenas noches Sr. " + nombre;
        }
      } else {
        if (hora >= 0 && hora < 12) {
          saludo = "Buenos días Sra. " + nombre;
        } else if (hora >= 12 && hora < 19) {
          saludo = "Buenas tardes Sra. " + nombre;
        } else if (hora >= 19 && hora < 24) {
          saludo = "Buenas noches Sra. " + nombre;
        }
      }
    } else {
      if (hora >= 0 && hora < 12) {
        saludo = "Buenos días " + nombre;
      } else if (hora >= 12 && hora < 19) {
        saludo = "Buenas tardes " + nombre;
      } else if (hora >= 19 && hora < 24) {
        saludo = "Buenas noches " + nombre;
      }
    }
  }

  return saludo;
}

export default saludar;