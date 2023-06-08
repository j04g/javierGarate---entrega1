// SIMULADOR I
// SIMULADOR DE TRÁMITES

let mensajeGeneral = "Le da la bienvenida el Servicio Nacional de Apostillado del MINISTERIO DE RREE y CULTO. \n 1 - Para solicitar turno presencial \ 2 - Conocer los precios de los trámites \n 3 - Recarga por trámite express \n 4 - Total a pagar \n 5 - Traducción al francés \n 0 - SALIR ";
let listaServicios = "1 - Apostillado $515\n2 - Autorizaciones $400\n3 - Legalizaciones de diplomas y certificados nacionales- $750";
let traducciónF = "Vous êtes bienvenus au Ministère des Affaires Étrangères de la République Argentine. Choisissez: \n 1 - Prendre redez-vous sur place \n 2 - Connaître les prix des démarches \n 3 - Démarche rapide \n4- Total à payer \n 5 - Version francaise \n 0 - Sortir";
let opcion;
let total = 0;

do {
  opcion = pedirOpcion(alert(mensajeGeneral));
  switch (opcion) {
    case 1:
    alert("Por motivos extraordinarios los turnos presenciales solo se administran de manera excepcional. El MREC se sitúa en la calle Esmeralda 1212, esq. Arenales de la C.A.B.A. Diríjase en los horarios de 8 a 14hs.")
    break;
    case 2:
      let servicio = pedirOpcion(alert(listaServicios))
      switch (servicio) {
        
        case 1:
          alert("El precio de la apostilla de un diploma es de $515 y es individual para cada diploma.")
          console.log("El precio de la apostilla de un diploma es de $515 y es individual para cada diploma.")
          total = total + 515
          break;
        case 2:
          alert("El precio de toda autorización es de $400 y es individual para cada autorización.")
          console.log("El precio de toda autorización es de $400 y es individual para cada autorización.")
          total = total + 400 
          break;
        case 3:
          alert("El precio de legalización de todo diploma o certificado es de $750 y es individual para cada autorización.")
          console.log("El precio de legalización de todo diploma o certificado es de $750 y es individual para cada autorización.")
          total = total + 750
          break; 
        default: alert("Elija una de las 3 opciones, soquete!")
                console.error("Elija una de las 3 opciones, soquete!")
        break;
      }
      break;
    case 3:
    alert("El servicio express permite acelerar los trámites encomendados. Esos podrán retirarse al término de 24 horas de su solicitud y la recarga puede hacerse por el conjunto de trámites solicitados. El monto del servicio express asciende a $1000.")
    console.warn("El servicio express permite acelerar los trámites encomendados. Esos podrán retirarse al término de 24 horas de su solicitud y la recarga puede hacerse por el conjunto de trámites solicitados. El monto del servicio express asciende a $1000.")
    total=  total + 1000
    break;
    case 4:
    alert("El total a pagar es: " + total + "$ pesos argentinos")
    console.warn("El total a pagar es: " + total + "$ pesos argentinos. Solo se aceptan pagos electrónicos")
    break;
    case 5:
    alert(traducciónF)
    total = 0
    break;
    case 0:
    alert("Esperamos que el servicio le haya sido útil. El servicio Exterior de la Nación le desea un feliz día.")
    break;
    default: alert("Solo son posibles las opciones 0, 1, 2, 3, 4 y 5")
    console.error("Opción equivocada. ")
    break;
    }
 } while (opcion !== 0)

function pedirOpcion(mensaje) {
  return Number(prompt(mensaje))
} 


// SIMULADOR DE TURNOS II 
// Simulador automático de entrega de turnos    

let numeroTurno = 1;

function generarTurno() {
  let nombreApellido = prompt("Ingresar nombre y APELLIDO");
  alert("Se ha generado el turno número: " + numeroTurno + " a nombre de " + nombreApellido);
  console.log(nombreApellido);
  numeroTurno++;
}

