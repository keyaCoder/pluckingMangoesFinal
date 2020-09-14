class Tree{
    constructor(x, y, width, height){
        var options = {
            'isStatic' : true,
            'density': 0.02
            
         
        }
        this.body = Bodies.rectangle(x, y, width, 10, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("tree.png");
    
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
      //  imageMode(CENTER)
        image(this.image, pos.x, pos.y, this.width, this.height)
        pop();
    }
}