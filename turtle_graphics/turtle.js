//Drawing Turtle Graphics Style- Homework week : 2


class TurtleArray {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.arr = [[this.x,this.y]];
    this.maxX = -Infinity;
    this.maxY = -Infinity;
    this.currDirection = "east";
  }
  
  checkDirection(){
    return this.currDirection;
  }

  forward(n){
    let dir = this.checkDirection();
    for(let i = 1; i <= n; i ++){
      if(dir === "north"){
        this.y--;
      } else if(dir === "south"){
        this.y++;
      } else if(dir === "east"){
        this.x++;
      } else if(dir === "west"){
        this.x--;
      }
      this.maxX = Math.max(this.x, this.maxX);
      this.maxY = Math.max(this.y, this.maxY);
      this.arr.push([this.x, this.y]);
    }
    return this;
  }

  right(){
    if(this.currDirection == "east"){
      this.currDirection = "south";
    }else if(this.currDirection == "west"){
      this.currDirection = "north";
    }else if(this.currDirection == "south"){
      this.currDirection = "west";
    }else if(this.currDirection === "north"){
      this.currDirection = "east";
    }
    return this;
  }

  left(){
    if(this.currDirection == "east"){
      this.currDirection = "north";
    }else if(this.currDirection == "west"){
      this.currDirection = "south";
    }else if(this.currDirection == "south"){
      this.currDirection = "east";
    }else if(this.currDirection === "north"){
      this.currDirection = "west";
    }
    return this;
  } 
  
  allPoints(){
    console.log(this.arr);
    return this.arr;
  };

  print(){
    console.log("........BEGIN LOG");
    for(let i = 0;i <= this.maxY;i++){
      for(let j = 0; j <= this.maxX;j++){
        let item = JSON.stringify([j,i]);
        let arrJSON = JSON.stringify(this.arr);
        if(arrJSON.indexOf(item) != -1){
          process.stdout.write("■ ");
        }else{
          process.stdout.write("□ ");
        }
      }
      console.log("\n");
    } 
    console.log(".........END LOG");
  } 
}

const arrTurtle = new TurtleArray(0,0);
arrTurtle.forward(3).right().forward(3).left().forward(3).left().forward(3).right().forward(5).right().forward(2).print();
arrTurtle.allPoints();
