function Field(elementId){	
	this.currentPoint = 0;
	this.currentPlayY = 10;
	
	this.ctx = document.getElementById(elementId).getContext('2d');
	
	this.draw = function(){
			this.ctx.fillStyle = "rgb(0, 153, 41)"
			this.ctx.fillRect(0, 0, 720, 300);
			this.fillEndZones();
			this.createLines();
	}
	
	this.createLines = function(){
		this.ctx.strokeStyle = "rgb(255, 255, 255)";
		this.ctx.lineWidth = 2;
		
		//create yard lines
		for(var i = 0; i < 11; i++){
			this.drawLine(60 + i*60);
		}
	}
	
 	this.drawLine = function(x){
		this.ctx.beginPath();
		this.ctx.moveTo(x, 0);
		this.ctx.lineTo(x, 300);
		this.ctx.stroke();
	}
	
	this.fillEndZones = function(){
		this.ctx.fillStyle = "blue";
		this.ctx.fillRect(0, 0, 60, 300);
		this.ctx.fillStyle = "red";
		this.ctx.fillRect(660, 0, 60, 300);
	}
	
	this.setStartingPoint = function(yards){
		this.currentPoint = yards * 2 * 3 + 60;
	}
	
	this.markPlay = function(yards){
		endPoint = this.currentPoint + yards * 3 * 2;
		if(endPoint > 660)
			endPoint = 660;
		
		this.ctx.strokeStyle = "blue";
		this.ctx.lineWidth = 10;
		
		this.ctx.beginPath();
		this.ctx.moveTo(this.currentPoint, this.currentPlayY);
		this.ctx.lineTo(endPoint - 4, this.currentPlayY);
		this.ctx.stroke();
		
		this.ctx.beginPath();
		this.ctx.strokeStyle = "black";
		this.ctx.moveTo(endPoint - 4, this.currentPlayY);
		this.ctx.lineTo(endPoint, this.currentPlayY);
		this.ctx.stroke();
		
		this.currentPoint = endPoint;
		this.currentPlayY = this.currentPlayY + 12;
	}
	
	this.yardsToGo = function(){
		var result = (660 - this.currentPoint) / 2 / 3;
		return result;
	}
	
	this.firstDownLine = function(yardLine){
		this.ctx.beginPath();
		this.ctx.moveTo(yardLine * 2 * 3 + 60, 0);
		this.ctx.lineTo(yardLine * 2 * 3 + 60, 300);
		this.ctx.strokeStyle = "yellow";
		this.ctx.lineWidth = 2;
		this.ctx.stroke();
	}
	
	this.draw();
}