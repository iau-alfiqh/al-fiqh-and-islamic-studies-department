/* সাইটের সেটিং ও নোটিশ — এই ফাইলে নিজের তথ্য বসান */
const SITE={
  url:"https://iau2026.github.io/al-fiqh-and-islamic-studies-department/",
  /* অভিযোগ ও পরামর্শ ফর্ম — পাঠকের বার্তা আপনার ইমেইলে যাবে, ইমেইল সাইটে দেখা যাবে না।
     Formspree (formspree.io) থেকে ফ্রি ফর্ম বানিয়ে তার লিংক এখানে বসান, যেমন "https://formspree.io/f/abcdwxyz"।
     অথবা Web3Forms-এর access key "key"-তে বসান। দুটোর কোনোটি না বসালে ফর্ম দেখাবে না। */
  endpoint:"",
  key:"",
  form:"",  /* ফর্মের বদলে Google Form-এর লিংক বসাতে চাইলে এখানে বসান */
  /* সবার দেখা কোর্স রেটিং/রিভিউর জন্য Supabase project URL এবং publishable/anon key দিন। */
  reviews:{url:"",anonKey:"",table:"course_reviews"}
};
/* নোটিশ বোর্ড: এখন ফাঁকা। নোটিশ দিতে চাইলে নিচের [ ] এর ভেতরে এই ধাঁচের একটি লাইন যোগ করুন (id যত বড়, তত নতুন):
   {id:1,date:"2026-11-01",bn:{t:"শিরোনাম",b:"নোটিশের লেখা"},ar:{t:"العنوان",b:"نص الإعلان"}}
   একাধিক নোটিশ হলে লাইনগুলোর মাঝে কমা দিন। */
const NOTICES=[
];
