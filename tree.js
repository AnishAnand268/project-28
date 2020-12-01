class Tree{
   constructor(x,y,width,height){
       var options={
           isStatic:true,
           restitution:0,
           friction:0,
           density:0
       }
       this.x = x;
       this.y = y;
       this.width = width;
       this.height = height;
       this.image = loadImage("tree.png");
       this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options)
       World.add(world,this.body);
   }
   display(){
       var treepos = this.body.position;
       push();
       translate(treepos.x,treepos.y);
       rectMode(CENTER);
       fill(255,0,255);
       imageMode(CENTER);
       image(this.image,0,0,this.width,this.height);
   }
}