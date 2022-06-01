var submit = document.getElementById('submit');
var createString = document.getElementById('createStrings');
var selectedAbv = [];
var selectedEnv = [];
var selectedMachine = [];
var selectedCloud = [];

submit.addEventListener('click', function() {

  for (var option of document.getElementById('abvList').options)
  {
      if (option.selected) {
          selectedAbv.push(option.value);
      }
  }
  for (var option of document.getElementById('envList').options)
  {
      if (option.selected) {
          selectedEnv.push(option.value);
      }
  }
  for (var option of document.getElementById('machineList').options)
  {
      if (option.selected) {
          selectedMachine.push(option.value);
      }
  }
  for (var option of document.getElementById('cloudList').options)
  {
      if (option.selected) {
          selectedCloud.push(option.value);
      }
  }



  if(selectedAbv.length == 0 || selectedCloud.length == 0 || selectedEnv.length == 0 || selectedMachine.length == 0){
    alert("Not all fields were filled out");
    document.getElementById("mydiv").classList.add('invisible');
    document.getElementById("createStrings").classList.add('invisible');
    document.getElementById('mydiv').innerHTML = "";
    selectedAbv = [];
    selectedEnv = [];
    selectedMachine = [];
    selectedCloud = [];

  }
  else{
    document.getElementById("mydiv").classList.remove('invisible');
    document.getElementById("createStrings").classList.remove('invisible');
    loadStrings();
  }

})

function loadStrings(){
  htmlStrings = ""

  for(let a = 0; a < selectedCloud.length; a++){
    for(let b = 0; b < selectedMachine.length; b++){
      for(let c =0; c < selectedEnv.length; c++){
        for(let d =0; d < selectedAbv.length; d++){

          //Add label
          if(selectedEnv[c] == "Other"){
            htmlStrings = htmlStrings + "<p>" +"pw-"+ selectedCloud[a] + "-" + selectedMachine[b] + "-" + "<input type='text' id='desc' placeholder='Description'></input>" + "-" + "<input type='text' id='customENV' placeholder='Other'></input>" + "-" +  selectedAbv[d].replace('-','') +"</p>";
          }else{
            htmlStrings = htmlStrings + "<p>" + "pw-"+selectedCloud[a] + "-" + selectedMachine[b] + "-" + "<input type='text' id='desc' placeholder='Description'></input>" + "-" + selectedEnv[c] + "-" +  selectedAbv[d].replace('-','') +"</p>";
          }

        }
      }
    }
    
  }
  
  document.getElementById('mydiv').innerHTML=htmlStrings;
  selectedAbv = [];
  selectedEnv = [];
  selectedMachine = [];
  selectedCloud = [];
}


createString.addEventListener('click', function() {
  tb = document.querySelectorAll('#desc');
  ce = document.querySelectorAll('#customENV');

  for(let a = 0; a < tb.length; a++){
    if(tb[a].value != ""){
      var e = tb[a];
      var d = document.createTextNode(tb[a].value)
      e.parentNode.replaceChild(d, e);
    }
  }

  for(let b = 0; b < ce.length; b++){
    if(ce[b].value != ""){
      var e = ce[b];
      var d = document.createTextNode(ce[b].value)
      e.parentNode.replaceChild(d, e);
    }
  }


})







const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl));