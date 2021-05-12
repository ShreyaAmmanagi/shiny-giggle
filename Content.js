class Content1{
    constructor(){
     this.sent1 = createElement('h1')
     this.input = createInput('name')
     this.button = createButton('submit');

    }
    display1(){
      this.sent1.html('Welcome')
      this.sent1.position(50,20);
      this.input.position(50,100)
      this.button.position(50,200);
      this.button.mousePressed(()=>{
          this.sent1.hide()
          this.input.hide()
          this.button.hide()
          player.name = this.input.value()
         this.input2 = createInput('message')
          this.input2.position(100,200)
          this.button2 = createButton('send')
          this.button2.position(50,200)
          this.button2.mousePressed(()=>{
          player.answer = this.input2.value()  
          playerCount = playerCount+1         
          player.index = playerCount
          player.update()
          player.updateCount(playerCount)
          gameState = 1
          Chat.update(1)     
          })
                 
      })
    }
}