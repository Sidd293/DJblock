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
  blo= loadImage('images (1).jpeg')
}

function setup() {
  createCanvas(400, 400,WEBGL);
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
  
  image(bg,-200,-200,width,height)
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
directionalLight(250, 250, 250, 0, height, b[hap].retz());
  directionalLight(250, 250, 250, 0, 0, b[hap].retz());
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
 var bc = new boxx(100,-100*random(-1,1),-100*random(-1,1),-4000)
b.push(bc)
//console.log("boz rendered")
 ncc = 0
pop()

}

pop()
 
// camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
}

//function pushit(rms,ncc)
