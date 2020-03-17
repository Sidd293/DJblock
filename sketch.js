var blo
var alphax, beta, gamma;
var xpos, ypos;
var ncc = 0
var b=[]
var del
ct = 0
gammaz=0
//z = -1000
//x =100
//y = 100

let song,  analyzer;
function preload()
 {
 song = loadSound(
 'Believer.mp3');
bg=loadImage('Bg.jpeg')
  blo = loadImage('1584362139704.png')
}

function setup() {
  createCanvas(400, 400,WEBGL);
song.loop();
del=2
   analyzer = new p5.Amplitude();

 analyzer.setInput(song);
var bt = new boxx(100,100,100,2000)
  b.push(bt);

   xpos = 200;
  ypos = 200;
  alphax = 0;
  beta = 0;
  gamma = 0;
  
  
}





function draw() {
noStroke()
let rms = analyzer.getLevel();

// camera(0, (height/2)/tan(PI/6),0,cos(radians(alphax)),cos(radians(beta)),cos(radians(gamma)),1,0,0)
 
  tht=map(gamma,-90,90,-180,180)*10 
  thty= map(beta,-90,90,-180,180)*5-50
  camera(0,0,(height/2)/(tan(PI/6)),thty,tht,0,1,0,0)
  //fill(255,0,255)
 console.log("tht is"+tht)
  if(gammaz>90||gammaz<-90)
    del=-del
  
  gammaz+=del;
   
  //image(bg,-200,-200,width,height)
  background(0,255,0)
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
directionalLight(0, 0, 250, 0, height, b[hap].retz());
  directionalLight(250, 0, 0, 0, 0, b[hap].retz());
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

  if(rms > .45)
{ push()
 var bc = new boxx(100,-200*random(-1,1),-200*random(-1,1),-1000)
b.push(bc)
//console.log("boz rendered")
 ncc = 0
pop()

}

pop()
  ncc=ncc+1
// camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
}
// accelerometer Data
window.addEventListener('deviceorientation', function(e) 
{
  alphax = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});
//function pushit(rms,ncc)
