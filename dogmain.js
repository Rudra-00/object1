 img="";
 Status="";
 function setup(){
canvas=createCanvas(600 , 400 );
canvas.center();
objectdetector=ml5.objectDetector("cocossd",modelLoaded);
}
function preload(){
    img=loadImage("frisbee and dog.jpg ");
}
function draw(){
    image(img,0,0,600,400);
    fill("blue");
   text("dog",45,75);
   noFill();
   stroke("blue");
   rect(45,55,300,330);

   fill("blue");
   text("frisbee",290,110);
   noFill();
   stroke("blue");
   rect(330,60,130,60);

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
