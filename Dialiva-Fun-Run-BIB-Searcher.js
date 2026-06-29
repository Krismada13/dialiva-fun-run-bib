// ====== DATA REGISTRANT — Dialiva Fun Run 2026 (dari Google Sheet) ======
const DUMMY_REGISTRANTS = [
  { name:"Farih Ibnu Zulfa", bibName:"Farizuulll", phone:"081325372200", personalid:"3303180608040001", jerseySize:"L", bib:"M-001", regid:"M-001", category:"5K", cot:"00:00:00", status:"Terverifikasi" },
  { name:"Antonius Abiseka Wiradharma Putra N", bibName:"Abi aja", phone:"085189296181", personalid:"340408070109001", jerseySize:"L", bib:"M-002", regid:"M-002", category:"5K", cot:"00:00:00", status:"Terverifikasi" },
  { name:"Fico Rizki Ikhsan Saputra", bibName:"FICO", phone:"081328488272", personalid:"3403170809890001", jerseySize:"L", bib:"M-003", regid:"M-003", category:"5K", cot:"00:00:00", status:"Terverifikasi" },
  { name:"Ayoedya Java Ratu Adil", bibName:"Ratu Adil", phone:"089653410903", personalid:"3305125312110004", jerseySize:"XS", bib:"F-004", regid:"F-004", category:"5K", cot:"00:00:00", status:"Terverifikasi" },
  { name:"Intan Yuliastanti", bibName:"INTAN", phone:"085848371110", personalid:"3305215906050002", jerseySize:"S", bib:"F-005", regid:"F-005", category:"5K", cot:"00:00:00", status:"Terverifikasi" },
  { name:"Nadin Ranaa Ayu", bibName:"NADIN RANAA", phone:"081231524656", personalid:"3501046105080001", jerseySize:"M", bib:"F-006", regid:"F-006", category:"5K", cot:"00:00:00", status:"Terverifikasi" },
  { name:"Nurismi", bibName:"Ismi", phone:"082339078095", personalid:"7604046501010006", jerseySize:"L", bib:"F-007", regid:"F-007", category:"5K", cot:"00:00:00", status:"Terverifikasi" },
  { name:"Khoirun Nisa Widyastuti", bibName:"K. Nisa W", phone:"0895391208712", personalid:"3404115708970001", jerseySize:"L", bib:"F-008", regid:"F-008", category:"5K", cot:"00:00:00", status:"Terverifikasi" },
  { name:"Siti Nurlaily Apriyatun", bibName:"Nurlaily", phone:"0895391208712", personalid:"3404117004980003", jerseySize:"S", bib:"F-009", regid:"F-009", category:"5K", cot:"00:00:00", status:"Terverifikasi" },
  { name:"Isnaini Nurrohmah", bibName:"Isnaini", phone:"0895401096097", personalid:"3404116711940002", jerseySize:"XXL", bib:"F-010", regid:"F-010", category:"5K", cot:"00:00:00", status:"Terverifikasi" },
  { name:"Muhammad Shodiq Nur", bibName:"M Shodiq", phone:"0895401096097", personalid:"3404112703970001", jerseySize:"S", bib:"M-011", regid:"M-011", category:"5K", cot:"00:00:00", status:"Terverifikasi" },
  { name:"Rohmatul Ummah", bibName:"UMMAH", phone:"082224162895", personalid:"3404115711970002", jerseySize:"XL", bib:"F-012", regid:"F-012", category:"5K", cot:"00:00:00", status:"Terverifikasi" },
  { name:"Syaeful Ichwan", bibName:"Ichwan", phone:"08981624782", personalid:"3273220401950001", jerseySize:"M", bib:"M-013", regid:"M-013", category:"5K", cot:"00:00:00", status:"Terverifikasi" },
  { name:"Nurmalita Aulia Haz", bibName:"Haz", phone:"087723400005", personalid:"3404116603990002", jerseySize:"S", bib:"F-014", regid:"F-014", category:"5K", cot:"00:00:00", status:"Terverifikasi" },
  { name:"Ferdian Achmad", bibName:"Ferdian", phone:"'08156586896", personalid:"3404111403850002", jerseySize:"XXXL", bib:"M-015", regid:"M-015", category:"5K", cot:"00:00:00", status:"Terverifikasi" },
  { name:"Agustinus Deri", bibName:"Agustinus Deri", phone:"085702438507", personalid:"6107042408990003", jerseySize:"L", bib:"M-016", regid:"M-016", category:"5K", cot:"00:00:00", status:"Terverifikasi" },
  { name:"Miss No Name", bibName:"Miss No Name", phone:"085702438599", personalid:"", jerseySize:"L", bib:"F-017", regid:"F-017", category:"5K", cot:"00:00:00", status:"Terverifikasi" },
  { name:"Baharuddin Yusuf", bibName:"Yusuf", phone:"0882008618338", personalid:"3404101612970002", jerseySize:"M", bib:"M-018", regid:"M-018", category:"5K", cot:"00:00:00", status:"Terverifikasi" },
  { name:"Emi Lestari", bibName:"E", phone:"08818627961", personalid:"3404125205970004", jerseySize:"M", bib:"F-019", regid:"F-019", category:"5K", cot:"00:00:00", status:"Terverifikasi" },
  { name:"Vika Puspita Sari", bibName:"Vika Puspita Sari", phone:"085877166475", personalid:"3404117101990001", jerseySize:"S", bib:"F-020", regid:"F-020", category:"5K", cot:"00:00:00", status:"Terverifikasi" },
];

