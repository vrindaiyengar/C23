class Ground{
    constructor(x,y,width,height){
        var option={
            isStatic:true

        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.width=this.width;
        this.height=this.height;
        World.add(world,this.body);


    }
    display(){
        var pointA=this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pointA.x, pointA.y,this.width,this.height);
    }
}
