class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = 0;
    this.imageCount = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }


  imageGetCount(){
    var imageCountRef = database.ref('imageCount');
    imageCountRef.on("value",(data)=>{
      imageCount = data.val();
    })
  }

 

  imageUpdateCount(count){
    database.ref('/').update({
      imageCount: count
    });
  } 
  

  
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  } 
  

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      
    });
  }

  //static means common functions and will be called by class name and not by the object of the class
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  getCarsAtEnd(){
    database.ref('carsAtEnd').on("value",(data)=>{
    this.rank= data.val();
    

  })
}

  static updateCarsAtEnd(rank){
    database.ref('/').update({
    carsAtEnd:rank
    })

  }

};
