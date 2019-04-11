//######################################################################################################################################################

//Conexión con la base de datos con el fetch.

fetch('https://api.propublica.org/congress/v1/113/house/members.json',{headers:{'X-API-Key': 'Efz70ngEYDJdsyJI4n0Cs0XoHR9kxK5y9rOElXkm'}})
  .then(response => response.json())
  .then(json => {
  const data2 = json.results[0].members; 
  for (const i of data2) {
    dataMembers.push(i);
  }
  //Extraemos datos de tabla 1 en 4 variables globales.
  filtrar();
  //Extraemos datos de tabla 2 a un variable global.
  let descendiente = Matrizdescendiente();
  let rankingDescente = descendiente.splice(0,10);
  for (const i of rankingDescente) {
    rankingDescendiente.push(i);
  }
  //Extraemos datos de tabla 3 a un variable global.
  let ascendente = MatrizAscendente();
  let rankingAscendente = ascendente.splice(0,10);
  for (const i of rankingAscendente) {
    rankingAscendiente.push(i);
  }          
})

//######################################################################################################################################################

//Variables Globales donde obtendremos su contenido en nuestro objeto Vue.
// Objeto Vue al final de pagina.

// ########################################################## DATA MEMBERS #############################################################################
let dataMembers = [];
// ########################################################## TABLA 1 ##################################################################################
let Republicans = [];
let Democrats = [];
let Independents = [];
let Total = [];
// ########################################################## TABLA 2 ##################################################################################
let rankingDescendiente = [];
// ########################################################## TABLA 3 ##################################################################################
let rankingAscendiente = [];
// #####################################################################################################################################################

//Funciones que utilizaremos para las diferentes tablas. 

// ################################################### TABLA 1 #########################################################################################
// ########################################### Filtrar letra TABLA 1 ###################################################################################
function filtrar() {
  for (const i of dataMembers) {
    if (i.party == 'R') {
      Republicans.push(i);
    }
    if (i.party == 'D') {
      Democrats.push(i);
    }
    if (i.party == 'I') {
      Independents.push(i);
    }
    if (i.party == 'R'||'D'||'I') {
      Total.push(i);
    }
  }
}
// ########################################### % total de las matrices TABLA 1  #######################################################################
function VotedWithPartyRepublicans() {
  let sumaRepublicansTotal = 0;

  for (const i of Republicans) {
  sumaRepublicansTotal= sumaRepublicansTotal + i.votes_with_party_pct;
  }
  const ResultadoRepublicans = sumaRepublicansTotal / Republicans.length;

  return ResultadoRepublicans;
}

function VotedWithPartyDemocrats() {
  let sumaDemocratsTotal = 0;
    
  for (const i of Democrats) {
  sumaDemocratsTotal = sumaDemocratsTotal + i.votes_with_party_pct;
  }  
  const ResultadoDemocrats = sumaDemocratsTotal / Democrats.length;

  return ResultadoDemocrats;
}

function VotedWithPartyIndepndents() {
  let sumaIndependentsTotal = 0;
    
  for (const i of Independents) {
  sumaIndependentsTotal = sumaIndependentsTotal + i.votes_with_party_pct;
  }
  if (sumaIndependentsTotal>0) {
  let ResultadoIndependents = sumaIndependentsTotal / Independents.length;
  return ResultadoIndependents;
  }
  if (sumaIndependentsTotal==0) {
    ResultadoIndependents=0;
  }
  return ResultadoIndependents;
}

function VotedWithPartyTotal() {
  let sumaTotal = 0; 
  for (const i of Total) {
  sumaTotal = sumaTotal + i.votes_with_party_pct;
  }  
  const ResultadoTotal = sumaTotal / Total.length;
  return ResultadoTotal;
}
// ########################################################## TABLA 2 ##################################################################################
// ####################################################### Ordernar matrices ###########################################################################

function Matrizdescendiente() {
  let descendiente = [];
  for (const i of Total) {
    descendiente.push(i);
  }
  descendiente.sort(function (a, b) {return (b.missed_votes_pct - a.missed_votes_pct);})
  return descendiente;
}
// ########################################################## TABLA 3 ##################################################################################
// ####################################################### Ordernar matrices ###########################################################################

function MatrizAscendente() {
  let ascendente = [];
  for (const i of dataMembers) {
    ascendente.push(i);
  }
  ascendente.sort(function (a, b) {
    return (a.missed_votes_pct - b.missed_votes_pct);
  })
  return ascendente;
}
//############################################################## VUE ##################################################################################

//Objeto Vue con el que conectaremos desde el HTML con el nombre "app".

  let app = new Vue({  
    el: '#app',
    
      data: {
        // Base Datos
        dataMembers: dataMembers,
        // Tabla 1
        Republicans: Republicans,
        Democrats: Democrats,
        Independents: Independents,
        Total:Total,
        // Tabla 2
        rankingDescente: rankingDescendiente,
        // Tabla 3
        rankingAscendente: rankingAscendiente
      }
  });
//####################################################################################################################################################