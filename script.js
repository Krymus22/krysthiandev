// ============ TRADUÇÕES ============
const TRANSLATIONS = {
  pt: {
    nav_systems: 'Sistemas',
    nav_ui: 'UI',
    nav_contact: 'Contato',
    badge_open: 'Aberto a novos projetos',
    hero_role: 'Desenvolvedor Roblox.',
    hero_desc: '2 anos criando experiências completas no Roblox Studio: scripts, sistemas, UI e tudo que seu jogo precisar. Soluções personalizadas para cada projeto.',
    btn_hire: 'Me contratar',
    btn_works: 'Ver trabalhos',
    card_available: 'Disponível para trabalho',
    card_exp: 'Anos de experiência',
    card_systems: 'Sistemas no portfólio',
    card_response: 'Tempo de resposta',
    sec_01: '01 / trabalhos',
    sec_systems: 'Sistemas',
    sec_systems_sub: 'Sistemas que desenvolvi no Roblox Studio, gravados em teste real.',
    sys_teleport_desc: 'Sistema de matchmaking que forma a fila, aguarda os jogadores necessários e teleporta todos juntos para um servidor exclusivo da partida. A interface mostra o status da busca e a fila em tempo real, com opção de cancelar.',
    sys_combat_title: 'Sistema de Combate',
    sys_combat_desc: 'Combate corpo a corpo com combo de três variações de soco encadeadas. O personagem corre e executa dash, com barras de vida e stamina controlando o gasto de cada ação.',
    tag_matchmaking: 'Matchmaking',
    tag_queue: 'Fila de jogadores',
    tag_reserved: 'Servidor exclusivo',
    tag_combo: 'Combo de 3 golpes',
    tag_sprint: 'Corrida',
    tag_hit: 'Detecção de acerto',
    sec_02: '02 / interface',
    sec_ui: 'UI & Arte',
    sec_ui_sub: 'Interfaces e assets visuais que criei para jogos na Roblox.',
    ui_passes: 'Loja de Passes & VIP',
    ui_passes_note: 'Menu de monetização com GamePasses, pacote múltiplo e assinatura mensal.',
    ui_slot: 'Slot de Item — Dourado',
    ui_slot_note: 'Moldura de inventário para itens de raridade alta.',
    ui_emblems: 'Emblemas Militares',
    ui_emblems_note: 'Conjunto de insígnias de divisão para sistema de patentes.',
    ui_icon: 'Ícone de Jogo',
    ui_icon_note: 'Arte de capa para listagem na plataforma.',
    aria_expand: 'Expandir vídeo',
    aria_close: 'Fechar',
    sec_03: '03 / contato',
    contact_title: 'Vamos criar',
    contact_title_2: 'algo.',
    contact_desc: 'Disponível para freelance na Roblox. Baseado em Toledo, Paraná.',
    contact_hint: 'Ao entrar em contato, inclua uma visão geral do projeto, os sistemas necessários e o prazo esperado. Isso ajuda bastante no escopo.',
    lbl_email: 'E-mail',
    hint_email: 'Para propostas detalhadas, orçamentos e arquivos',
    btn_send_email: 'Enviar e-mail',
    lbl_discord: 'Discord',
    hint_discord: 'Preferido para propostas de projeto',
    btn_add: 'Adicionar',
    lbl_roblox: 'Roblox',
    hint_roblox: 'Meu perfil na plataforma',
    btn_view_profile: 'Ver perfil'
  },
  en: {
    nav_systems: 'Systems',
    nav_ui: 'UI',
    nav_contact: 'Contact',
    badge_open: 'Open to new projects',
    hero_role: 'Roblox Developer.',
    hero_desc: '2 years building complete experiences in Roblox Studio: scripts, systems, UI and everything your game needs. Custom solutions for every project.',
    btn_hire: 'Hire me',
    btn_works: 'See works',
    card_available: 'Available for work',
    card_exp: 'Years of experience',
    card_systems: 'Systems in portfolio',
    card_response: 'Response time',
    sec_01: '01 / works',
    sec_systems: 'Systems',
    sec_systems_sub: 'Systems I built in Roblox Studio, recorded in live testing.',
    sys_teleport_desc: 'Matchmaking system that builds the queue, waits for the required players and teleports them together into a dedicated match server. The interface shows search status and queue in real time, with an option to cancel.',
    sys_combat_title: 'Combat System',
    sys_combat_desc: 'Melee combat with a three-variation punch combo chained together. The character sprints and dashes, with health and stamina bars driving the cost of each action.',
    tag_matchmaking: 'Matchmaking',
    tag_queue: 'Player queue',
    tag_reserved: 'Dedicated server',
    tag_combo: '3-hit combo',
    tag_sprint: 'Sprint',
    tag_hit: 'Hit detection',
    sec_02: '02 / interface',
    sec_ui: 'UI & Art',
    sec_ui_sub: 'Interfaces and visual assets I created for Roblox games.',
    ui_passes: 'Passes & VIP Shop',
    ui_passes_note: 'Monetization menu with GamePasses, bundle pack and monthly subscription.',
    ui_slot: 'Item Slot — Gold',
    ui_slot_note: 'Inventory frame for high-rarity items.',
    ui_emblems: 'Military Emblems',
    ui_emblems_note: 'Division insignia set for a rank system.',
    ui_icon: 'Game Icon',
    ui_icon_note: 'Cover art for the platform listing.',
    aria_expand: 'Expand video',
    aria_close: 'Close',
    sec_03: '03 / contact',
    contact_title: 'Let\'s build',
    contact_title_2: 'something.',
    contact_desc: 'Available for Roblox freelance work. Based in Toledo, Paraná, Brazil.',
    contact_hint: 'When reaching out, include a project overview, required systems and expected deadline. This helps a lot with scoping.',
    lbl_email: 'Email',
    hint_email: 'For detailed proposals, quotes and files',
    btn_send_email: 'Send email',
    lbl_discord: 'Discord',
    hint_discord: 'Preferred for project proposals',
    btn_add: 'Add',
    lbl_roblox: 'Roblox',
    hint_roblox: 'My profile on the platform',
    btn_view_profile: 'View profile'
  }
};

