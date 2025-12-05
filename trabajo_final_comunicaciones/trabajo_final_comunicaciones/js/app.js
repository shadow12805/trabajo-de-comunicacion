// Tarjetas basadas en los títulos exactos de la pizarra
// Añadimos etiquetas y extractos para poder buscar/mostrar relacionados
const posts = [
  {
    id: 1,
    title: 'Introducción a la Comunicación',
    excerpt: 'Conceptos clave, pilares y objetivos para comunicar con eficacia.',
    tags: ['comunicación','pilares','conceptos'],
    items: [
      '4 Pilares de la Comunicación',
      'Objetivo de la Comunicación',
      'Tipos, formas y estilos de comunicación',
      'Transversalidad',
      'Objetivo vs Subjetivo'
    ]
  },
  {
    id: 2,
    title: 'Proceso de Comunicación',
    excerpt: 'Elementos del proceso, modelos y buenas prácticas para reducir fallos.',
    tags: ['proceso','modelos','retroalimentación'],
    items: [
      'Elementos',
      'Proceso tradicional'
    ]
  },
  {
    id: 3,
    title: 'Comunicación Asertiva',
    excerpt: 'Técnicas y ejercicios para expresar ideas con claridad y respeto.',
    tags: ['asertividad','no-verbal','habilidades'],
    items: [
      'Funciones del lenguaje',
      'Comunicación no verbal',
      'Proceso tradicional vs Modelo Roman–Jakobson'
    ]
  }
];

