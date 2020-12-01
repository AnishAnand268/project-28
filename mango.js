class Mango{
  constructor(x,y,width,height){
   var options={
     isStatic:false,
     restitution:0.3,
     friction:0,
     density:1.2
     
 }   
 this.x = x;
 this.y = y;
 this.width = width;
 this.height = height;
 this.image = loadImage("mango.png");
 this.body = Bodies.rectangle(this.x ,this.y ,this.width,this.height ,options)
 

 World.add(world,this.body);
}
display(){
  var paperpos = this.body.position;
  
  push();
  translate(paperpos.x, paperpos.y);
  
  rectMode(CENTER);
  //strokeWeight(3);
  
  fill(255,0,255);
  imageMode(CENTER);
  image(this.image,0,0,this.width,this.height)
  //ellipse(0,0,this.radius,this.radius);
  pop();
}
}