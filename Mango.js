class Mango{
    constructor(x, y, width){
        var options = {
            'isStatic' : true,
            'restitution' : 0,
            'friction' : 1
         
        }
        this.body = Bodies.circle(x, y, 30, options);
        this.width = width;
        this.image = loadImage("mango.png");
        this.radius = 30;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
       // imageMode(CENTER)
        image(this.image, pos.x, pos.y, this.width, this.width)
        pop();
    }
}