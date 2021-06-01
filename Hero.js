class Hero {
  constructor(x,y,r,h)
	{
		var options = { 
			density: 1, 
			restitution:0.02
			
		};
		this.x=x;
		this.y=y;
		this.r=r;
		this.h=h
		this.image=loadImage("superhero1.png");
		this.body=Bodies.rectangle(this.x, this.y, (this.r),this.h, options);
		World.add(world, this.body);
		this.image.setScale=1*width/1366;
	}
	display()
	{
			
			var heroPos=this.body.position;		
			var a = this.body.angle;
			push()
			//translate(heroPos.x, heroPos.y);
			//rotate(a);
			rectMode(CENTER)
			//rect(heroPos.x,heroPos.y,this.r,this.h)
			//fill(255,0,255)
			imageMode(CENTER);
			image(this.image,heroPos.x, heroPos.y,this.r, this.h)
			
			pop()
			
	}
}
