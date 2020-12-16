class Rope{
    constructor(bodyA, pointB){
        this.options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        // console.log(this.options);
        console.log(Matter.Constraint.create({
            bodyA: bodyA,
            pointB: pointB
        }))
        this.sling = Con.create(this.options);
        World.add(world, this.sling);
        this.pointB = pointB;
    }
    fly(){
        this.sling.bodyA = null;

    }

    display(){
     //   if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);

     //   }
        
    }
    
}