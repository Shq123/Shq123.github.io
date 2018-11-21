function Snake(options){
    this.width = options.width;
    this.height = options.height;
    this.space = options.space;
    this.colCount = this.width/this.space;
    this.rowCount = this.height/this.space;
    this.direction = "down";
    this.timer = null;
    this.ctx=options.ctx;
}
Snake.prototype.init = function(){
    var _this = this;
    this.drawMap();
    this.drawInitSnake();
    this.drawInitFood();
    this.addEvnet();
    this.timer = setInterval(function(){
        _this.drawSnake();

    },150)
}
Snake.prototype.drawInitSnake=function(){
    this.snake=[
        {x:0,y:20,color:"blue"},
        {x:20,y:20,color:"blue"},
        {x:40,y:20,color:"red"}
    ]

    //绘制蛇身体
    for(var j = 0 ; j < this.snake.length;j++){
        this.ctx.beginPath();
        this.ctx.rect(this.snake[j].x,this.snake[j].y,this.space,this.space);
        this.ctx.fillStyle= this.snake[j].color;
        this.ctx.fill();
    }
}
Snake.prototype.drawInitFood=function(){
    this.food={
        x:80,
        y:40,
        color:"orange"
    }
    //绘制食物
    this.ctx.beginPath();
    this.ctx.rect(this.food.x,this.food.y,this.space,this.space);
    this.ctx.fillStyle=this.food.color;
    this.ctx.fill();
}
Snake.prototype.drawMap = function(){
    this.ctx.strokeStyle = "#333";
    for(var i = 0 ; i <= this.colCount;i++){
        this.ctx.moveTo(0,i*this.space);
        this.ctx.lineTo(this.width,i*this.space);
        this.ctx.moveTo(i*this.space,0);
        this.ctx.lineTo(i*this.space,this.height);
        this.ctx.stroke();
    }
}
Snake.prototype.addEvnet = function(){
    var _this = this;
    document.addEventListener('keydown',function(evt){
        var event = evt || window.event;
        var keyCode = event.keyCode;
        if(keyCode==38 && _this.direction !='down'){
            _this.direction = 'up'
        }
        if(keyCode==40 && _this.direction !='up'){
            _this.direction = 'down'
        }
        if(keyCode==37 && _this.direction !='right'){
            _this.direction = 'left'
        }
        if(keyCode==39 && _this.direction !='left'){
            _this.direction = 'right'
        }
    })
}
Snake.prototype.eatFood = function(){
    if(this.snake[this.snake.length-1].x == this.food.x && this.snake[this.snake.length-1].y == this.food.y){
        this.addSnake();
        this.createFood();
    }
}
Snake.prototype.createFood = function(){
    this.food={
        x:Math.floor(Math.random()*this.colCount)*this.space,
        y:Math.floor(Math.random()*this.rowCount)*this.space,
        color:"orange"
    }

    this.ctx.beginPath();
    this.ctx.rect(this.food.x,this.food.y,this.space,this.space);
    this.ctx.fillStyle=this.food.color;
    this.ctx.fill();
}
Snake.prototype.snakeMove = function(){
    this.x = 0 ;
    this.y = 0 ;
    if(this.direction == 'right'){
        this.x = this.space;
    }
    if(this.direction == 'left'){
        this.x=-this.space;
    }
    if(this.direction == 'down'){
        this.y = this.space
    }
    if(this.direction == 'up'){
        this.y= -this.space;
    }
    for(var i = 0 ; i < this.snake.length-1;i++){
        this.snake[i].x = this.snake[i+1].x;
        this.snake[i].y = this.snake[i+1].y;
    }
    this.snake[this.snake.length-1].x +=this.x;
    this.snake[this.snake.length-1].y +=this.y;
}
Snake.prototype.drawSnake = function(){
    this.ctx.clearRect(this.snake[0].x,this.snake[0].y,this.space,this.space);
    this.drawMap();
    this.snakeMove();
    for(var j = 0 ;j < this.snake.length;j++ ){
        this.ctx.beginPath();
        this.ctx.rect(this.snake[j].x,this.snake[j].y,this.space,this.space);
        this.ctx.fillStyle= this.snake[j].color;
        this.ctx.fill();
    }
    this.eatFood();
    this.copySnake();
}
Snake.prototype.addSnake = function(){
    var new_snake_body = {
        x:this.snake[0].x-this.space,
        x:this.snake[0].y-this.space,
        color:"blue"
    }
    this.snake.unshift(new_snake_body);
}
Snake.prototype.toCheck = function(){
    var snakeHead = this.snake[this.snake.length-1];
    if(snakeHead.x  < 0 || snakeHead.x > this.width || snakeHead.y < 0 || snakeHead.y>this.height){
        clearInterval(this.timer)
    }
    for(var i = 0 ; i < this.newSnake.length;i++ ){

        for(var j = i +1; j<this.newSnake.length;j++){
            if(this.newSnake[j].x == this.newSnake[i].x && this.newSnake[j].y == this.newSnake[i].y){
                clearInterval(this.timer);
                console.log("jiao dao snake body .")
                return ;
            }
        }
    }
}
Snake.prototype.copySnake = function(){
    this.newSnake = [];
    for(var i = 0 ; i < this.snake.length; i++){
        this.newSnake.push({
            x:this.snake[i].x,
            y:this.snake[i].y
        })
    }
    this.toCheck(this.newSnake);
}
var s = new Snake()
s.init();