(()=>{
  const lang=document.documentElement.lang||"bn";
  const copy=lang==="ar"?{
    dir:"rtl",kicker:"أهلًا بكم في مكتبة القسم",title:"تهانينا، وصلتم إلى مكتبتكم",body:"مرحبًا بكم في المكتبة الرقمية لقسم الفقه والدراسات الإسلامية. ستجدون هنا كتب المقررات وقوائم القراءة مرتبة لتعينكم على طلب العلم.",focus:"اختاروا مقررًا، افتحوا قائمة الكتب، وابدؤوا القراءة بهدوء وتركيز.",seal:"المكتبة الرقمية",signature:"HASAN AHMED",affiliation:"Al-Fiqh & Islamic Studies Department\nIslamic Arabic University",enter:"ادخلوا إلى المكتبة",close:"إغلاق بطاقة الترحيب"
  }:lang==="en"?{
    dir:"ltr",kicker:"WELCOME TO THE DEPARTMENT LIBRARY",title:"Congratulations, you’re here",body:"Welcome to the digital library of the Department of Al-Fiqh and Islamic Studies. Course books and reading lists are brought together here to support your studies.",focus:"Choose a course, open its book list, and settle in for focused reading.",seal:"THE DIGITAL LIBRARY",signature:"HASAN AHMED",affiliation:"Al-Fiqh & Islamic Studies Department\nIslamic Arabic University",enter:"Enter the library",close:"Close welcome card"
  }:{
    dir:"ltr",kicker:"বিভাগীয় গ্রন্থাগারে স্বাগতম",title:"অভিনন্দন ও স্বাগতম",body:"আপনি প্রবেশ করেছেন আল-ফিকহ অ্যান্ড ইসলামিক স্টাডিজ বিভাগের ডিজিটাল গ্রন্থাগারে। এখানে কোর্সের বই ও পাঠ্যতালিকা একসঙ্গে সাজানো—আপনার পড়ার পথ হোক মনোযোগী ও ফলপ্রসূ।",focus:"একটি কোর্স বেছে বইয়ের তালিকা খুলুন, তারপর পড়া শুরু করুন।",seal:"ডিজিটাল গ্রন্থাগার",signature:"HASAN AHMED",affiliation:"Al-Fiqh & Islamic Studies Department\nIslamic Arabic University",enter:"গ্রন্থাগারে প্রবেশ করুন",close:"অভিনন্দন কার্ড বন্ধ করুন"
  };
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const overlay=document.createElement("div");overlay.className="welcome-overlay";overlay.setAttribute("role","presentation");
  overlay.innerHTML=`<section class="welcome-card" role="dialog" aria-modal="true" aria-labelledby="welcome-title" dir="${copy.dir}"><button class="welcome-close" type="button" aria-label="${esc(copy.close)}">×</button><div class="welcome-seal"><img src="icon-512.png" alt=""><strong>${esc(copy.seal)}</strong></div><div class="welcome-copy"><p class="welcome-kicker">${esc(copy.kicker)}</p><h2 id="welcome-title">${esc(copy.title)}</h2><p>${esc(copy.body)}</p><div class="welcome-focus"><span aria-hidden="true">▤</span><b>${esc(copy.focus)}</b></div><div class="welcome-sign"><b>${esc(copy.signature)}</b><span>${esc(copy.affiliation).replace(/\n/g,"<br>")}</span></div><button class="btn welcome-enter" type="button">${esc(copy.enter)} <span aria-hidden="true">↗</span></button></div></section>`;
  const background=[document.querySelector("#top"),document.querySelector("#app"),document.querySelector("#ft")].filter(Boolean);
  const oldOverflow=document.body.style.overflow;document.body.style.overflow="hidden";
  background.forEach(node=>{node.inert=true});
  const dismiss=()=>{overlay.remove();background.forEach(node=>{node.inert=false});document.body.style.overflow=oldOverflow};
  overlay.querySelectorAll(".welcome-close,.welcome-enter").forEach(b=>b.addEventListener("click",dismiss));
  overlay.addEventListener("click",e=>{if(e.target===overlay)dismiss()});
  document.addEventListener("keydown",e=>{if(!overlay.isConnected)return;if(e.key==="Escape"){dismiss();return}if(e.key==="Tab"){const controls=[...overlay.querySelectorAll("button:not([disabled])")],first=controls[0],last=controls.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
  document.body.append(overlay);overlay.querySelector(".welcome-enter")?.focus({preventScroll:true});
})();
