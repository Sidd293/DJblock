var alphax =0
var beta = 0
var gamma = 0
rst = 0
var ncc = 0
var b=[]
ct = 0
var blo;
//z = -1000
//x =100
//y = 100

let song,  analyzer;
function preload()
 {
 song = loadSound(
 'Believer.mp3');
  
bg=loadImage('Bg.jpeg')
  blo= loadImage('1584362139704.png')
}

function setup() {
  createCanvas(800, 800,WEBGL);
song.loop();

   analyzer = new p5.Amplitude();

 analyzer.setInput(song);
var bt = new boxx(100,100,100,-2000)
  b.push(bt);
}





function draw() {
 ncc=ncc+1
 noStroke()
let rms = analyzer.getLevel();

  
  //fill(255,0,255)
  background(255)
  image(bg,-400,-400,width,height)
 tht=map(gamma,-90,90,-180,180)*5
  //thty= map(beta,-90,90,-180,180)*5
camera(0, (height/2)/tan(PI/6),0,tht,0,1,0,0)
  //background(0,255,0)
  //translate(x,y,z)
  //rotateY(.01*z)

  //z = z+10
// if(rms > .3)
// { 
// var bc = new boxx(100,200*random(-1,1),200*random(-1,1),-2000)
// b.push(bc)

  push();
  for(var ha = b.length-1;ha>0;ha--) 
{// } 
 hap=b.length-ha
directionalLight(250, 250, 250, 0, height, b[hap].retz()-500);
  directionalLight(250, 250, 250, 0, 0, b[hap].retz()-500);
  specularMaterial(255,100,100);
 texture(blo)

 b[hap].trans()
b[hap].show()
if(b[hap].del())
   {b.splice(hap,1)
   }
  
translate(0,0,0)
}
  //pushit(rms,ncc)
//console.log('z ix'+b.length)
 // console.log("rms is"+rms)

  if(rms > .45 && ncc>20)
{ push()
 var bc = new boxx(100,-100*random(-1,1),-100*random(-1,1),-2000)
b.push(bc)
//console.log("boz rendered")
 ncc = 0
pop()

}

pop()
 
// camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
}

//function pushit(rms,ncc)

window.addEventListener('deviceorientation', function(e) 
{
  alphax = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});
