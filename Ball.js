class Ball{
    constructor(x, y, radius){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius=radius;
        World.add(world, this.body);
      }
      display(){
         push();
        translate(this.body.position.x, this.body.position.y);
       ellipseMode(RADIUS);
        fill(0);
        ellipse( this.body.position.x,this.body.position.y,50,50);
        pop();
      }
}