class Paper{

constructor(x,y,){
     var options ={
     restitution:0.3,
     friction:0.5,
     density:1.2
    }
    

    this.body = Bodies.circle(x,y,20,options);
    this.x = x;
    this.y = y;
    this.radius = 20;
    this.image = loadImage("paper/Paper.png");
    World.add(world,this.body);
}

    display(){

      var paperpos=this.body.position;

      push();
      translate(paperpos.x,paperpos.y);
      imageMode(CENTER);
      fill("white");
      image(this.image, 0, 0,70,70);
      pop();

    }







}
