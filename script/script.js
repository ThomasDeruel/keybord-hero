var ui = {
  space:document.querySelector('.space'),
  letters:document.querySelectorAll('.letters'),
  goals:document.querySelectorAll('.goals'),
  columns: document.querySelectorAll('.columns'),
  letter:undefined,
  goal:undefined
}
var a = function () {
  var newDiv = document.createElement("div");
   newDiv.classList.add('letters', 'show');
   var letters = document.createTextNode("A");
   newDiv.appendChild(letters);
  ui.columns[0].insertBefore(newDiv, null);//on inser apres le 'null' la nouvelle div au noeud paren columns[0]
}
var z = function () {
  var newDiv = document.createElement("div");
  newDiv.classList.add('letters', 'show');
  var letters = document.createTextNode("Z");
  newDiv.appendChild(letters);
  ui.columns[1].insertBefore(newDiv, null);
}
var e = function () {
  var newDiv = document.createElement("div");
  newDiv.classList.add('letters', 'show');
  var letters = document.createTextNode("E");
  newDiv.appendChild(letters);
  ui.columns[2].insertBefore(newDiv, null);
}
var r = function () {
  var newDiv = document.createElement("div");
  newDiv.classList.add('letters', 'show');
  var letters = document.createTextNode("R");
  newDiv.appendChild(letters);
  ui.columns[3].insertBefore(newDiv, null);
}
var array = [a, z, e, r]
var position = Math.round(Math.random() * 3);
var fn = array[position];
fn();
ui = {
  space:document.querySelector('.space'),
  letters:document.querySelectorAll('.letters'),
  goals:document.querySelectorAll('.goals'),
  columns: document.querySelectorAll('.columns'),
  letter:undefined,
  goal:undefined,
  column:undefined
};

var interval = window.setInterval(function(){
  var array = [a, z, e, r]
  var position = Math.round(Math.random() * 3);
  var fn = array[position];

  fn();
  return ui = {
    space:document.querySelector('.space'),
    letters:document.querySelectorAll('.letters'),
    goals:document.querySelectorAll('.goals'),
    columns: document.querySelectorAll('.columns'),
    letter:undefined,
    goal:undefined,
    column:undefined
  };
},2000);


console.log(ui)
spacepress();

function spacepress(){
  window.addEventListener('keydown',function(event){
        ui.space.classList.add('spaceActive');
        if(event.which === 32){
          for (var i = 0; i < ui.letters.length; i++) {
            ui.letter = ui.letters[i];
            ui.goal = ui.goals[i];
            ui.column = ui.columns[i];
            LetterY = ui.letter.getBoundingClientRect().y
            if(ui.letter.classList.contains('show')){
              if(ui.letter.getBoundingClientRect().y < 665 && ui.letter.getBoundingClientRect().y > 645){
              hidden(ui.letter);
              return console.log('1000 POINTS');
              }
              else if( LetterY > 600 && LetterY < 700 ){
                  hidden(ui.letter);
                 return console.log('500 points');
              }
            }
          }
        }
  })
  window.addEventListener('keyup',function(event){
        ui.space.classList.remove('spaceActive');
  })
}
function hidden(letter){
    letter.classList.add('hidden');
    letter.addEventListener('transitionend',function(){
    this.remove();
    })
}
