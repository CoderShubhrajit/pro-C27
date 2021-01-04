class Rope
{
    constructor(bodyA,pointB)
    {
        var properties = {
            bodyA: bodyA, pointB: pointB, stiffness: 0.4, lenght: 10
        }
        this.thread = Constraint.create(properties);
        this.pointB = pointB;
        this.bodyA = bodyA;
        World.add(world,this.thread);
    }
    display()
    {
        strokeWeight(4);
        line(this.thread.bodyA.position.x,this.thread.bodyA.position.y,this.pointB.x,this.pointB.y);
    }
}