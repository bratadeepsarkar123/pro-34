class Monster {
  constructor(x,y,r,h)
	{
		var options = { 
			density: 5, 
			
			restitution:0
    	};   
		this.x=x;
		this.y=y;
		this.r=r;
		this.h=h;
		this.image1=loadImage("monster.png");
		this.image2=loadImage("monster1.png");
		this.image3=loadImage("monster2.png");
		this.image;
		this.g;
		this.Visibility=255;
		//this.body.debug=true;		
		
		
		this.body=Bodies.rectangle(this.x, this.y, (this.r),this.h, options)
		World.add(world, this.body);

	}
	display(){	
		
			var sa=this.body.position;
			
			
			
				
					
	if(this.body.speed < 3){
		push();
			if(frameCount%100===0&&this.image)
					 this.g=Math.round(random(0,2))
				if(this.g===0){
					this.image=this.image1
				}else if(this.g===1){
					this.image=this.image2
				}else{
					this.image=this.image3
				}
				
			
			imageMode(CENTER);
			image(this.image,sa.x,sa.y,4*this.r/2, 3*this.h/2)
		pop();
		}
		else{
			World.remove(world, this.body);
			push();
			this.Visiblity = this.Visiblity - 5;
			console.log(this.Visibility)
			tint(255,this.Visiblity);
			image(this.image, this.body.position.x, this.body.position.y, 50, 50);
			pop();
		}
		}

	score(){
		if (this.Visiblity < 0 && this.Visiblity > -1005){
			
			
			score=score+10;
			
		}
	}
		
}

