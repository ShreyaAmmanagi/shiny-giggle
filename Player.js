class Player {
    constructor(){
        this.index = 0,
        this.name = null,
        this.answer = null
    }
    getCount(){
        var count = database.ref('playerCount')
        count.on("value",function(data){
         playerCount = data.val()
        })
    }
    update(){
        var playerIndex = "players/player"+this.index
        database.ref(playerIndex).set({
            name:this.name,
            answer:this.answer
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    getPlayerInfo(){
        var players1 = database.ref('players')
        players1.on("value",function(data){
            allPlayers = data.val()
        })
    }
}