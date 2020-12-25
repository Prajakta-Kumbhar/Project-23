class Box
{
    constructor(x,y,width1,height1)
    {

       this.body = Bodies.rectangle(x,y,width1,height1);
       this.width = width1;
       this.height = height1;
       this.x = x;
       this.y = y;
       World.add (world,this.body);
    }

    display()
    {
        var position = this.body.position;

        fill("red");
        rect(this.x,this.y,this.width,this.height);
    }
}