class Ball
{
    constructor(x,y,r)
    {
        var properties = {
            'isStatic':true,
            'restitution':1.0,
            'density':0.4,
            'friction':0.0
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,this.r,properties);
        World.add(world,this.body);
    }
    display()
    {
        push();
        fill("grey");
        strokeWeight(5);
        stroke("black");
        circle(this.body.position.x,this.body.position.y,this.r);
        pop();
    }
}