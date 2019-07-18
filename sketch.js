var range = 90;
var noiseVar = 1;
var noiseVar2 = 1;
var noiseVar3 = 1;
var noiseVar4 = 1;
var noiseScale = 0.02;
var dotX = 0;
var dotY = 100;
var noiseX = 0;
var noiseY = 200;
var noiseY2 = 300;
var noiseY3 = 400;
var noiseY4 = 500;

function setup() {
    createCanvas(600, 600);
    background(0);
}

function draw() {
    stroke(255);

    // random()
    var randVal = random() * range - (range/2);
    point(dotX, dotY+randVal);
    dotX += 1;

    // noise()
    var noiseVal = noise(noiseVar) * range -(range/2);
    point(noiseX,noiseY+noiseVal);
    noiseVar += noiseScale;

    var noiseVal = noise(noiseVar2) * range -(range/2);
    point(noiseX,noiseY2+noiseVal);
    noiseVar2 += noiseScale*2;

    var noiseVal = noise(noiseVar3) * range -(range/2);
    point(noiseX,noiseY3+noiseVal);
    noiseVar3 += noiseScale*5;

    var noiseVal = noise(noiseVar4) * range -(range/2);
    point(noiseX,noiseY4+noiseVal);
    noiseVar4 += noiseScale*10;

    noiseX += 1;
    if (dotX > width){ dotX = 0; noiseX =0};
}