// Idioma padrão pelo navegador: português só para quem fala português, inglês para o resto.
// Escolha manual (localStorage) sempre tem prioridade.
function detectLanguage() {
  const saved = localStorage.getItem('lang');
  if (saved === 'pt' || saved === 'en') return saved;

  const tags = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || 'en'];

  return tags.some(tag => String(tag).toLowerCase().startsWith('pt')) ? 'pt' : 'en';
}

let currentLang = detectLanguage();

function applyLanguage(lang, persist = true) {
  currentLang = lang;
  if (persist) localStorage.setItem('lang', lang);
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  const dict = TRANSLATIONS[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (dict[key]) el.setAttribute('aria-label', dict[key]);
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// ============ RELÓGIO ============
function updateClock() {
  const clockEl = document.getElementById('clock');
  if (!clockEl) return;

  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const toledo = new Date(utc + -3 * 3600000);

  const h = String(toledo.getHours()).padStart(2, '0');
  const m = String(toledo.getMinutes()).padStart(2, '0');
  const s = String(toledo.getSeconds()).padStart(2, '0');

  clockEl.textContent = `${h}:${m}:${s}`;
}

setInterval(updateClock, 1000);
updateClock();

// ============ VÍDEOS DOS SISTEMAS ============
// Só carrega e toca quando o card entra na tela; pausa ao sair para não gastar banda.
function setupSystemVideos() {
  const videos = document.querySelectorAll('.system-video');
  if (!videos.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Guarda quais vídeos estão na tela para poder retomar depois.
  const visible = new Set();

  // play() é assíncrono: pausar antes dele resolver dispara AbortError e o vídeo
  // volta a tocar sozinho. Encadear as chamadas evita a corrida.
  function play(video) {
    video.pending = Promise.resolve(video.pending)
      .then(() => video.play())
      .catch(() => {}); // autoplay bloqueado (ex.: aba em background): fica no poster
  }

  function pause(video) {
    video.pending = Promise.resolve(video.pending)
      .then(() => video.pause())
      .catch(() => {});
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const video = entry.target;
      if (entry.isIntersecting) {
        visible.add(video);
        play(video);
      } else {
        visible.delete(video);
        pause(video);
      }
    });
  }, { threshold: 0.35 });

  videos.forEach(video => observer.observe(video));

  // O navegador pausa vídeo mudo quando a aba vai para segundo plano e o observer
  // não dispara de novo na volta — sem isso o vídeo ficaria congelado no lugar.
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) return;
    visible.forEach(video => {
      if (video.paused) play(video);
    });
  });
}

// ============ LIGHTBOX ============
function setupLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lbVideo = document.getElementById('lightbox-video');
  const lbImg = document.getElementById('lightbox-img');
  const lbClose = document.getElementById('lightbox-close');
  if (!lightbox) return;

  function open(setup) {
    lbVideo.hidden = true;
    lbImg.hidden = true;
    setup();
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function close() {
    lightbox.hidden = true;
    lbVideo.pause();
    lbVideo.removeAttribute('src');
    lbVideo.load();
    lbImg.removeAttribute('src');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.system-expand').forEach(btn => {
    btn.addEventListener('click', () => {
      const video = btn.closest('.system-media').querySelector('.system-video');
      open(() => {
        lbVideo.src = video.currentSrc || video.src;
        lbVideo.hidden = false;
        lbVideo.play().catch(() => {});
      });
    });
  });

  document.querySelectorAll('.ui-card').forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      if (!img) return;
      open(() => {
        lbImg.src = img.src;
        lbImg.alt = img.alt;
        lbImg.hidden = false;
      });
    });
  });

  lbClose.addEventListener('click', close);

  // Clicar no fundo fecha; clicar no vídeo/imagem não.
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) close();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !lightbox.hidden) close();
  });
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });

  // Na primeira visita não grava nada: o idioma segue o navegador até o visitante escolher.
  applyLanguage(currentLang, localStorage.getItem('lang') !== null);

  setupSystemVideos();
  setupLightbox();
});