function normalizePhone(p){
  return p.replace(/[^0-9]/g, "").replace(/^62/, "0");
}

function setState(stateId){
  document.querySelectorAll(".state").forEach(el => el.classList.remove("active"));
  document.getElementById(stateId).classList.add("active");
}

function handleSearch(){
  const nameInput = document.getElementById("fullname").value.trim();
  const phoneInput = document.getElementById("phone").value.trim();
  const btn = document.getElementById("searchBtn");

  if(!nameInput || !phoneInput){
    alert("Isi nama lengkap dan nomor HP dulu ya.");
    return;
  }

  btn.classList.add("loading");
  btn.disabled = true;

  // Simulasi delay pencarian (nanti diganti fetch ke Google Sheet API)
  setTimeout(() => {
    btn.classList.remove("loading");
    btn.disabled = false;

    const normPhone = normalizePhone(phoneInput);
    const match = DUMMY_REGISTRANTS.find(r =>
      r.name.toLowerCase() === nameInput.toLowerCase() &&
      normalizePhone(r.phone) === normPhone
    );

    if(match){
      document.getElementById("r-bib").textContent = match.bib;
      document.getElementById("r-bibname").textContent = match.bibName;
      document.getElementById("r-category").textContent = match.category;
      document.getElementById("r-regid").textContent = match.regid;
      document.getElementById("r-cot").textContent = match.cot;
      document.getElementById("r-name").textContent = match.name;
      document.getElementById("r-status").textContent = match.status;
      setState("state-found");
    } else {
      setState("state-notfound");
    }

    document.getElementById("state-found").scrollIntoView({behavior:"smooth", block:"start"});
  }, 700);
}

function saveScreenshot(){
  const card = document.querySelector(".bib-card");
  const label = document.getElementById("screenshotLabel");
  const btn = document.getElementById("screenshotHint");
 
  if(!card || typeof html2canvas === "undefined"){
    alert("Gagal menyiapkan gambar. Coba tekan tombol screenshot bawaan HP-mu sebagai gantinya.");
    return;
  }
 
  const originalLabel = label.textContent;
  label.textContent = "Menyiapkan gambar...";
  btn.style.pointerEvents = "none";
 
  html2canvas(card, {
    backgroundColor: "#FFFDF8",
    scale: 2,
    useCORS: true
  }).then(canvas => {
    const bibNumber = document.getElementById("r-bib").textContent.trim();
    const link = document.createElement("a");
    link.download = `BIB-${bibNumber}-Dialiva-Fun-Run-2026.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
 
    label.textContent = originalLabel;
    btn.style.pointerEvents = "auto";
  }).catch(err => {
    console.error("Screenshot error:", err);
    alert("Gagal menyimpan gambar. Coba tekan tombol screenshot bawaan HP-mu sebagai gantinya.");
    label.textContent = originalLabel;
    btn.style.pointerEvents = "auto";
  });
}

function resetSearch(){
  document.getElementById("fullname").value = "";
  document.getElementById("phone").value = "";
  setState("state-idle");
  window.scrollTo({top:0, behavior:"smooth"});
  document.getElementById("fullname").focus();
}

document.getElementById("fullname").addEventListener("keydown", e => { if(e.key === "Enter") handleSearch(); });
document.getElementById("phone").addEventListener("keydown", e => { if(e.key === "Enter") handleSearch(); });
