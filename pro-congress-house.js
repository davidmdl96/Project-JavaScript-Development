// #################################################################################################################################################
// ###################################### Fetch con JavaScript #####################################################################################

// const url = 'https://api.propublica.org/congress/v1/113/senate/members.json';
// // const dataMembers = Data.results[0].members;

// fetch(url, {
//   headers:{
//     'X-API-Key': 'Efz70ngEYDJdsyJI4n0Cs0XoHR9kxK5y9rOElXkm'
//   }
// }).then(function(Response) {
//   return Response.json()

// }).then(function (Response) {

//   let dataMembers = Response.results[0].members;

//   for (const i of dataMembers) {
//     data.push(i); 
//   }
  
  // generateTable(data);
  // filtrar();
  // filtros();

// }).catch(error => console.error('Error:', error));

//const output = document.querySelector('#data');

// #################################################################################################################################################
// ###################################### Objeto #####################################################################################

//Solo informacion para vue para un v-model, no lo utilizo en la pagina web. 

// var app = new Vue({
//   el: '#Partidos',
//   data: {
//          senators: [],
//          checkedBox: []
//   },
//   methods: {
 
//        greet: function () {
 
//           this.senators =  filtrarPartyVue(this.senators, this.checkedBox );
 
//       }
//   }
//  })
//  <input type="checkbox" id="Democrat" value="Democrat" v-model="checkedBox" v-on:click="greet()">

// #################################################################################################################################################
// ########################################################### Fetch ###############################################################################

// Fetch para Vue. Donde extremos la variable datamembers para luego llamarla en nuestro objeto Vue.

fetch('https://api.propublica.org/congress/v1/113/house/members.json',{headers:{'X-API-Key': 'Efz70ngEYDJdsyJI4n0Cs0XoHR9kxK5y9rOElXkm'}})
  .then(response => response.json())
  .then(json => {
  const data2 = json.results[0].members; 
  for (const i of data2) {
    dataMembers.push(i); 
  }
  filtrar();
  filtros();
})

// ################################################################################################################################################
// ############################################################ DATA TABLA 1 ######################################################################
let dataMembers = [];
// ################################################################################################################################################
// ########################################################### OBJETO VUE #########################################################################
let app = new Vue({  
  el: '#app',
    data: {
      dataMembers: dataMembers //base de datos producida por el fetch.  
    }
});
// ################################################################################################################################################
// ######################################################## TABLA JAVASCRIPT ######################################################################

// Funcion de generar tabla utilizando el fetch con javascript.  

// function generateTable(database) {
  
//   if (!database.length) {
//     const out = '<p>There are no members that match the specified filter.</p>';
//     output.innerHTML = out;
//    }

//   let tableHTML = `
//   <table class="table">

//   <thead>
//     <tr>
//       <th>Name</th>
//       <th>Party</th>
//       <th>State
//       <select id="selector" onchange="SelectState()">
//       <option value="select">---</option>
//       <option value="select">ALL</option>
      
//           <option name="select" value="TN">TN</option>
          
//           <option name="select" value="NH">NH</option>
          
//           <option name="select" value="WI">WI</option>
          
//           <option name="select" value="WY">WY</option>
          
//           <option name="select" value="MT">MT</option>
          
//           <option name="select" value="AK">AK</option>
          
//           <option name="select" value="CO">CO</option>
          
//           <option name="select" value="CT">CT</option>
          
//           <option name="select" value="MO">MO</option>
            
//           <option name="select" value="AR">AR</option>
          
//           <option name="select" value="CA">CA</option>
          
//           <option name="select" value="OH">OH</option>
                    
//           <option name="select" value="WA">WA</option>
          
//           <option name="select" value="MD">MD</option>
          
//           <option name="select" value="DE">DE</option>
                      
//           <option name="select" value="GA">GA</option>
                      
//           <option name="select" value="IN">IN</option>
          
//           <option name="select" value="OK">OK</option>
                                
//           <option name="select" value="DE">DE</option>
          
//           <option name="select" value="MA">MA</option>
          
//           <option name="select" value="TX">TX</option>
          
//           <option name="select" value="IN">IN</option>
          
//           <option name="select" value="IL">IL</option>
                      
//           <option name="select" value="CA">CA</option>
          
//           <option name="select" value="NE">NE</option>
          
//           <option name="select" value="AZ">AZ</option>
          
//           <option name="select" value="NY">NY</option>
                      
//           <option name="select" value="IA">IA</option>
          
//           <option name="select" value="NC">NC</option>
          
//           <option name="select" value="IA">IA</option>
          
//           <option name="select" value="UT">UT</option>
          
//           <option name="select" value="NV">NV</option>
          
//           <option name="select" value="HI">HI</option>
          
//           <option name="select" value="ND">ND</option>
                      
//           <option name="select" value="ME">ME</option>
          
//           <option name="select" value="IL">IL</option>
          
//           <option name="select" value="MN">MN</option>
          
//           <option name="select" value="LA">LA</option>
          
//           <option name="select" value="NJ">NJ</option>
          
//           <option name="select" value="MI">MI</option>
          
//           <option name="select" value="WV">WV</option>
                      
//           <option name="select" value="AZ">AZ</option>
          
//           <option name="select" value="MO">MO</option>
          
//           <option name="select" value="NJ">NJ</option>
          
//           <option name="select" value="MD">MD</option>
          
//           <option name="select" value="KS">KS</option>
                      
//           <option name="select" value="WA">WA</option>
                      
