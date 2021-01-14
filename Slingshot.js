class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.image1=loadImage("sprites/sling1.png");
        this.image2=loadImage("sprites/sling2.png");
        this.image3=loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x<60)
            {
                strokeWeight(6);
                stroke("#301608")
                line(pointA.x-30, pointA.y, pointB.x, pointB.y);
                line(pointA.x-30, pointA.y, pointB.x+40, pointB.y-10);
                image(this.image3,pointA.x-30,pointA.y-15,15,25);
            }
            else
            {
                strokeWeight(2);
                stroke("#301608")
                line(pointA.x-30, pointA.y, pointB.x, pointB.y);
                line(pointA.x-30, pointA.y, pointB.x+40, pointB.y-10);
                image(this.image3,pointA.x-30,pointA.y-15,15,25);
            }
        }
        image(this.image1,200,25);
        image(this.image2,170,15);
    }
    
}