do {
  if (numeroTurno === 5 || numeroTurno === 10 || numeroTurno === 15 || numeroTurno === 20) {
    alert("Turno " + numeroTurno + " saltado.");
    console.warn("Turno " + numeroTurno + " saltado.");
    numeroTurno++;
    continue;
  }

  alert("El turno " + numeroTurno + " corresponde a:");
  console.log("El turno " + numeroTurno + " corresponde a:");

  generarTurno();
} while (numeroTurno <= 20);


// SIMULADOR DE TURNOS III
// Simulador de informe de demora de turnos

let mensaje2 = "Para conocer la demora aproximada, ingrese su número de turno"
let tiempoEspera


do {
  let numeroTurno = Number(alert("Le da la bienvenida el Servicio Nacional de Apostillado del MINISTERIO DE RREE y CULTO. Para conocer el turno de su horario solo tiene que ingresar el número de turno asignado. Este número va del 1 al 20 y figura en el talón que le fue entregado en la entrada"))
  opcion = prompt(mensaje2)
  switch (opcion) {
    case "1":
      alert ("Usted tiene turno a las 10:00hs")
      informarDemora(5, opcion)
      break;
    case "2":
      alert ("Usted tiene turno a las 10:30hs")
      informarDemora(10, numeroTurno)
      break
    case "3":
      alert ("Usted tiene turno a las 11:00hs")
      informarDemora(15, numeroTurno)
      break
      case "4":
      alert ("Usted tiene turno a las 11:30hs")
      informarDemora(20, numeroTurno)
      break
      case "5":
        alert ("Número incorrecto. Lea bien la consigna de inicio.")
      case "6":
      alert ("Usted tiene turno a las 12:00hs")
      informarDemora(5, numeroTurno)
      break
      case "7":
      alert ("Usted tiene turno a las 12:30hs")
      informarDemora(10, numeroTurno)
      break
      case "8":
      alert ("Usted tiene turno a las 13:00hs")
      informarDemora(15, numeroTurno)
      break
      case "9":
      alert ("Usted tiene turno a las 13:30hs")  
      informarDemora(20, numeroTurno)
      break
      case "10":
        alert ("Número incorrecto. Lea bien la consigna de inicio.")
      case "11":
      alert ("Usted tiene turno a las 14:00hs")
      informarDemora(5, numeroTurno)
      break
      case "12":
      alert ("Usted tiene turno a las 14:30hs")
      informarDemora(10, numeroTurno)
      break
      case "13":
      alert ("Usted tiene turno a las 15:00hs")
      informarDemora(15, numeroTurno)
      break
      case "14":
      alert ("Usted tiene turno a las 15:30hs")
      informarDemora(20, numeroTurno)
      break
      case "15":
        alert ("Número incorrecto. Lea bien la consigna de inicio.")
      break
      case "16":
      alert ("Usted tiene turno a las 16:00hs")
      informarDemora(5, numeroTurno)
      break
      case "17":
      alert ("Usted tiene turno a las 16:30hs")
      informarDemora(10, numeroTurno)
      break
      case "18":
      alert ("Usted tiene turno a las 17:00hs")
      informarDemora(15, numeroTurno)
      break
      case "19":
      alert ("Usted tiene turno a las 17:30hs")
      informarDemora(20, numeroTurno)
      break
      case "20":
      alert ("Número incorrecto. Lea bien la consigna de inicio.")
      break

      default: 
      alert ("El cupo de turnos permitidos en el día va del 1 al 20, por favor, verifique el número. Lamentamos informarle que no se entregan más turnos por el día de hoy. Vuelva de lunes a viernes de 10 a 18hs.")
      break;
  }
} while (opcion < 20)


function informarDemora (tiempoEspera, numeroTurno){
   console.log("Para el turno " + numeroTurno + " el tiempo de espera aproximado es de " + tiempoEspera + " minutos.")
} 