//           <option name="select" value="KY">KY</option>
                      
//           <option name="select" value="NV">NV</option>
          
//           <option name="select" value="ID">ID</option>
          
//           <option name="select" value="KS">KS</option>
          
//           <option name="select" value="WV">WV</option>
          
//           <option name="select" value="FL">FL</option>
          
//           <option name="select" value="VT">VT</option>
          
//           <option name="select" value="HI">HI</option>
                      
//           <option name="select" value="SC">SC</option>
          
//           <option name="select" value="AL">AL</option>
                      
//           <option name="select" value="SD">SD</option>
          
//           <option name="select" value="PA">PA</option>
          
//           <option name="select" value="NM">NM</option>
                      
//           <option name="select" value="LA">LA</option>
                      
//           <option name="select" value="VA">VA</option>
          
//           <option name="select" value="MA">MA</option>
          
//           <option name="select" value="RI">RI</option>
          
//           <option name="select" value="MS">MS</option>
          
//           <option name="select" value="OR">OR</option>
          
//         </select>
//         </th>

//       <th>Years in Office</th>
//       <th>% Votes w/ Party</th>
//     </tr>
//   </thead>

//   <tbody>`;

//   for (const i of database) {
//     const rowHTML = `
//     <tr>
//       <td><a href="${i.url}"> ${i.first_name} ${i.middle_name || ''} ${i.last_name}</a></td>
//       <td>${i.party}</td>
//       <td>${i.state}</td>
//       <td>${i.seniority}</td>
//       <td>${i.votes_with_party_pct}%</td>
//     </tr>
//     `;

//     tableHTML= tableHTML + rowHTML;
//   }

//   tableHTML=tableHTML + `
//   </tbody>
//   </table>
//   `;
//   output.innerHTML = tableHTML;

// }

// ################################################################################################################################################
// ############################################## GENERAMOS TABLA SOBRE EL ESTADO SELECCIONADO ####################################################

function SelectState() {
  let e = document.getElementById("selector");
  let selectorstate = e.options[e.selectedIndex].value;
  let dataMembersSelector =[]; 
  let ArrayConSelector = [];
  for (const i of dataMembers) { //Bucle que recorre los estados de la matriz
    dataMembersSelector.push(i);
    if (i.state == selectorstate) {
      ArrayConSelector.push(i);
    }      
  }
  if (e.selectedIndex == 1 || e.selectedIndex == 0) { // Condicion para cuando escoga all imprima base de datos entera
    app.dataMembers=dataMembersSelector; //Igualamos nuestro array generado por la funcion a nuestro objeto Vue.
  }else{
    app.dataMembers=ArrayConSelector; //Igualamos nuestro array generado por la funcion a nuestro objeto Vue.
  }
}
// ################################################################################################################################################
// ##################################################### MATRICES FILTROS #########################################################################

// Creo matrizes vacias, para luego rellenarlas en base a la funcion que se realize.
// La tabla que se muestre va en base a la matriz que se imprima.   

let Republicans = [];
let Democrats = [];
let Independents = [];
let RepublicansDemocrats = [];
let RepublicansIndependents = [];
let DemocratsRepublicans = [];
let DemocratsIndependents = [];
let Total = [];

// ################################################################################################################################################
// ################################################### Filtrar letra TABLA 1 ######################################################################

// Filtramos letra de la columna party. 

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
  if (i.party == 'R'|| i.party == 'D') {
    RepublicansDemocrats.push(i);
  }
  if (i.party == 'R'|| i.party == 'I') {
    RepublicansIndependents.push(i);
  }
  if (i.party == 'D'|| i.party == 'R') {
    DemocratsRepublicans.push(i);
  } 
  if (i.party == 'D'|| i.party == 'I') {
    DemocratsIndependents.push(i);
  }
  if (i.party == 'R'|| i.party == 'D'|| i.party == 'I') {
    Total.push(i);
  }
}
}
// ################################################################################################################################################
// ########################################################### FILTROS ############################################################################

// Depende del chechbox que escogamos, se realiza una condicion o otra.

function filtros() {

  let checkedBoxes = document.querySelectorAll('input[name=checkbox]:checked');

  // ########################################### Si no tenemos ningun ningun checkbox activado ###################################################

  if (checkedBoxes.checked == undefined) {
    app.dataMembers= dataMembers;
  }

  // ####################################################### DEMOCRAT ############################################################################

  if (checkedBoxes[0].id === 'democrat'){
    console.log(checkedBoxes);
    app.dataMembers=Democrats;
    if (checkedBoxes[1].id == 'republican'){
      app.dataMembers=DemocratsRepublicans;
    }
    if (checkedBoxes[1].id == 'independent'){
      app.dataMembers=DemocratsIndependents;
    }
    if (checkedBoxes[2].id == 'independent'){ //Si tenemos todos los checkboxs activados. 
      app.dataMembers=dataMembers;
    }
  }
  
  // ###################################################### REPUBLICAN ##########################################################################

  if (checkedBoxes[0].id == 'republican'){
    app.dataMembers=Republicans;
    if (checkedBoxes[1].id == 'democrat'){
      app.dataMembers=RepublicansDemocrats;
    }
    if (checkedBoxes[1].id == 'independent'){
      app.dataMembers=RepublicansIndependents;
    }
  }

  // #################################################### INDEPENDENT ###########################################################################

  if (checkedBoxes[0].id == 'independent'){
    app.dataMembers=Independents;
  }

} //Fin de la funcion filtros.