// Contenido detallado para cada título y sus subtítulos
const detailsContent = {
  'Introducción a la Comunicación': {
    full: `
      <h3>Introducción a la Comunicación</h3>
      <p>La comunicación es la habilidad humana de transmitir significado: ideas, emociones y conocimientos. Abarca desde intercambios informales hasta estrategias organizacionales complejas. Este artículo repasa conceptos clave y ofrece herramientas prácticas para mejorar la eficacia comunicativa.</p>

      <h4>4 Pilares de la Comunicación</h4>
      <p>Los pilares son los elementos esenciales que sostienen cualquier acto comunicativo:</p>
      <ul>
        <li><strong>Emisor:</strong> quien formula y codifica el mensaje. (Ej.: un gerente preparando un informe).</li>
        <li><strong>Receptor:</strong> quien recibe y decodifica. Sus conocimientos previos afectan la interpretación.</li>
        <li><strong>Mensaje:</strong> contenido y forma; claridad y estructura determinan su comprensión.</li>
        <li><strong>Canal/Código:</strong> medio y sistema de signos (idioma, jerga técnica, imágenes).</li>
      </ul>
      <p>Breve ejemplo: un tutorial en video combina voz (verbal), imágenes (visual) y subtítulos (escrito) para reducir ambigüedad y adaptar el contenido a distintos receptores.</p>

      <h4>Objetivo de la Comunicación</h4>
      <p>Los objetivos habituales son:</p>
      <ul>
        <li><strong>Informar:</strong> transmitir hechos o instrucciones.</li>
        <li><strong>Persuadir:</strong> influir en actitudes o decisiones.</li>
        <li><strong>Motivar:</strong> incentivar acciones o cambios de comportamiento.</li>
        <li><strong>Relacionar:</strong> mantener vínculos sociales y confianza.</li>
      </ul>
      <p>Consejo práctico: antes de comunicar, define el objetivo en una frase. Esto ayuda a seleccionar tono, canales y soporte de evidencia.</p>

      <h4>Tipos, Formas y Estilos de Comunicación</h4>
      <p>Desglosar la comunicación facilita su diseño:</p>
      <ul>
        <li><strong>Tipos:</strong> verbal (oral/escrito), no verbal (gestos, postura), visual (gráficos, diseño).</li>
        <li><strong>Formas:</strong> intrapersonal (autodiálogo), interpersonal, grupal, masiva.</li>
        <li><strong>Estilos:</strong> asertivo, pasivo, agresivo, pasivo-agresivo. Cada estilo impacta resultados y relaciones.</li>
      </ul>
      <p>Ejercicio: analiza una reunión reciente. Identifica el tipo, la forma y el estilo dominante. ¿Qué podrías cambiar para mejorar el resultado?</p>

      <h4>Transversalidad</h4>
      <p>La comunicación se cruza con todas las disciplinas: en salud mejora la adherencia a tratamientos; en educación facilita el aprendizaje; en empresas optimiza la coordinación y disminuye errores. Desarrollarla es una inversión en eficacia colectiva.</p>

      <h4>Objetivo vs Subjetivo</h4>
      <p>Separar hechos de opiniones reduce malentendidos:</p>
      <ul>
        <li><strong>Objetivo:</strong> datos verificables (fechas, cifras).</li>
        <li><strong>Subjetivo:</strong> juicios, emociones y percepciones personales.</li>
      </ul>
      <p>Práctica recomendada: al presentar una crítica, expón hechos primero y luego tu interpretación, indicando claramente la diferencia.</p>

      <h4>Lecturas y recursos</h4>
      <p>Para profundizar: libros introductorios sobre teoría de la comunicación, manuales de redacción y cursos de oratoria o comunicación no verbal.</p>
    `,
    '4 Pilares de la Comunicación': '<p>Explicación ampliada: Emisor, receptor, mensaje y canal/código. Ejemplo: una campaña de marketing usa varios canales (redes, email, video) para alcanzar distintos receptores con mensajes adaptados.</p>',
    'Objetivo de la Comunicación': '<p>Definir objetivo: informar, persuadir, motivar o coordinar. Redacta la intención en una oración antes de diseñar el mensaje.</p>',
    'Tipos, formas y estilos de comunicación': '<p>Tipos: verbal, no verbal, escrita, visual. Formas: interpersonal, intrapersonal, grupal, masiva. Estilos: asertivo/pasivo/agresivo. Tip práctico: adapta el estilo al contexto (negociación vs. retroalimentación)</p>',
    'Transversalidad': '<p>La comunicación es competencia clave en todas las áreas profesionales. Fomenta la colaboración y la transferencia de conocimiento.</p>',
    'Objetivo vs Subjetivo': '<p>Separar hechos y opiniones ayuda a la claridad. Usa frases como "Según los datos..." para marcar lo objetivo.</p>'
  },
  'Proceso de Comunicación': {
    full: `
      <h3>Proceso de Comunicación</h3>
      <p>El proceso de comunicación es un conjunto de acciones y decisiones que afectan la manera en que un mensaje se crea, transmite e interpreta. Comprenderlo es clave para diseñar mensajes eficientes y reducir fallos.</p>

      <h4>Elementos detallados</h4>
      <p>Más allá de los nombres, es útil ver cómo interactúan:</p>
      <ul>
        <li><strong>Emisor:</strong> decide la intención, estructura el mensaje y elige el canal; su conocimiento del receptor condiciona la codificación.</li>
        <li><strong>Mensaje:</strong> incluye contenido (qué) y forma (cómo). Claridad, orden y evidencia aumentan la comprensión.</li>
        <li><strong>Canal y código:</strong> elegir el canal correcto (email, reunión, video) y un código comprensible (lenguaje técnico vs. coloquial) reduce fricciones.</li>
        <li><strong>Contexto:</strong> histórico, cultural y situacional; condiciona el significado de las palabras y símbolos.</li>
        <li><strong>Retroalimentación:</strong> validación y ajuste continuo; sin feedback no sabemos si el mensaje fue comprendido.</li>
        <li><strong>Ruido:</strong> factores que distorsionan: ruido físico, distracciones, sesgos cognitivos, diferencias culturales o malentendidos semánticos.</li>
      </ul>

      <h4>Modelos relevantes</h4>
      <p>Algunos modelos ayudan a analizar procesos concretos:</p>
      <ul>
        <li><strong>Shannon–Weaver:</strong> enfoque técnico y lineal, útil para comunicaciones técnicas y transmisión de datos.</li>
        <li><strong>Berlo (SMCR):</strong> enfatiza habilidades del emisor, mensaje, canal y receptor.</li>
        <li><strong>Modelos interacciónales:</strong> incorporan feedback y contexto, más realistas para entornos humanos.</li>
      </ul>

      <h4>Buenas prácticas</h4>
      <ol>
        <li>Define el objetivo del mensaje en una frase.</li>
        <li>Selecciona canal y código adecuados al receptor.</li>
        <li>Incluye mecanismos de retroalimentación (preguntas, confirmaciones).</li>
        <li>Anticipa ruidos y prepara estrategias (resúmenes, aclaraciones).</li>
      </ol>

      <p>Checklist rápido: ¿Cuál es el objetivo? ¿Quién es el receptor? ¿Qué canal usaré? ¿Cómo mediré la comprensión?</p>
    `,
    'Elementos': '<p>Emisor, receptor, mensaje, canal, código, contexto, retroalimentación y ruido. Identifica posibles ruidos y planifica preguntas de verificación para el receptor.</p>',
    'Proceso tradicional': '<p>Modelo lineal (emisor → receptor). Útil en teoría, pero en la práctica añade siempre retroalimentación para cerrar el ciclo comunicativo.</p>'
  },
  'Comunicación Asertiva': {
    full: `
      <h3>Comunicación Asertiva</h3>
      <p>La comunicación asertiva es una habilidad práctica para expresar opiniones, deseos y límites de forma clara, directa y respetuosa. Se contrapone a la comunicación pasiva (evita decir lo que se piensa) y a la agresiva (imposición sin respeto).</p>

      <h4>¿Por qué desarrollar la asertividad?</h4>
      <p>Ser asertivo mejora la autoestima, reduce conflictos innecesarios y facilita la resolución colaborativa de problemas. En el entorno laboral, incrementa la productividad y la satisfacción del equipo.</p>

      <h4>Técnicas y frases útiles</h4>
      <ul>
        <li><strong>Mensajes en primera persona (I-statements):</strong> "Yo siento... cuando... me gustaría..." reduce la defensiva del receptor.</li>
        <li><strong>Solicitudes concretas:</strong> evita frases vagas; pide acciones específicas y plazos si aplican.</li>
        <li><strong>Reforzamiento positivo:</strong> reconoce lo que funciona antes de proponer cambios.</li>
      </ul>

      <h4>Comunicación no verbal</h4>
      <p>La coherencia entre palabra y gesto es esencial. Postura abierta, distancia adecuada y tono de voz equilibrado reforzarán el mensaje.</p>

      <h4>Funciones del lenguaje y Jakobson</h4>
      <p>Analizar cuál función predomina (informar, persuadir, expresar) ayuda a elegir estrategia: una petición (función conativa) requiere claridad; un relato informativo (referencial) precisa evidencias y estructura.</p>

      <h4>Ejercicios prácticos</h4>
      <ol>
        <li>Roleplay: practicar conversaciones difíciles con un compañero, alternando roles.</li>
        <li>Escribir I-statements para situaciones reales y ensayar el tono.</li>
        <li>Grabarse y revisar congruencia verbal/no verbal.</li>
      </ol>
    `,
    'Funciones del lenguaje': '<p>Explicación y ejemplos: referencial (informar), emotiva (expresar sentimientos), conativa (pedir), fática (mantener canal), metalingüística (aclarar el código) y poética (forma). Identificar la función guía la estrategia del emisor.</p>',
    'Comunicación no verbal': '<p>Detalle: postura, gestos, expresión facial, mirada y proximidad. Consejo: antes de una conversación importante, controla tu ritmo respiratorio y tu postura para transmitir calma.</p>',
    'Proceso tradicional vs Modelo Roman–Jakobson': '<p>Roman–Jakobson añade funciones que vinculan los elementos del proceso con objetivos comunicativos concretos; usar este análisis mejora la precisión del mensaje.</p>'
  }
};


