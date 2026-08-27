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

// ============================================================
// BACKGROUND MUSIC
// ============================================================
const musicBtn = document.getElementById("musicBtn");
const musicLabel = musicBtn.querySelector("span");

const backgroundMusic = new Audio("assets/Taylor%20Swift%20-%20Lover.mp3");
backgroundMusic.loop = true;
backgroundMusic.volume = 0.5;

let playing = false;

musicBtn.addEventListener("click", async () => {
  try {
    if (!playing) {
      await backgroundMusic.play();
      playing = true;
      musicLabel.textContent = "Pause";
      musicBtn.setAttribute("aria-label", "Pause musik");
    } else {
      backgroundMusic.pause();
      playing = false;
      musicLabel.textContent = "Musik";
      musicBtn.setAttribute("aria-label", "Putar musik");
    }
  } catch (error) {
    console.error("Musik gagal diputar:", error);
  }
});