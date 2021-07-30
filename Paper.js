class Paper{
    constructor(x,y){
        var options={
            'isStatic':false,
            'density':0.1,
            'restitution':0.3,
            'friction':0.1,
        }
        this.image=loadImage("paper.png")
        this.body=Bodies.circle(x,y,30,options);
        this.diameter=30;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER)
        image(this.image,0,0,this.diameter,this.diameter)
        pop();
    }
}