// Renderizado de tarjetas
const cardsGrid = document.getElementById('cardsGrid');
function renderCards(){
  cardsGrid.innerHTML = '';
  posts.forEach((p, i) => {
    // Crear tarjeta madre
    const card = document.createElement('article');
    card.className = 'card mother-card';
    card.style.animationDelay = (i * 60) + 'ms';

    // Header (madre) grande
    const header = document.createElement('div');
    header.className = 'mother-header';
    header.innerHTML = `<h3>${escapeHtml(p.title)}</h3> <button class="toggle-subcards" aria-expanded="false">Ver</button>`;

    // Contenedor de subtarjetas
    const subGrid = document.createElement('div');
    subGrid.className = 'subcards-grid collapsed';

    (p.items || []).forEach((it, idx) => {
      const sub = document.createElement('button');
      sub.className = 'subcard';
      sub.type = 'button';
      sub.innerHTML = `<span>${escapeHtml(it)}</span>`;
      sub.addEventListener('click', (e) => { e.stopPropagation(); openSubDetail(p.title, it); });
      subGrid.appendChild(sub);
    });

    // Toggle expand/collapse only when pressing the toggle button
    const toggleBtn = header.querySelector('.toggle-subcards');
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isCollapsed = subGrid.classList.toggle('collapsed');
      const expanded = isCollapsed ? 'false' : 'true';
      toggleBtn.setAttribute('aria-expanded', expanded);
      toggleBtn.textContent = expanded === 'true' ? 'Ocultar' : 'Ver';
    });

    // Clicking the title opens the full detail for the mother card
    const titleEl = header.querySelector('h3');
    titleEl.style.cursor = 'pointer';
    titleEl.addEventListener('click', (e) => { e.stopPropagation(); openDetail(p.id); });

    card.appendChild(header);
    card.appendChild(subGrid);
    // Add excerpt and tags below
    const metaBar = document.createElement('div');
    metaBar.className = 'card-meta';
    metaBar.innerHTML = `<p class="excerpt">${escapeHtml(p.excerpt||'')}</p><p class="tags">${(p.tags||[]).map(t=>'<span class="tag">'+escapeHtml(t)+'</span>').join(' ')}</p>`;
    card.appendChild(metaBar);
    cardsGrid.appendChild(card);
  });
}

