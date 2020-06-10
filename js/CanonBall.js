class CanonBall {
  constructor(x, y) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    }
   
    this.width = 25;
    this.height = 25;
    this.body = Bodies.rectangle(x,y,this.width, this.height, options);
    this.image = loadImage("assets/canonBall.png");
    World.add(world,this.body);
  };

  display(){
    if(flag === "launch"){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
  }
  };
};
