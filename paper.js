class paper{
    constructor(x,y,r)
    {
        var options = {
            isStatic:false,
            density:1.2,
            friction:0,
            restitutution:0.3
        }
        this.r = r
        this.x = x
        this.y = y

        this.body = Bodies.circle(x,y,(r)/3,options);
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r)
        pop();
    }
}