function escapeHtml(s){
  return String(s).replace(/[&<>"]+/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
}

// Detalle
const detailCard = document.getElementById('detailCard');
const detailTitle = document.getElementById('detailTitle');
const detailBody = document.getElementById('detailBody');
const closeDetailBtn = document.getElementById('closeDetail');
function openDetail(id, subitem){
  const post = posts.find(p => p.id == id);
  if(!post) return;
  const title = post.title;
  detailTitle.textContent = title + (subitem ? (' — ' + subitem) : '');

  // Buscar contenido en detailsContent
  const doc = detailsContent[title] || {};
  if(subitem && doc[subitem]){
    detailBody.innerHTML = doc[subitem];
  } else if(doc.full){
    detailBody.innerHTML = doc.full;
  } else {
    // Fallback: lista de subtítulos
    detailBody.innerHTML = '<ul>' + (post.items || []).map(i => '<li>'+escapeHtml(i)+'</li>').join('') + '</ul>';
  }
  // Populate TOC, meta, related and share
  populateDetailMetaAndToc(post, subitem);

  detailCard.classList.remove('hidden');
  detailCard.scrollIntoView({behavior:'smooth',block:'center'});
}

function openSubDetail(parentTitle, subitem){
  const post = posts.find(p => p.title === parentTitle);
  if(!post) return;
  openDetail(post.id, subitem);
}
closeDetailBtn.addEventListener('click', ()=>{detailCard.classList.add('hidden');});

// Smooth anchors
document.querySelectorAll('[data-scroll]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const href = a.getAttribute('href');
    const el = document.querySelector(href);
    if(el) el.scrollIntoView({behavior:'smooth'});
  });
});

