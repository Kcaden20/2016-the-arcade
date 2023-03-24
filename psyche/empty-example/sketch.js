/* our global variables will get declared here */
var buzz;
/* called before the DOM loads, we'll load our mosquito sound
we'll also need to have this on a server -- */
function preload() {
	buzz = loadSound('breathing.wav');
	console.log(buzz);
}

/* called at DOM load */
function setup() {
/* we're not going to use a canvas, but instead use a jQuery call */
    noCanvas();
    buzz.setVolume(1); //sets sound volume to 0
    buzz.play(); //plays mosquito sound
    buzz.loop(); //loops it
}

/* called at a continuous frame rate */
function draw() {
    /* p5.js contains built-in variables for current and previous mouse position
    you can use them by accessing mouseY / mouseX and pmouseY / pmouseX
    the mosquito sound has mehtods play() and stop() which play and stop.
    in this function, use the current and previous mouse positions to play the mosquito sound on mouse movement */
    if (mouseX === pmouseX && mouseY === pmouseY) { //if both mouse x and mouse y positions have not chagned
    	console.log('still');
    	buzz.setVolume(0, .1); //setVolume() takes two arguments, the value to fade to and the duration (in seconds) of the fade
    }
    if (mouseX != pmouseX || mouseY != pmouseY) { //if either mouse x and mouse y positions have changed
    	console.log('moving');
    	buzz.setVolume(.5, .1);
    }
}