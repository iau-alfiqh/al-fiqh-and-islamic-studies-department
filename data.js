/* ===== Firebase (Google লগইন) — Firebase প্রকল্প খোলার পর এই চারটি ঘর পূরণ করুন =====
   খালি থাকলে লগইন পাতায় "পরীক্ষামূলক প্রবেশ" বোতাম দেখাবে। */
window.FIREBASE_CONFIG = { apiKey:"", authDomain:"", projectId:"", appId:"" };

/* ===== কোর্স ও বই =====
   C(বাংলা নাম, আরবি নাম, কোড, ক্রেডিট, [বইয়ের তালিকা])
   B(বাংলা নাম, আরবি নাম, পড়ার লিংক, ডাউনলোড লিংক)
   উদাহরণ: C("হিদায়া","الهداية","FIQ-101","৪",[ B("হিদায়া ১ম খণ্ড","الهداية ج١","https://archive.org/details/...","https://archive.org/download/.../file.pdf") ]) */
const C=(bn,ar,code="",credit="",books=[])=>({bn,ar,code,credit,books});
const B=(bn,ar,read="",download="")=>({bn,ar,read,download});
const nb=new Intl.NumberFormat("bn-BD");
const blank=(p,y)=>[1,2,3,4,5,6,7].map(i=>C("কোর্স "+nb.format(i)+" (নাম বসান)","المقرر "+i,p+y+"0"+i));
const DATA={
  honours:{
    1:[C("হিদায়া","الهداية"),C("আরবি (২য় পত্র)","اللغة العربية (الورقة الثانية)"),C("নূরুল আনওয়ার","نور الأنوار"),C("আহাদীসুল আহকাম","أحاديث الأحكام"),C("আয়াতুল আহকাম","آيات الأحكام"),C("আল-আকীদাতুল ইসলামিয়্যাহ","العقيدة الإسلامية"),C("কম্পিউটার","الحاسوب")],
    2:blank("H",2),3:blank("H",3),4:blank("H",4)
  },
  masters:{1:blank("M",1)}
};