// Menu toggle mobile
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', ()=>{ mainNav.classList.toggle('open'); mainNav.style.display = mainNav.style.display === 'block' ? '' : 'block'; });

/* LOGIN simple usando localStorage y Web Crypto para hash */
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const modalClose = document.getElementById('modalClose');
const authForm = document.getElementById('authForm');
const authUser = document.getElementById('authUser');
const authPass = document.getElementById('authPass');
const authMessage = document.getElementById('authMessage');
const toggleRegister = document.getElementById('toggleRegister');
const authSubmit = document.getElementById('authSubmit');
const userInfo = document.getElementById('userInfo');

let registerMode = false;

loginBtn.addEventListener('click', ()=>{ openModal(); });
modalClose.addEventListener('click', ()=>{ closeModal(); });
loginModal.addEventListener('click', (e)=>{ if(e.target === loginModal) closeModal(); });

function openModal(){
  loginModal.classList.remove('hidden');
  authMessage.textContent = '';
  authUser.value = '';
  authPass.value = '';
  registerMode = false;
  authSubmit.textContent = 'Entrar';
  document.getElementById('modalTitle').textContent = 'Iniciar sesión';
}
function closeModal(){ loginModal.classList.add('hidden'); }

toggleRegister.addEventListener('click', ()=>{
  registerMode = !registerMode;
  authSubmit.textContent = registerMode ? 'Registrar' : 'Entrar';
  document.getElementById('modalTitle').textContent = registerMode ? 'Registrar usuario' : 'Iniciar sesión';
});

authForm.addEventListener('submit', async (e) =>{
  e.preventDefault();
  const username = authUser.value.trim();
  const password = authPass.value;
  if(!username || !password){ authMessage.textContent = 'Rellena usuario y contraseña'; return; }
  if(registerMode){
    const ok = await registerUser(username,password);
    authMessage.textContent = ok ? 'Usuario registrado ✅' : 'El usuario ya existe';
    if(ok) { setTimeout(()=>{ closeModal(); updateUserUI(); },800); }
  } else {
    const ok = await loginUser(username,password);
    authMessage.textContent = ok ? 'Sesión iniciada ✅' : 'Usuario o contraseña incorrecta';
    if(ok) { setTimeout(()=>{ closeModal(); updateUserUI(); },600); }
  }
});

function getUsers(){
  try{ return JSON.parse(localStorage.getItem('db_users')||'{}'); }catch(e){return{}}}
function setUsers(u){ localStorage.setItem('db_users', JSON.stringify(u)); }

async function hashPassword(pass){
  const enc = new TextEncoder().encode(pass);
  const buf = await crypto.subtle.digest('SHA-256', enc);
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,'0')).join('');
}

async function registerUser(username, password){
  const users = getUsers();
  if(users[username]) return false;
  const hash = await hashPassword(password);
  users[username] = {hash, created: new Date().toISOString()};
  setUsers(users);
  localStorage.setItem('currentUser', username);
  return true;
}

async function loginUser(username,password){
  const users = getUsers();
  if(!users[username]) return false;
  const hash = await hashPassword(password);
  if(users[username].hash === hash){ localStorage.setItem('currentUser', username); return true; }
  return false;
}

function logout(){ localStorage.removeItem('currentUser'); updateUserUI(); }

function updateUserUI(){
  const cur = localStorage.getItem('currentUser');
  if(cur){
    userInfo.classList.remove('hidden');
    userInfo.innerHTML = `<span class="small muted">${cur}</span> <button id="logoutBtn" class="btn ghost">Salir</button>`;
    loginBtn.classList.add('hidden');
    document.getElementById('logoutBtn').addEventListener('click', logout);
  } else {
    userInfo.classList.add('hidden');
    userInfo.innerHTML = '';
    loginBtn.classList.remove('hidden');
  }
}

