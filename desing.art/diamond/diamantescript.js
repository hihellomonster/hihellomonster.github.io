// svg shape animation
let tl = gsap.timeline({defaults:{duration:0.6, ease:'none'}, repeat:5, paused:true})
  .from('.top',        {attr:{ points:i=> (i>0)? '100,-90 '+(i*50-50)+',35 '+(i*50)+',35' : '100,-90 0,35 50,35' }}, 0)
  .from('.topFill',    {attr:{ fill:i=> 'hsl('+(i*5+165)+', 100%, '+(60-i*10)+'%)' }}, 0)
  .from('.bottom',     {attr:{ points:i=> (i>0)? '100,190 '+(i*50-50)+',35 '+(i*50)+',35' : '100,190 0,35 50,35' }}, 0)
  .from('.bottomFill', {attr:{ fill:i=> 'hsl('+(205-i*5)+', 100%, '+(10+i*5)+'%)' }}, 0)

gsap.set('.mid', {mixBlendMode:'overlay'});
gsap.to(tl, {duration:5, totalProgress:0.7, ease:'sine'});

window.onmousemove = (e)=> gsap.to(tl, {duration:0.5, totalProgress:e.clientX/window.innerWidth, overwrite:'auto'});


// film grain + dust
gsap.set('.grain', {width:'100%', height:'100%', opacity:0.6, backgroundImage:'url(https://assets.codepen.io/721952/grain.png)', mixBlendMode:'overlay'});

for (let i=0; i<8; i++){
  let d = document.createElement('div');
  document.getElementsByClassName('stage')[0].appendChild(d);
  gsap.set(d, {attr:{class:'d'}, width:30, height:30, backgroundImage:'url(https://assets.codepen.io/721952/filmDust.png)', backgroundPosition:'0 -'+gsap.utils.wrap(0,8,i)*30+'px'});
}

function dustLoop(){
  gsap.timeline({onComplete:dustLoop})
      .set('.grain', {backgroundPosition:'-'+gsap.utils.random(0,200,1)+'px -'+gsap.utils.random(0,200,1)+'px'})
      .set('.d', {x:()=>window.innerWidth*1.5*Math.random(), // overshoot width+height of stage to reduce number visible at once
                  y:()=>window.innerHeight*2*Math.random(),  //
                  rotation:()=>360*Math.random(),
                  scale:()=>Math.random(),
                  opacity:()=>Math.random()
                 }, 0.07)
}

( window.innerWidth==0 || window.innerWidth==0 ) ? window.reload() : dustLoop(); // catch if window width is undefined