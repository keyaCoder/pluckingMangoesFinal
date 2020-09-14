class Stone{
    constructor(x, y, width){
        var options = {
            'isStatic' : false,
            'restitution' : 0,
            'friction' : 1,
            'density' : 1.2
        }
        this.body = Bodies.circle(x, y, width/3, options);
        this.width = width;
        this.image = loadImage("stone.png");
        this.radius = width/3;
    
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
     //   imageMode(CENTER)
        image(this.image, pos.x, pos.y, this.width, this.width)
        pop();
    }
}