// Inicialización
renderCards();
updateUserUI();
// Las galerías y el vídeo ahora son gestionados directamente en el HTML.
// Si quieres que el JS gestione dinámicamente esas secciones, dime y lo agrego.

// --- Nuevas funcionalidades añadidas ---

// Theme toggle (dark-mode)
const themeToggle = document.getElementById('themeToggle');
function initTheme(){
  const saved = localStorage.getItem('theme');
  if(saved === 'dark') document.body.classList.add('dark-mode');
  themeToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  });
}
initTheme();

// Search (simple client-side)
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
function initSearch(){
  let to;
  searchInput.addEventListener('input', (e)=>{
    clearTimeout(to);
    to = setTimeout(()=> doSearch(e.target.value.trim()),200);
  });
}
function doSearch(q){
  searchResults.innerHTML = '';
  if(!q) return;
  const qq = q.toLowerCase();
  const items = [];
  posts.forEach(p => {
    if(p.title.toLowerCase().includes(qq) || (p.excerpt||'').toLowerCase().includes(qq) || (p.tags||[]).some(t=>t.toLowerCase().includes(qq))){
      items.push({type:'post',post:p});
    }
    (p.items||[]).forEach(si=>{ if(si.toLowerCase().includes(qq)) items.push({type:'sub',post:p,sub:si}); });
  });
  if(items.length===0){ searchResults.innerHTML = '<li class="no-results">Sin resultados</li>'; return; }
  searchResults.innerHTML = items.map(it=>{
    if(it.type==='post') return `<li><button class="result-btn" data-id="${it.post.id}">${escapeHtml(it.post.title)} <small class="muted">${escapeHtml(it.post.excerpt||'')}</small></button></li>`;
    return `<li><button class="result-btn" data-id="${it.post.id}" data-sub="${escapeHtml(it.sub)}">${escapeHtml(it.post.title)} — <em>${escapeHtml(it.sub)}</em></button></li>`;
  }).join('');
  searchResults.querySelectorAll('.result-btn').forEach(b=>{
    b.addEventListener('click', ()=>{
      const id = b.getAttribute('data-id');
      const sub = b.getAttribute('data-sub');
      if(sub) openDetail(id, sub); else openDetail(id);
      searchResults.innerHTML = '';
      searchInput.value = '';
    });
  });
}
initSearch();

