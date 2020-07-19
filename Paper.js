class Paper{
    constructor(x,y,radius){
    var options = {
        isStatic: false,
        restitution:0.3,
        friction: 0.5,
        density: 1.2
    }
    this.image = loadImage("paper.png");
    this.width = radius;
    this.height = radius;
    this.body = Bodies.circle(x, y, 60,options);
    World.add(world,this.body);
    }
    
display(){
   
    var pops = this.body.position.x; 
    var pops1 = this.body.position.y; 
    push();
    ellipseMode("CENTRE");
    image(this.image,pops,pops1,this.width,this.height);
    pop();
    }
}