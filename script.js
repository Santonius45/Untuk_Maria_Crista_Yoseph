// ============================================================
// PERSONAL SETTINGS
// Ubah tanggal di bawah jika ingin memakai countdown anniversary.
// Format: "YYYY-MM-DDTHH:MM:SS"
// ============================================================
const SPECIAL_DATE = "2024-04-16T00:00:00";

const timer = document.getElementById("timer");
function updateCountdown(){
  const start = new Date(SPECIAL_DATE).getTime();
  const now = Date.now();
  let diff = now - start;
  if(diff < 0) diff = 0;
  const d = Math.floor(diff/86400000);
  const h = Math.floor(diff/3600000)%24;
  const m = Math.floor(diff/60000)%60;
  const s = Math.floor(diff/1000)%60;
  timer.innerHTML = [
    [d,"Hari"],[h,"Jam"],[m,"Menit"],[s,"Detik"]
  ].map(x=>`<div><b>${String(x[0]).padStart(2,"0")}</b><span>${x[1]}</span></div>`).join("");
}
updateCountdown(); setInterval(updateCountdown,1000);

document.getElementById("openLetter").addEventListener("click",()=>{
  document.querySelector(".letter").scrollIntoView({behavior:"smooth"});
});

document.getElementById("loveBtn").addEventListener("click",()=>{
  document.getElementById("secret").classList.add("show");
  burstHearts();
});

const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add("visible"); });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

function createHeart(){
  const h=document.createElement("span");
  h.className="float-heart";
  h.textContent=Math.random()>.35?"♥":"♡";
  h.style.left=Math.random()*100+"%";
  h.style.fontSize=(10+Math.random()*18)+"px";
  h.style.animationDuration=(7+Math.random()*8)+"s";
  document.querySelector(".hearts").appendChild(h);
  setTimeout(()=>h.remove(),16000);
}
setInterval(createHeart,1500);

function burstHearts(){
  for(let i=0;i<28;i++) setTimeout(createHeart,i*55);
}

// Tiny original ambient sound generated in the browser; no copyrighted audio file.
let audioCtx=null, playing=false, interval=null;
function playTone(){
  if(!audioCtx) audioCtx=new (window.AudioContext||window.webkitAudioContext)();
  const osc=audioCtx.createOscillator(), gain=audioCtx.createGain();
  osc.type="sine"; osc.frequency.value=[261.63,329.63,392,523.25][Math.floor(Math.random()*4)];
  gain.gain.setValueAtTime(.0001,audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(.035,audioCtx.currentTime+.05);
  gain.gain.exponentialRampToValueAtTime(.0001,audioCtx.currentTime+1.4);
  osc.connect(gain).connect(audioCtx.destination); osc.start(); osc.stop(audioCtx.currentTime+1.5);
}
document.getElementById("musicBtn").addEventListener("click",()=>{
  if(!playing){
    playing=true; playTone(); interval=setInterval(playTone,1800);
    document.querySelector("#musicBtn span").textContent="Pause";
  }else{
    playing=false; clearInterval(interval);
    document.querySelector("#musicBtn span").textContent="Musik";
  }
});
