const Engine = Matter.Engine ;
const World = Matter.World ;
const  Events = Matter.Events ;
const  Bodies = Matter.Bodies;
 var thunder,thu;
 var maxDrop =100 ; 
var canvas ,test,test1;
var rain = [] ; 
function preload(){
    //thunder = loadAnimation("1.png","2.png","3.png","4.png") 
}

function setup(){
    engine = Engine.create();
    world = engine.world;
    canvas = createCanvas(displayWidth,displayHeight);
    for (var j = 75; j <=width; j=j+100){ 
         rain.push(new Drop(j,75));
    }
    for (var j = 100; j <=width; j=j+100){ 
        rain.push(new Drop(j,75));
   }
   for (var i = 0; i <maxDrop ; i++) {
      
    rain.push(new Drop(random(0,400),random(0,400)));
  }
  //thu = createSprite(10,10,100,100);
  //sthu.setAnimation("1.png","2.png","3.png","4.png");
  test = new Umbrella(displayWidth/2,displayHeight-210,500,500,10)  ;
  //  test1 = new Drop(displayWidth-200,displayHeight-300);    
    
   
}

function draw(){
    background("black");
    Engine.update(engine);
    if(frameCount%60===0){
        rain.push(new Drop(random(width/2-30, width/2+30)));
      }
    
     for (var j = 0; j < Drop.length; j++) {
      
        rain[j].display();
      }
      
      for (var j = 75; j < Drop.length; j++) {
      
        rain[j].display();
      }
    test.display();
    //test1.display();
    
   
}   

