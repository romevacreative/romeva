const translations = {
  en: {
    navServices:'Services',navWork:'Work',navApproach:'Approach',navContact:'Contact',
    eyebrow:'CREATIVE TECHNOLOGY STUDIO',heroTitle:'Marketing, understood better.<br><em>Created smarter.</em>',heroText:'We combine marketing, creative thinking and AI-powered technology to help brands stand out with clarity and purpose.',exploreServices:'Explore services',viewWork:'View our work <span>↗</span>',
    approachKicker:'THE ROMEVA APPROACH',statementTitle:'Before we create,<br><em>we understand.</em>',statementText:'The strongest marketing starts with a clear understanding of the brand, the audience, the market and the competition. Then creativity and technology turn that understanding into work people notice.',process1:'Understand',process2:'Think',process3:'Create',process4:'Grow',
    servicesKicker:'WHAT WE DO',servicesTitle:'Marketing built around<br><em>what your brand needs.</em>',servicesIntro:'From strategy and visual identity to social content and Meta campaigns — one modern marketing partner, with AI built into the way we work.',s1t:'AI-Powered Content',s1d:'Videos, images, posters and creative content designed for modern social platforms.',s2t:'Social Media Marketing',s2d:'Page setup, content direction, visual consistency and day-to-day social presence.',s3t:'Brand & Visual Identity',s3d:'A visual direction that fits the brand and makes it recognizable across every touchpoint.',s4t:'Audience & Market Insight',s4d:'Target audience, market and competitor understanding before the creative work begins.',s5t:'Meta Advertising',s5d:'Campaign creation, audience targeting and creative direction for Meta platforms.',
    workKicker:'SELECTED WORK',workTitle:'Ideas are easier to trust<br><em>when you can see them.</em>',workIntro:'A selection of real Romeva work across AI-powered creative, social media and visual direction.',w1t:'GGC — Cream Creative',w1d:'AI-powered video creative.',w2t:'Egypt Creative',w2d:'Creative video work.',w3t:'Educational Center',w3d:'Social-first advertising creative.',w4t:'Home Start',w4d:'Page management, visual identity, posters and captions.',
    closingKicker:'ROMEVA',closingTitle:'No need to reinvent marketing.<br><em>Just do it smarter.</em>',closingText:'When you understand the brand, the audience and the market, every creative decision becomes more intentional.',startProject:'Start a project',contactKicker:"LET'S TALK",contactTitle:'Have a brand to build<br>or a story to tell?'
  },
  ar: {
    navServices:'الخدمات',navWork:'أعمالنا',navApproach:'منهجنا',navContact:'تواصل معنا',
    eyebrow:'استوديو التكنولوجيا الإبداعية',heroTitle:'تسويق نفهمه بشكل أفضل.<br><em>وننفذه بذكاء أكبر.</em>',heroText:'نجمع بين التسويق والتفكير الإبداعي وتقنيات الذكاء الاصطناعي لمساعدة البراندات على الظهور بوضوح وتميّز.',exploreServices:'اكتشف خدماتنا',viewWork:'شاهد أعمالنا <span>↗</span>',
    approachKicker:'منهج ROMEVA',statementTitle:'قبل ما نبدأ نخلق،<br><em>بنبدأ بالفهم.</em>',statementText:'التسويق الأقوى يبدأ بفهم واضح للبراند والجمهور والسوق والمنافسين. بعدها يأتي الإبداع والتكنولوجيا لتحويل هذا الفهم إلى شغل يلفت الانتباه.',process1:'نفهم',process2:'نفكر',process3:'نبدع',process4:'ننمو',
    servicesKicker:'ماذا نقدم',servicesTitle:'تسويق مبني على<br><em>احتياج البراند الحقيقي.</em>',servicesIntro:'من فهم السوق والهوية البصرية إلى محتوى السوشيال وحملات Meta — شريك تسويقي حديث، والـAI جزء من طريقة شغلنا.',s1t:'صناعة المحتوى بالـAI',s1d:'فيديوهات وصور وبوسترات ومحتوى إبداعي مناسب لمنصات السوشيال الحديثة.',s2t:'التسويق عبر السوشيال ميديا',s2d:'إنشاء وتجهيز الصفحات، اتجاه المحتوى، الهوية البصرية والحضور اليومي للبراند.',s3t:'الهوية البصرية للبراند',s3d:'اتجاه بصري مناسب للبراند يجعله واضحًا ومتناسقًا في كل نقطة تواصل.',s4t:'فهم الجمهور والسوق',s4d:'فهم الجمهور المستهدف والسوق والمنافسين قبل بدء التنفيذ الإبداعي.',s5t:'إعلانات Meta',s5d:'إنشاء الحملات وتحديد الجمهور والتوجيه الإبداعي على منصات Meta.',
    workKicker:'أعمال مختارة',workTitle:'الأفكار أسهل في الثقة<br><em>لما تشوفها قدامك.</em>',workIntro:'مجموعة من أعمال Romeva الحقيقية في المحتوى بالـAI والسوشيال والاتجاه البصري.',w1t:'GGC — Creative للكريم',w1d:'فيديو إبداعي بالـAI.',w2t:'Creative — مصر',w2d:'عمل فيديو إبداعي.',w3t:'سنتر تعليمي',w3d:'Creative مخصص للسوشيال.',w4t:'Home Start',w4d:'إدارة الصفحة والهوية البصرية والبوسترات والكابشن.',
    closingKicker:'ROMEVA',closingTitle:'مش لازم نخترع التسويق من جديد.<br><em>المهم نشتغل بذكاء.</em>',closingText:'لما نفهم البراند والجمهور والسوق، كل قرار إبداعي بيكون أوضح وأكثر intentional.',startProject:'ابدأ مشروع',contactKicker:'خلينا نتكلم',contactTitle:'عندك براند نبنيه<br>أو قصة نحكيها؟'
  }
};

const root=document.documentElement;
const toggle=document.getElementById('langToggle');
let lang=localStorage.getItem('romeva-lang')||'en';
function setLang(next){lang=next;root.lang=lang;root.dir=lang==='ar'?'rtl':'ltr';document.body.classList.toggle('arabic',lang==='ar');toggle.textContent=lang==='en'?'العربية':'English';document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(translations[lang][key]!==undefined)el.innerHTML=translations[lang][key]});localStorage.setItem('romeva-lang',lang)}
toggle.addEventListener('click',()=>setLang(lang==='en'?'ar':'en'));
setLang(lang);

document.getElementById('year').textContent=new Date().getFullYear();
const header=document.querySelector('.site-header');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>8),{passive:true});
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{const target=document.querySelector(a.getAttribute('href'));if(target)target.scrollIntoView({behavior:'smooth'})}));
