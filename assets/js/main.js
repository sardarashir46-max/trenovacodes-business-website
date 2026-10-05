/* ============================================================
   main.js  -  TRENOvaCodes shared script (saare pages par chalta hai)
   Structure: 1 Icons | 2 Services data | 3 Blog data + Team data | 4 Helpers |
   5 Header (+5b Theme toggle, 5c Pull-cord ribbon) | 6 Footer+Form | 7 CTA | 8 Listings | 9 Detail pages |
   10 Form validation | 11 Back-to-top | 12 Animations | 13 Chatbot | 14 Ripple | 15 Hero animations
   ============================================================ */
(() => {

  // ============================================================
  // SECTION 1: ICONS (inline SVG)
  // ICON = icon paths, ico() = icon banata hai, art() = card ki illustration
  // ============================================================
  const ICON = {pos:'M3 18h18M4.5 18a7.5 7.5 0 0115 0M12 10.5V8M10 8h4M2 21.5h20', shop:'M3 9l2-5h14l2 5M3 9a3 3 0 006 0 3 3 0 006 0 3 3 0 006 0M5 12v8h14v-8M10 20v-4h4v4', school:'M2 9l10-5 10 5-10 5zM6 11.5v5c3 2.5 9 2.5 12 0v-5M22 9v6', erp:'M3 5h18v14H3zM3 9h18M8 12.5l-2.5 2.5L8 17.5M16 12.5l2.5 2.5-2.5 2.5M13 12l-2 6', app:'M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zM10 5.5h4M11 19h2M9 10h6M9 13.5h4', sun:'M12 8a4 4 0 100 8 4 4 0 000-8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4', moon:'M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z', spark:'M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5z', arrow:'M5 12h14M13 6l6 6-6 6', check:'M5 12.5l4.5 4.5L19 7', chat:'M21 12a8 8 0 01-11.6 7.1L4 20l1-4.6A8 8 0 1121 12zM8.5 11h.01M12 11h.01M15.5 11h.01', send:'M22 2L11 13M22 2l-7 20-4-9-9-4z', close:'M6 6l12 12M18 6L6 18'};
  const ico = (k, s = 28) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${ICON[k]}"/></svg>`;
  const art = (k, alt) => `<div class="art" role="img" aria-label="${alt}">${ico(k, 72)}</div>`;

  // ============================================================
  // SECTION 2: DATA > SERVICES  (yahan se services edit karein)
  // Har service: n=name, i=icon, s=short text, intro=detail intro, f=features (comma separated)
  // ============================================================
  const SERVICES = {
    'restaurant-pos': {n:'Restaurant ERP / POS', i:'pos', s:'Run sales, tables and kitchen from one screen.', intro:'Take orders faster, keep the kitchen in sync and see exactly what each day earned.', f:'Sales and orders,Table management,Kitchen display,Inventory,Purchases,Customers,Expenses,Reports'},
    'retail-pos': {n:'Shop / Retail POS', i:'shop', s:'Sell quickly and always know what is in stock.', intro:'A fast checkout and clear stock control for shops of any size.', f:'Products and stock,Purchases,Sales,Customers,Suppliers,Payments,Invoices,Reports'},
    'school-erp': {n:'School ERP', i:'school', s:'Manage students, fees and results in one system.', intro:'Replace registers and spreadsheets with one place for the whole school.', f:'Students and teachers,Attendance,Classes and subjects,Fees,Exams,Results,Parents portal,Reports'},
    'custom-software': {n:'Custom Business Software', i:'erp', s:'ERP, CRM and automation built around your process.', intro:'Software designed for the way your business already works.', f:'ERP,CRM,Inventory,Accounting,Management systems,Business automation'},
    'mobile-apps': {n:'Mobile App Development', i:'app', s:'Android and iOS apps for customers and staff.', intro:'Native-feeling apps connected to your business data through secure APIs.', f:'Android and iOS apps,Business apps,Customer apps,Staff apps,API integration'}
  };

  // ============================================================
  // DATA > BENEFITS (har service-details page par dikhti hain)
  // ============================================================
  const BENEFITS = ['Save time','Reduce manual work','Improve accuracy','Better business control','Easy reporting'];

  // ============================================================
  // SECTION 3: DATA > BLOG POSTS  (yahan se blog posts edit karein)
  // t=title, c=category, d=date, s=summary, p=points, v=related service key
  // ============================================================
  const POSTS = {
    'restaurant-pos-benefits': {t:'5 Benefits of a Restaurant POS System', c:'Restaurant', d:'12 Sep 2026', i:'pos', s:'How a POS speeds up service and tightens control.', p:['Faster order taking','Fewer kitchen mistakes','Live stock levels','Daily sales reports'], v:'restaurant-pos'},
    'inventory-management-small-business': {t:'Inventory Management for Small Businesses', c:'Retail', d:'28 Aug 2026', i:'shop', s:'Stop over-ordering and running out of best sellers.', p:['Count stock automatically','Set reorder alerts','Track supplier prices','Spot slow movers'], v:'retail-pos'},
    'school-erp-benefits': {t:'Why Schools Are Moving to School ERP', c:'Education', d:'14 Aug 2026', i:'school', s:'Fees, attendance and results without paperwork.', p:['Attendance in seconds','Fee reminders for parents','Fast result cards','One student record'], v:'school-erp'},
    'erp-vs-traditional-management': {t:'ERP vs Traditional Management', c:'ERP', d:'30 Jul 2026', i:'erp', s:'What changes when your data lives in one system.', p:['One source of truth','Less double entry','Real-time reports','Easier growth'], v:'custom-software'},
    'custom-software-automation': {t:'Automate Repetitive Work with Custom Software', c:'Automation', d:'11 Jul 2026', i:'app', s:'Find the tasks worth automating first.', p:['List repeated tasks','Measure the hours spent','Automate the biggest one','Review results monthly'], v:'custom-software'}
  };

  // ============================================================
  // DATA > TEAM  (yahan se team members edit karein)
  // n = poora naam, r = role/designation, img = photo ka path (optional)
  // Abhi assets/img/team-1..3.svg (illustrated avatars) lage hain. Asli photo ke liye apni file assets/img/ mein rakhein, jaise img:'assets/img/ali.jpg'
  // img khali ho to naam ke initials dikhte hain
  // ============================================================
  const TEAM = [
    {n:'Abdul Manan', r:'Senior Developer', img:'assets/img/mn.jpeg'},
    {n:'Muhammad Ashir', r:'Lead Developer', img:'assets/img/ac.jpeg'},
    {n:'Muhammad Ahmad', r:'UI/UX Designer', img:'assets/img/al.jpg'}
  ];


  // ============================================================
  // SECTION 4: HELPERS
  // nav = menu links, page = current page name (body data-page), q = URL query (?service= / ?post=)
  // ============================================================
  const nav = [['index.html','Home'],['about.html','About'],['services.html','Services'],['blog.html','Blog']];
  const page = document.body.dataset.page, q = new URLSearchParams(location.search);
  const $ = s => document.querySelector(s);
  const brand = `<a class="brand navbar-brand" href="index.html">${ico('spark', 24)}TRENOvaCodes</a>`;
  const isActive = h => { const p = h.split('.')[0]; return page === p || (page === 'service-details' && p === 'services') || (page === 'blog-details' && p === 'blog'); };


  // ============================================================
  // SECTION 5: HEADER / NAVBAR  -> <header id="site-header">
  // Skip link + logo + menu + 'Get Started' button
  // ============================================================
  $('#site-header').innerHTML = `<a class="skip-link" href="#main">Skip to content</a>
  <nav class="site-nav navbar navbar-expand-lg" aria-label="Main"><div class="container">${brand}
    <div class="d-flex align-items-center gap-2 order-lg-last ms-lg-2"><button class="theme-toggle" id="themeToggle" type="button" role="switch" aria-checked="false" aria-label="Light theme"><span class="tt-bg" aria-hidden="true">${ico('sun', 14)}${ico('moon', 14)}</span><span class="tt-thumb" aria-hidden="true">${ico('sun', 16).replace('<svg', '<svg class="i-sun"')}${ico('moon', 16).replace('<svg', '<svg class="i-moon"')}</span></button>
    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button></div>
    <div class="collapse navbar-collapse" id="menu"><ul class="navbar-nav ms-auto align-items-lg-center gap-lg-2">
      ${nav.map(([h, l]) => `<li class="nav-item"><a class="nav-link${isActive(h) ? ' active' : ''}" ${isActive(h) ? 'aria-current="page" ' : ''}href="${h}">${l}</a></li>`).join('')}
      <li class="nav-item"><a class="nav-link" href="#contact">Contact Us</a></li>
      <li class="nav-item ms-lg-2"><a class="btn btn-cta" href="#contact">Get Started</a></li></ul></div></div></nav>`;


  // ============================================================
  // SECTION 5b: THEME TOGGLE (dark / light)  -> button #themeToggle (navbar mein)
  // Default dark hai. Choice localStorage ('trenova-theme') mein save hoti hai.
  // Page load par flash na ho, isliye har HTML ke <head> mein chhota inline script bhi hai.
  // Light colors: style.css > section 1b
  // ============================================================
  const THEME_KEY = 'trenova-theme', root = document.documentElement, themeBtn = $('#themeToggle');
  const applyTheme = (th, save) => {
    root.setAttribute('data-bs-theme', th);
    themeBtn.setAttribute('aria-checked', th === 'light');
    themeBtn.title = th === 'light' ? 'Switch to dark theme' : 'Switch to light theme';
    if (save) try { localStorage.setItem(THEME_KEY, th); } catch (e) {}
  };
  applyTheme(root.getAttribute('data-bs-theme') === 'light' ? 'light' : 'dark', false);
  const toggleTheme = () => {
    root.classList.add('theme-anim');
    applyTheme(root.getAttribute('data-bs-theme') === 'light' ? 'dark' : 'light', true);
    setTimeout(() => root.classList.remove('theme-anim'), 450);
  };
  themeBtn.addEventListener('click', toggleTheme);

  // ============================================================
  // SECTION 5c: PULL-CORD RIBBON (purane zamane ka khenchne wala ribbon)
  // Navbar ke neeche latakta hai (sirf tablet/desktop par). Neeche kheench kar chhodein
  // ya sirf click / Enter karein -> theme badal jati hai (toggleTheme upar wala hi hai).
  // Style: style.css > section 5c. Mobile par chhupa hai, wahan pill switch kaafi hai.
  // ============================================================
  $('#site-header').insertAdjacentHTML('beforeend', `<div class="pull-cord" id="pullCord"><span class="pc-line" id="pcLine"></span><button class="pc-handle" id="pcHandle" type="button" aria-label="Pull the ribbon to switch theme" title="Pull to switch theme"><svg width="26" height="50" viewBox="0 0 26 50" aria-hidden="true"><path d="M3 0h20v46l-10-9-10 9z" fill="currentColor"/><path d="M3 0h20v7H3z" fill="rgba(0,0,0,.2)"/><path d="M13 9v24" stroke="rgba(255,255,255,.4)" stroke-width="1.5" stroke-linecap="round"/></svg></button></div>`);
  const cord = $('#pullCord'), pcLine = $('#pcLine'), pcHandle = $('#pcHandle');
  const PC_BASE = 44, PC_TRIGGER = 28, PC_MAX = 74;
  let pcStartY = 0, pcPull = 0, pcMoved = 0, pcDrag = false;
  const setPull = (px, spring) => { cord.classList.toggle('dragging', !spring); cord.classList.toggle('ready', px >= PC_TRIGGER); pcLine.style.height = (PC_BASE + px) + 'px'; };
  const tug = () => { pcLine.style.transition = 'height .12s ease-out'; setPull(36, true); setTimeout(() => { pcLine.style.transition = ''; setPull(0, true); toggleTheme(); }, 130); };
  pcHandle.addEventListener('pointerdown', e => { pcDrag = true; pcStartY = e.clientY; pcMoved = 0; pcPull = 0; pcHandle.setPointerCapture(e.pointerId); cord.classList.add('dragging'); e.preventDefault(); });
  pcHandle.addEventListener('pointermove', e => { if (!pcDrag) return; pcMoved = Math.max(pcMoved, Math.abs(e.clientY - pcStartY)); pcPull = Math.min(PC_MAX, Math.max(0, e.clientY - pcStartY) * .85); setPull(pcPull, false); });
  pcHandle.addEventListener('pointerup', () => { if (!pcDrag) return; pcDrag = false; if (pcMoved < 4) return tug(); setPull(0, true); if (pcPull >= PC_TRIGGER) toggleTheme(); });
  pcHandle.addEventListener('pointercancel', () => { pcDrag = false; setPull(0, true); });
  pcHandle.addEventListener('click', e => { if (e.detail === 0) tug(); }); // keyboard (Enter / Space)

  // ============================================================
  // SECTION 6: FOOTER = CONTACT FORM + FOOTER LINKS + BACK-TO-TOP  -> <div id="site-footer">
  // Phone, email, address, social links yahin hain (placeholder replace karein)
  // ============================================================
  const opts = Object.values(SERVICES).map(s => `<option>${s.n}</option>`).join('');
  $('#site-footer').innerHTML = `<section class="contact-section" id="contact"><div class="container"><div class="row g-5">
    <div class="col-lg-5"><h2>Tell us about your business</h2><p>Share a few details and we will reply within one working day with a plan and a quote.</p></div>
    <div class="col-lg-7"><form id="contactForm" novalidate class="row g-3">
      <div class="col-md-6"><label class="form-label" for="name">Name *</label><input class="form-control" id="name" required autocomplete="name"><div class="invalid-feedback">Enter your name.</div></div>
      <div class="col-md-6"><label class="form-label" for="email">Email *</label><input class="form-control" id="email" type="email" required autocomplete="email"><div class="invalid-feedback">Enter a valid email address, like name@company.com.</div></div>
      <div class="col-md-6"><label class="form-label" for="phone">Phone</label><input class="form-control" id="phone" type="tel" autocomplete="tel"></div>
      <div class="col-md-6"><label class="form-label" for="company">Company</label><input class="form-control" id="company" autocomplete="organization"></div>
      <div class="col-12"><label class="form-label" for="service">Service *</label><select class="form-select" id="service" required><option value="">Choose a service</option>${opts}</select><div class="invalid-feedback">Choose the service you need.</div></div>
      <div class="col-12"><label class="form-label" for="message">Message *</label><textarea class="form-control" id="message" rows="4" required></textarea><div class="invalid-feedback">Tell us briefly what you need.</div></div>
      <div class="col-12"><button class="btn btn-brand" type="submit">Send inquiry</button><div id="formOk" class="alert alert-success mt-3 d-none" role="status">Thanks! Your inquiry is ready. We will contact you soon.</div></div></form></div></div></div></section>
  <footer class="site-footer"><div class="container"><div class="row g-4">
    <div class="col-lg-4">${brand}<p class="mt-3">TRENOvaCodes builds restaurant, retail and school software, plus custom systems and mobile apps for growing businesses.</p></div>
    <div class="col-6 col-lg-2"><h3>Quick links</h3><ul class="list-unstyled">${nav.map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join('')}</ul></div>
    <div class="col-6 col-lg-3"><h3>Services</h3><ul class="list-unstyled">${Object.entries(SERVICES).map(([k, s]) => `<li><a href="service-details.html?service=${k}">${s.n}</a></li>`).join('')}</ul></div>
    <div class="col-lg-3"><h3>Contact</h3><address>Main Boulevard, Lahore, Pakistan<br><a href="tel:+920000000000">+92 000 0000000</a><br><a href="mailto:hello@trenovacodes.com">hello@trenovacodes.com</a></address>
      <a href="#">Facebook</a> &middot; <a href="#">LinkedIn</a> &middot; <a href="#">WhatsApp</a></div></div>
    <p class="small mt-4 mb-0 border-top border-secondary pt-3">&copy; 2026 TRENOvaCodes. All rights reserved.</p></div></footer>
  <button id="backTop" class="btn btn-cta" aria-label="Back to top">&uarr;</button>`;


  // ============================================================
  // SECTION 7: CTA BANNER  -> <div data-cta>
  // 'Have a Project in Mind?' block
  // ============================================================
  const cta = () => `<section class="cta-section"><div class="container"><h2>Have a Project in Mind?</h2><p class="mb-4">Tell us what you need and we will show you how software can simplify it.</p><a class="btn btn-cta btn-lg" href="#contact">Contact Us</a></div></section>`;
  document.querySelectorAll('[data-cta]').forEach(e => e.outerHTML = cta());

  // ============================================================
  // SECTION 8: HOME/LISTING BLOCKS (HTML mein data- attribute se bharte hain)
  // [data-services] = service cards (index + services page)
  // ============================================================
  document.querySelectorAll('[data-services]').forEach(el => el.innerHTML = Object.entries(SERVICES).map(([k, s], n) => `<div class="col-md-6 col-lg-4"><article class="service-card reveal"><span class="sc-num" aria-hidden="true">${String(n + 1).padStart(2, '0')}</span><div class="icon-box">${ico(s.i, 30)}</div><h3 class="h5">${s.n}</h3><p>${s.s}</p><ul class="sc-tags">${s.f.split(',').slice(0, 3).map(f => `<li>${ico('check', 14)}${f}</li>`).join('')}</ul><a class="btn btn-svc" href="service-details.html?service=${k}"><span>${el.dataset.services || 'View Service'}</span>${ico('arrow', 18)}</a></article></div>`).join(''));

  // ============================================================
  // [data-why] = 'Why choose us' items (index page)
  // ============================================================
  const why = [['Custom solutions','Built around your workflow, not the other way round.'],['User friendly','Staff learn it in an hour, not a week.'],['Responsive','Works on desktop, tablet and phone.'],['Scalable','Add branches, users and modules as you grow.'],['Reliable','Tested, backed up and dependable on busy days.'],['Support','Real people to help after launch.']];
  document.querySelectorAll('[data-why]').forEach(el => el.innerHTML = why.map(([t, d]) => `<div class="col-md-6 col-lg-4"><div class="why-item"><h3 class="h5">${t}</h3><p class="mb-0">${d}</p></div></div>`).join(''));

  // ============================================================
  // [data-steps] = 'How we work' steps (index page)
  // ============================================================
  const steps = [['Requirement','We learn how you work today.'],['Planning','We agree scope, screens and timeline.'],['Development','We build and show progress often.'],['Delivery & Support','We launch, train your team and stay on call.']];
  document.querySelectorAll('[data-steps]').forEach(el => el.innerHTML = steps.map(([t, d]) => `<div class="step"><h3 class="h5">${t}</h3><p>${d}</p></div>`).join(''));

  // ============================================================
  // [data-team] = 'Our team' cards (index page)
  // ============================================================
  document.querySelectorAll('[data-team]').forEach(el => el.innerHTML = TEAM.map(m => `<div class="col-md-4"><div class="why-item team-card text-center"><div class="avatar"${m.img ? '' : ' aria-hidden="true"'}>${m.img ? `<img src="${m.img}" alt="${m.n}, ${m.r}" loading="lazy">` : m.n.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()}</div><h3 class="h5 mb-1">${m.n}</h3><p class="mb-0">${m.r}</p></div></div>`).join(''));


  // ============================================================
  // [data-expertise] = 'Areas of expertise' (about page)
  // ============================================================
  document.querySelectorAll('[data-expertise]').forEach(el => el.innerHTML = ['ERP Development','POS Development','Web Development','Mobile App Development','Business Automation','Custom Software'].map(t => `<div class="col-6 col-lg-4"><div class="why-item"><h3 class="h6 mb-0">${t}</h3></div></div>`).join(''));

  // ============================================================
  // [data-blog] = blog cards list (blog page)
  // ============================================================
  document.querySelectorAll('[data-blog]').forEach(el => el.innerHTML = Object.entries(POSTS).map(([k, p]) => `<div class="col-md-6 col-lg-4"><article class="blog-card">${art(p.i, p.t)}<div class="body"><p class="small mb-1"><span class="badge text-bg-primary">${p.c}</span> ${p.d}</p><h2 class="h5"><a class="text-reset text-decoration-none" href="blog-details.html?post=${k}">${p.t}</a></h2><p>${p.s}</p><a href="blog-details.html?post=${k}">Read More</a></div></article></div>`).join(''));


  // ============================================================
  // SECTION 9: DETAIL PAGES
  // setMeta() = page title + meta description set karta hai
  // ============================================================
  const setMeta = (t, d) => { document.title = t + ' | TRENOvaCodes'; $('meta[name=description]').content = d; };

  // ============================================================
  // 9a. SERVICE DETAILS PAGE (service-details.html?service=...)
  // Breadcrumb, hero, Features, Benefits, FAQ accordion, CTA
  // ============================================================
  if (page === 'service-details') {
    const k = SERVICES[q.get('service')] ? q.get('service') : 'restaurant-pos', s = SERVICES[k];
    setMeta(s.n, s.intro);
    $('#app').innerHTML = `<section class="bg-surface pb-0"><div class="container"><nav aria-label="breadcrumb"><ol class="breadcrumb"><li class="breadcrumb-item"><a href="index.html">Home</a></li><li class="breadcrumb-item"><a href="services.html">Services</a></li><li class="breadcrumb-item active" aria-current="page">${s.n}</li></ol></nav>
      <div class="row g-4 align-items-center pb-5"><div class="col-lg-6"><h1>${s.n}</h1><p class="lead">${s.intro}</p><a class="btn btn-brand" href="#contact">Request a demo</a></div><div class="col-lg-6">${art(s.i, s.n + ' software illustration')}</div></div></div></section>
      <section><div class="container"><div class="row g-5"><div class="col-lg-7"><h2>Features</h2><div class="row g-3 mt-1">${s.f.split(',').map(f => `<div class="col-sm-6"><div class="why-item py-3">${f}</div></div>`).join('')}</div></div>
      <div class="col-lg-5"><h2>Benefits</h2><ul class="list-group list-group-flush mt-3">${BENEFITS.map(b => `<li class="list-group-item bg-transparent">${b}</li>`).join('')}</ul></div></div></div></section>
      <section class="bg-surface"><div class="container"><h2 class="mb-4">Common questions</h2><div class="accordion" id="faq">${[['How long does setup take?','Most projects go live in a few weeks after requirements are agreed.'],['Can it be customized?','Yes. Every module can be adjusted to your process.'],['Is training included?','Yes. We train your team and provide support after launch.']].map(([a, b], i) => `<div class="accordion-item"><h3 class="accordion-header"><button class="accordion-button${i ? ' collapsed' : ''}" data-bs-toggle="collapse" data-bs-target="#f${i}">${a}</button></h3><div id="f${i}" class="accordion-collapse collapse${i ? '' : ' show'}" data-bs-parent="#faq"><div class="accordion-body">${b}</div></div></div>`).join('')}</div></div></section>${cta()}`;
  }

  // ============================================================
  // 9b. BLOG DETAILS PAGE (blog-details.html?post=...)
  // Breadcrumb, article, related service link, Related posts, CTA
  // ============================================================
  if (page === 'blog-details') {
    const k = POSTS[q.get('post')] ? q.get('post') : Object.keys(POSTS)[0], p = POSTS[k], sv = SERVICES[p.v];
    setMeta(p.t, p.s);
    $('#app').innerHTML = `<section><div class="container"><nav aria-label="breadcrumb"><ol class="breadcrumb"><li class="breadcrumb-item"><a href="index.html">Home</a></li><li class="breadcrumb-item"><a href="blog.html">Blog</a></li><li class="breadcrumb-item active" aria-current="page">${p.c}</li></ol></nav>
      <article class="article mx-auto"><h1>${p.t}</h1><p class="small">By TRENOvaCodes Team &middot; <time>${p.d}</time></p>${art(p.i, p.t + ' featured image')}
      <p class="mt-4 lead">${p.s} Here is what business owners should know.</p><h2>What to focus on</h2><ul>${p.p.map(x => `<li>${x}</li>`).join('')}</ul>
      <h3>Why it matters</h3><p>Small, consistent improvements in daily operations add up to better margins, calmer teams and happier customers.</p>
      <h2>Next step</h2><p>Explore our <a href="service-details.html?service=${p.v}">${sv.n}</a> solution to see how this works in practice.</p></article>
      <h2 class="h4 mt-5">Related posts</h2><div class="row g-4 mt-1">${Object.entries(POSTS).filter(([x]) => x !== k).slice(0, 3).map(([x, r]) => `<div class="col-md-4"><article class="blog-card"><div class="body"><h3 class="h6"><a href="blog-details.html?post=${x}">${r.t}</a></h3><p class="small mb-0">${r.s}</p></div></article></div>`).join('')}</div></div></section>${cta()}`;
  }


  // ============================================================
  // SECTION 10: CONTACT FORM VALIDATION
  // NOTE: abhi form kahin send nahi hota, sirf success message dikhata hai
  // ============================================================
  const form = $('#contactForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const em = $('#email'); em.setCustomValidity(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em.value) ? '' : 'x');
    form.classList.add('was-validated');
    if (form.checkValidity()) { $('#formOk').classList.remove('d-none'); form.reset(); form.classList.remove('was-validated'); }
  });

  // ============================================================
  // SECTION 11: BACK-TO-TOP + MOBILE MENU AUTO-CLOSE
  // ============================================================
  const top = $('#backTop');
  top.onclick = () => scrollTo({top: 0});
  document.querySelectorAll('#menu a').forEach(a => a.addEventListener('click', () => bootstrap.Collapse.getInstance($('#menu'))?.hide()));

  // ============================================================
  // SECTION 12: MOTION & ANIMATIONS
  // reveal stagger, card spotlight, scroll progress, count-up, 3D tilt, reveal observer
  // ============================================================
  // Motion: stagger, spotlight, nav, progress, count-up
  document.querySelectorAll('section h2,.why-item,.step,.blog-card,.cta-section .container>*,.article>*').forEach(e => e.classList.add('reveal'));
  document.querySelectorAll('.row,.steps').forEach(g => [...g.querySelectorAll(':scope>div .reveal,:scope>.reveal')].forEach((e, i) => e.style.setProperty('--d', i * 0.09 + 's')));
  document.body.insertAdjacentHTML('afterbegin', '<div id="progress"></div>');
  const nav0 = $('.site-nav'), prog = $('#progress');
  let maxS = 1, tick = false;
  const calcMax = () => { maxS = Math.max(1, document.documentElement.scrollHeight - innerHeight); };
  const paint = () => { tick = false; const y = scrollY; nav0.classList.toggle('scrolled', y > 30); prog.style.transform = `scaleX(${Math.min(1, y / maxS)})`; top.classList.toggle('show', y > 500); };
  const onScroll = () => { if (!tick) { tick = true; requestAnimationFrame(paint); } };
  addEventListener('scroll', onScroll, {passive: true}); addEventListener('resize', calcMax); addEventListener('load', calcMax);
  new ResizeObserver(calcMax).observe(document.body); calcMax(); paint();

  // ============================================================
  // 12a. COUNT-UP number (hero POS mock total)
  // ============================================================
  const tot = $('[data-count]');
  if (tot && !matchMedia('(prefers-reduced-motion: reduce)').matches) { const end = +tot.dataset.count, t0 = performance.now() + 1700; const tick = t => { const k = Math.min(Math.max((t - t0) / 1200, 0), 1); tot.textContent = 'Rs ' + Math.round(end * (1 - Math.pow(1 - k, 3))).toLocaleString('en-US'); if (k < 1) requestAnimationFrame(tick); }; tot.textContent = 'Rs 0'; requestAnimationFrame(tick); }

  // ============================================================
  // 12b. 3D TILT + HERO PARALLAX (mouse follow)
  // ============================================================
  // 3D tilt and hero parallax
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hero = $('.hero-section'), scn = $('#scene');
  if (hero && scn && !reduced) { let he = null; hero.addEventListener('pointermove', e => { if (!he) requestAnimationFrame(() => { const r = hero.getBoundingClientRect(); scn.style.setProperty('--sry', ((he.clientX - r.left) / r.width - .5) * 18 + 'deg'); scn.style.setProperty('--srx', (.5 - (he.clientY - r.top) / r.height) * 12 + 'deg'); he = null; }); he = e; }); }
  // Card spotlight + tilt: ek hi handler, har frame mein sirf ek baar chalta hai (rAF)
  document.querySelectorAll('.service-card,.blog-card,.why-item').forEach(c => {
    let ev = null;
    const apply = () => { const e = ev; ev = null; if (!e) return; const r = c.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top; c.style.setProperty('--mx', x + 'px'); c.style.setProperty('--my', y + 'px'); if (!reduced) { c.style.setProperty('--ry', (x / r.width - .5) * 10 + 'deg'); c.style.setProperty('--rx', (.5 - y / r.height) * 10 + 'deg'); } };
    c.addEventListener('pointermove', e => { if (!ev) requestAnimationFrame(apply); ev = e; });
    c.addEventListener('pointerleave', () => { ev = null; c.style.setProperty('--rx', '0deg'); c.style.setProperty('--ry', '0deg'); });
  });

  // ============================================================
  // 12c. SCROLL REVEAL OBSERVER (.reveal -> .reveal.in)
  // ============================================================
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), {threshold: .15});
  document.querySelectorAll('.reveal').forEach(e => io.observe(e));

  // ============================================================
  // SECTION 13: CHATBOT (side mein floating chat, neeche right corner)
  // Rule-based hai: keywords dhoondta hai aur tayyar jawab deta hai (server ya AI nahi chahiye).
  // Naye sawal/jawab: neeche KB list mein add karein. Style: style.css > section 25
  // ============================================================
  const svcList = Object.entries(SERVICES);
  const svcWords = {'restaurant-pos': ['restaurant', 'cafe', 'kitchen', 'food', 'hotel'], 'retail-pos': ['shop', 'retail', 'store', 'stock', 'dukan', 'inventory'], 'school-erp': ['school', 'student', 'fees', 'exam', 'college', 'attendance'], 'custom-software': ['custom', 'erp', 'crm', 'automation', 'accounting', 'software'], 'mobile-apps': ['app', 'mobile', 'android', 'ios', 'iphone']};
  const goBtn = '<button class="cb-link" data-go="contact">Open contact form</button>';
  const KB = [
    ...svcList.map(([k, s]) => ({k: svcWords[k] || [], a: () => `<b>${s.n}</b><br>${s.intro}<br><b>Includes:</b> ${s.f.split(',').slice(0, 5).join(', ')}.<br><a href="service-details.html?service=${k}">See full details &rarr;</a>`})),
    {k: ['service', 'offer', 'what do you', 'kya karte', 'kaam'], a: () => 'We build:<ul>' + svcList.map(([k, s]) => `<li><a href="service-details.html?service=${k}">${s.n}</a></li>`).join('') + '</ul>Ask me about any of them.'},
    {k: ['price', 'cost', 'quote', 'rate', 'charges', 'budget', 'qeemat', 'kitne', 'paise', 'fee'], a: () => 'Pricing depends on your size and the modules you need. Share a few details and we reply within one working day with a plan and a quote.<br>' + goBtn},
    {k: ['time', 'long', 'weeks', 'deadline', 'duration', 'kitna time', 'kitne din', 'delivery'], a: () => 'Most projects go live a few weeks after requirements are agreed, and we show progress often along the way.'},
    {k: ['demo', 'trial', 'presentation'], a: () => 'Happy to show you a demo. Tell us your business type in the contact form and we will arrange one.<br>' + goBtn},
    {k: ['support', 'training', 'train', 'maintenance', 'help after'], a: () => 'Yes. We train your team and stay on call after launch.'},
    {k: ['contact', 'phone', 'call', 'email', 'mail', 'address', 'whatsapp', 'reach', 'location', 'rabta', 'number'], a: () => 'Email: <a href="mailto:hello@trenovacodes.com">hello@trenovacodes.com</a><br>Phone: <a href="tel:+920000000000">+92 000 0000000</a><br>Lahore, Pakistan<br>' + goBtn},
    {k: ['thanks', 'thank', 'shukriya', 'shukria'], a: () => 'You are welcome! Anything else I can help with?'},
    {k: ['hi', 'hello', 'hey', 'salam', 'assalam', 'aoa'], a: () => 'Hello! 👋 Ask me about our services, pricing, timelines or how to reach us.'}
  ];
  const reply = t => { t = t.toLowerCase(); const hit = KB.find(e => e.k.some(w => new RegExp('\\b' + w + 's?\\b').test(t))); return hit ? hit.a() : 'I am not sure about that yet. Try a quick option below, or send our team a message.<br>' + goBtn; };
  document.body.insertAdjacentHTML('beforeend', `<button id="chatFab" class="cb-fab" type="button" aria-label="Open chat" aria-expanded="false" aria-controls="chatBox"><span class="cb-ico">${ico('chat', 26)}</span><span class="cb-ico cb-x">${ico('close', 24)}</span></button>
  <section id="chatBox" class="cb-box" aria-label="Chat assistant"><header class="cb-head"><span class="cb-av">${ico('spark', 18)}</span><div><strong>TRENO Assistant</strong><small><i></i> Online</small></div></header>
    <div class="cb-msgs" id="chatMsgs" aria-live="polite"></div><div class="cb-chips" id="chatChips">${['Our services', 'Get a quote', 'How long does it take?', 'Contact'].map(c => `<button type="button">${c}</button>`).join('')}</div>
    <form class="cb-form" id="chatForm"><input id="chatIn" placeholder="Type your question..." autocomplete="off" aria-label="Your message"><button type="submit" aria-label="Send">${ico('send', 18)}</button></form></section>`);
  const fab = $('#chatFab'), box = $('#chatBox'), msgs = $('#chatMsgs'), inp = $('#chatIn');
  let greeted = false;
  const addMsg = (c, who) => { const d = document.createElement('div'); d.className = 'cb-m ' + who; who === 'me' ? d.textContent = c : d.innerHTML = c; msgs.appendChild(d); msgs.scrollTop = msgs.scrollHeight; return d; };
  const ask = t => { t = t.trim(); if (!t) return; addMsg(t, 'me'); const w = addMsg('<span class="cb-typing"><i></i><i></i><i></i></span>', 'bot'); setTimeout(() => { w.innerHTML = reply(t); msgs.scrollTop = msgs.scrollHeight; }, 550); };
  const setOpen = o => { box.classList.toggle('open', o); fab.classList.toggle('on', o); fab.setAttribute('aria-expanded', o); fab.setAttribute('aria-label', o ? 'Close chat' : 'Open chat'); if (o) { if (!greeted) { greeted = true; addMsg('Hi! 👋 I am the TRENOvaCodes assistant. How can I help you today?', 'bot'); } setTimeout(() => inp.focus({preventScroll: true}), 250); } };
  fab.onclick = () => setOpen(!box.classList.contains('open'));
  $('#chatChips').onclick = e => { const b = e.target.closest('button'); if (b) ask(b.textContent); };
  $('#chatForm').onsubmit = e => { e.preventDefault(); ask(inp.value); inp.value = ''; };
  msgs.onclick = e => { const g = e.target.closest('[data-go]'); if (g) { setOpen(false); document.getElementById(g.dataset.go).scrollIntoView({behavior: 'smooth'}); } };
  addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });


  // ============================================================
  // SECTION 14: BUTTON RIPPLE (click par halka circle). Style: style.css > section 26
  // ============================================================
  document.addEventListener('pointerdown', e => {
    const b = e.target.closest('.btn,.cb-link'); if (!b) return;
    const r = b.getBoundingClientRect(), d = Math.max(r.width, r.height) * 2, sp = document.createElement('span');
    sp.className = 'ripple'; sp.style.cssText = `width:${d}px;height:${d}px;left:${e.clientX - r.left - d / 2}px;top:${e.clientY - r.top - d / 2}px`;
    b.appendChild(sp); setTimeout(() => sp.remove(), 650);
  });


  // ============================================================
  // SECTION 15: HERO ANIMATIONS (halki: sirf transform/opacity, canvas ya blur nahi)
  // 15a Heading words ek ek karke aate hain | 15b "Now building" badge ka word badalta hai
  // 15c Scene ke ird gird ghoomte icons. CSS: style.css > section 27
  // ============================================================
  const h1 = $('.hero-section h1');
  if (h1 && !reduced) {                                   // 15a
    let n = 0;
    [...h1.childNodes].forEach(node => {
      if (node.nodeType === 3) {
        const f = document.createDocumentFragment();
        node.textContent.split(/(\s+)/).forEach(t => { if (!t.trim()) return f.append(t); const w = document.createElement('span'); w.className = 'w'; w.style.setProperty('--i', n++); w.textContent = t; f.append(w); });
        node.replaceWith(f);
      } else if (node.nodeType === 1) { node.classList.add('w'); node.style.setProperty('--i', n++); }
    });
  }
  const rot = $('#heroRot');
  if (rot && !reduced) {                                  // 15b
    const names = Object.values(SERVICES).map(x => x.n); let ri = 0;
    setInterval(() => { if (document.hidden) return; rot.classList.add('out'); setTimeout(() => { rot.textContent = names[++ri % names.length]; rot.classList.remove('out'); }, 260); }, 2600);
  }
  const sc = $('#scene');
  if (sc) sc.insertAdjacentHTML('afterbegin', `<div class="orbit" aria-hidden="true"><span class="oi oi-1">${ico('pos', 20)}</span><span class="oi oi-2">${ico('shop', 20)}</span><span class="oi oi-3">${ico('school', 20)}</span></div>`); // 15c

})();
