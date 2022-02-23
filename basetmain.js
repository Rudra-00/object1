 img="";
 Status="";
 function setup(){
canvas=createCanvas(600 , 400 );
canvas.center();
objectdetector=ml5.objectDetector("cocossd",modelLoaded);
}
function preload(){
    img=loadImage("base.jpg ");
}
function draw(){
    image(img,0,0,600,400);
    fill("blue");
   text("Base Bat",35,20);
   noFill();
   stroke("blue");
   rect(35,10,60,380);

   fill("blue",290,90);
   text("Base Ball",230,270);
   noFill();
   stroke("blue");
   rect(230,260,180,100);

}
function modelLoaded(){
    console.log("modelloaded");
    Status=true;
    objectdetector.detect(img,gotResult);
}
function gotResult(error,results)
{
if(error){
    console.error(error);}
else{
    console.log(results);
} 
        
   

}
