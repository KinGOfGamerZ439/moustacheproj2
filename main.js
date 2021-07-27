function preload()
{

}

function setup()
{
    canvas=createCanvas(300, 300);
    canvas.center();
    Video=createCapture(VIDEO);
    Video.size(300, 300);
    Video.hide();

    posenet=ml5.poseNet(Video,modelLoaded);
    posenet.on('pose', gotposes);
}
function modelLoaded()
{
    console.log('Model Is Loaded')
}

function take_snapshot()
{
    save('You.png');
}
function draw()
{
    image(Video, 0, 0, 300, 300);

}
function gotposes(results)
{
   if(results.length > 0)
   {
       console.log(results);
       console.log("nose x =" + results[0].pose.nose.x);
       console.log("nose y =" + results[0].pose.nose.y);
   }
}