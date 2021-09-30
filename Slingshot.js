class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling1.scale=0.2 
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    
    display(){
          image(this.sling1,200,70);
          image(this.sling2,170,70);
          
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(9);
            stroke(48,22,8) 
            line(pointA.x-30, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-30, pointA.y, pointB.x+20, pointB.y); 
           image(this.sling3,pointA.x-30, pointA.y-5,10,20)
        
        }
    }
    
}