// Populate TOC, meta, related posts and share buttons for a post
function populateDetailMetaAndToc(post, subitem){
  // Meta
  const meta = document.getElementById('detailMeta');
  meta.innerHTML = `<div class="post-meta"><span class="tag-list">${(post.tags||[]).map(t=>'<span class="tag">'+escapeHtml(t)+'</span>').join(' ')}</span> <span class="muted small">ID:${post.id}</span></div>`;

  // Ensure headings have ids for TOC
  const tocEl = document.getElementById('detailToc');
  tocEl.innerHTML = '';
  const headings = detailBody.querySelectorAll('h3,h4,h5');
  if(headings.length){
    const ul = document.createElement('ul'); ul.className='toc-list';
    headings.forEach(h=>{
      const id = h.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g,'-');
      h.id = id;
      const li = document.createElement('li');
      li.innerHTML = `<a href="#${id}" data-scroll>${escapeHtml(h.textContent)}</a>`;
      ul.appendChild(li);
    });
    tocEl.appendChild(ul);
    // attach smooth behavior
    tocEl.querySelectorAll('[data-scroll]').forEach(a=>a.addEventListener('click', e=>{ e.preventDefault(); const id = a.getAttribute('href'); const el = document.querySelector(id); if(el) el.scrollIntoView({behavior:'smooth'}); }));
  }

  // Related posts by tag
  const related = document.getElementById('relatedPosts');
  related.innerHTML = '';
  const rel = posts.filter(p=> p.id !== post.id && (p.tags||[]).some(t=> (post.tags||[]).includes(t) )).slice(0,4);
  if(rel.length){
    related.innerHTML = '<h4>Artículos relacionados</h4><ul class="related-list">' + rel.map(r=>`<li><button class="rel-btn" data-id="${r.id}">${escapeHtml(r.title)}</button></li>`).join('') + '</ul>';
    related.querySelectorAll('.rel-btn').forEach(b=>b.addEventListener('click', ()=> openDetail(b.getAttribute('data-id'))));
  }

  // Share buttons
  const share = document.getElementById('shareButtons');
  const url = location.href;
  share.innerHTML = `<div class="share-buttons"><button class="share" data-action="twitter">Twitter</button><button class="share" data-action="facebook">Facebook</button><button class="share" data-action="mailto">Email</button></div>`;
  share.querySelectorAll('.share').forEach(b=>{
    b.addEventListener('click', ()=>{
      const action = b.getAttribute('data-action');
      const text = encodeURIComponent(post.title + ' — ' + (post.excerpt||''));
      if(action==='twitter') window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}`,'_blank');
      if(action==='facebook') window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,'_blank');
      if(action==='mailto') window.location.href = `mailto:?subject=${encodeURIComponent(post.title)}&body=${text}%0A%0A${encodeURIComponent(url)}`;
    });
  });

  // Newsletter small form (stores to localStorage)
  if(!document.getElementById('newsletterBox')){
    const nb = document.createElement('div'); nb.id = 'newsletterBox'; nb.className = 'newsletter-box';
    nb.innerHTML = `<h4>Suscríbete</h4><form id="newsletterForm"><input id="newsletterEmail" type="email" placeholder="tu@email.com" required><button type="submit">Enviar</button><p id="newsletterMsg" class="muted small"></p></form>`;
    detailBody.parentNode.appendChild(nb);
    document.getElementById('newsletterForm').addEventListener('submit', (e)=>{
      e.preventDefault(); const em = document.getElementById('newsletterEmail').value.trim(); if(!em){ document.getElementById('newsletterMsg').textContent='Introduce un email'; return; }
      const db = JSON.parse(localStorage.getItem('newsletter')||'[]'); if(!db.includes(em)) db.push(em); localStorage.setItem('newsletter', JSON.stringify(db)); document.getElementById('newsletterMsg').textContent='Gracias ✅'; document.getElementById('newsletterEmail').value = '';
    });
  }

  // Rebind lightbox for gallery images (if any)
  initGalleryLightbox();
}

// Lightbox for images (simple)
function initGalleryLightbox(){
  if(document.getElementById('lightboxOverlay')) return; // create once
  const overlay = document.createElement('div'); overlay.id = 'lightboxOverlay'; overlay.className='lightbox-overlay hidden';
  overlay.innerHTML = `<div class="lightbox-inner"><button id="lbClose" class="lb-close">×</button><img id="lbImg" src="" alt=""><div class="lb-caption"></div></div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', (e)=>{ if(e.target===overlay) overlay.classList.add('hidden'); });
  document.getElementById('lbClose').addEventListener('click', ()=> overlay.classList.add('hidden'));

  // wire thumbnails
  document.querySelectorAll('img.thumb').forEach(img=>{
    img.setAttribute('loading','lazy');
    img.style.cursor = 'zoom-in';
    img.removeEventListener('click', img._lbClick);
    img._lbClick = ()=>{ document.getElementById('lbImg').src = img.src; document.querySelector('#lightboxOverlay .lb-caption').textContent = img.alt || ''; overlay.classList.remove('hidden'); };
    img.addEventListener('click', img._lbClick);
  });
}
// Ensure lightbox and lazy attributes are initialized
document.addEventListener('DOMContentLoaded', ()=>{ initGalleryLightbox(); });

