 img="";
 Status="";
 function setup(){
canvas=createCanvas(600 , 400 );
canvas.center();
objectdetector=ml5.objectDetector("cocossd",modelLoaded);
}
function preload(){
    img=loadImage("Bottle.jpg ");
}
function draw(){
    image(img,0,0,600,400);
    fill("blue");
   text("bottle",205,15);
   noFill();
   stroke("blue");
   rect(195,5,200,390);


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
