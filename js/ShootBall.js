class ShootBall{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }

    attach(body){
 flag = "red";
 this.chain.bodyA = body;
    }

    shoot(){
   this.chain.bodyA = null;     
    }

    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        this. pointB.x = launcherX;
        this.pointB.y = launcherY;
        var pointB = this.pointB;
        }
    }

}
