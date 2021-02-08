class Drop{
    constructor(x,y){
        var options = {
            isStatic: false,
            restitution:0.4,
            friction:0.1
        }
        this.r = 10;
        this.color ="blue"
        this.body = Bodies.circle(x, y, this.r,options);  
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
        /*if (this.Drop.position.y > Height){
            Matter.Body.setPosition(this.Drop,{x:radom(0,400),y:random(0,400)})

        }*/
    }    
}