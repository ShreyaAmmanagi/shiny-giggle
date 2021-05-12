var canva;
var database;
var playerCount,gameState;
var allPlayers,player,content,Chat;
function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database()
  Chat = new mainPart()
  Chat.getState()
  Chat.start()

}


function draw(){
  background("pink");
  if(playerCount == 2){
   Chat.update(1)
  }
  if(gameState == 1){
    Chat.play()
  }
}
