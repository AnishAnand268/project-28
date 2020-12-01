class Stone{
   constructor(x,y,radius){
       var options={
           isStatic:false,
           restitution:0,
           friction:1,
           density:1.2
       }

        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("stone.png");
        this.body = Bodies.circle(this.x,this.y,this.radius/2,options);
        World.add(world,this.body);
      }
      display(){
        var stonepos = this.body.position;
        push();
        translate(stonepos.x,stonepos.y);
        rectMode(CENTER);
        fill(255,0,255);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
   
      }

     }