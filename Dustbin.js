
class Dustbin{
    constructor(x,y,width,height){
      var options = {
        isStatic: true,
    }
    this.image = loadImage("dustbingreen.png");
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, 10, 10,options);
    World.add(world,this.body);
   
    }
    
display(){
  push();
  image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
  pop();
    }
}