
function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(120, 290);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    circle(30, 30, 75);
    fill(255, 0, 0);
    stroke(255, 0, 0);

    image(video, 75, 75, 500, 390 );
}

function take_snapshot()
{
    save("Gatu.png");
}