class Boy{
    constructor(x, y, width, height){
        var options = {
            'isStatic' : true,
            
         
        }
        this.body = Bodies.rectangle(x, y, width/2, height/2, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("boy.png");
    
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
     //   imageMode(CENTER)
        image(this.image, pos.x, pos.y, this.width, this.height)
        pop();
    }
}