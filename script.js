// ============ TRADUÇÕES ============
const TRANSLATIONS = {
  pt: {
    nav_projects: 'Projetos',
    nav_contact: 'Contato',
    badge_open: 'Aberto a novos projetos',
    hero_role: 'Desenvolvedor Roblox.',
    hero_desc: '2 anos criando experiências completas no Roblox Studio: scripts, sistemas, UI e tudo que seu jogo precisar. Soluções personalizadas para cada projeto.',
    btn_hire: 'Me contratar',
    btn_works: 'Ver trabalhos',
    card_available: 'Disponível para trabalho',
    card_exp: 'Anos de experiência',
    card_games: 'Jogos publicados',
    card_visits: 'Total de visitas',
    sec_01: '01 / trabalhos',
    sec_projects: 'Projetos',
    sec_projects_sub: 'Jogos que publiquei na Roblox.',
    live_loading: 'Carregando jogadores online...',
    live_one: '1 jogador online agora',
    live_many: '{n} jogadores online agora',
    live_error: 'Não foi possível carregar os jogadores online',
    badge_owner: 'Dono',
    mini_visits: 'Visitas',
    mini_playing: 'Jogando agora',
    play_roblox: 'Jogar na Roblox',
    sec_02: '02 / contato',
    contact_title: 'Vamos criar',
    contact_title_2: 'algo.',
    contact_desc: 'Disponível para freelance na Roblox. Baseado em Toledo, Paraná.',
    contact_hint: 'Ao entrar em contato, inclua uma visão geral do projeto, os sistemas necessários e o prazo esperado. Isso ajuda bastante no escopo.',
    lbl_email: 'E-mail',
    hint_email: 'Preferido para propostas de projeto',
    btn_send_email: 'Enviar e-mail',
    lbl_discord: 'Discord',
    hint_discord: 'Dúvidas rápidas e disponibilidade',
    btn_add: 'Adicionar',
    lbl_roblox: 'Roblox',
    hint_roblox: 'Jogos publicados e estatísticas',
    btn_view_profile: 'Ver perfil'
  },
  en: {
    nav_projects: 'Projects',
    nav_contact: 'Contact',
    badge_open: 'Open to new projects',
    hero_role: 'Roblox Developer.',
    hero_desc: '2 years building complete experiences in Roblox Studio: scripts, systems, UI and everything your game needs. Custom solutions for every project.',
    btn_hire: 'Hire me',
    btn_works: 'See works',
    card_available: 'Available for work',
    card_exp: 'Years of experience',
    card_games: 'Published games',
    card_visits: 'Total visits',
    sec_01: '01 / works',
    sec_projects: 'Projects',
    sec_projects_sub: 'Games I published on Roblox.',
    live_loading: 'Loading online players...',
    live_one: '1 player online now',
    live_many: '{n} players online now',
    live_error: 'Could not load online players',
    badge_owner: 'Owner',
    mini_visits: 'Visits',
    mini_playing: 'Playing now',
    play_roblox: 'Play on Roblox',
    sec_02: '02 / contact',
    contact_title: 'Let\'s build',
    contact_title_2: 'something.',
    contact_desc: 'Available for Roblox freelance work. Based in Toledo, Paraná, Brazil.',
    contact_hint: 'When reaching out, include a project overview, required systems and expected deadline. This helps a lot with scoping.',
    lbl_email: 'Email',
    hint_email: 'Preferred for project proposals',
    btn_send_email: 'Send email',
    lbl_discord: 'Discord',
    hint_discord: 'Quick questions and availability',
    btn_add: 'Add',
    lbl_roblox: 'Roblox',
    hint_roblox: 'Published games and stats',
    btn_view_profile: 'View profile'
  }
};

let currentLang = localStorage.getItem('lang') || 'pt';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  const dict = TRANSLATIONS[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  updateGameData();
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });
  applyLanguage(currentLang);
});

function t(key) {
  return TRANSLATIONS[currentLang][key] || key;
}


// ============ CONFIGURAÇÃO ============
const PLACE_ID = '140401030463294';

// Nosso backend (Cloudflare Worker) — cacheia dados do Roblox a cada 1min
const API_URL = 'https://krysthiandev-api.krysthianbar7.workers.dev/';

// ============ FORMATADORES ============
function formatNumber(num) {
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + 'M';
  if (num >= 1_000) return (num / 1_000).toFixed(1).replace('.0', '') + 'K';
  return num.toString();
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

// ============ FETCH DO WORKER ============
async function fetchGameData() {
  try {
    const r = await fetch(API_URL);
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return await r.json();
  } catch (err) {
    console.error('Erro ao buscar dados:', err);
    return null;
  }
}

// ============ ATUALIZAR UI ============
async function updateGameData() {
  const liveText = document.getElementById('live-text');
  const data = await fetchGameData();

  if (!data || data.error) {
    liveText.textContent = t('live_error');
    return;
  }

  const { visits = 0, playing = 0, name = 'Simulador de Pneu', thumbUrl } = data;

  document.getElementById(`game-title-${PLACE_ID}`).textContent = name;
  document.getElementById(`game-visits-${PLACE_ID}`).textContent = formatNumber(visits);
  document.getElementById(`game-playing-${PLACE_ID}`).textContent = formatNumber(playing);
  document.getElementById('total-visits').textContent = formatNumber(visits);

  const playerText = playing === 1
    ? t('live_one')
    : t('live_many').replace('{n}', formatNumber(playing));
  liveText.textContent = playerText;

  if (thumbUrl) {
    document.getElementById(`game-thumb-${PLACE_ID}`).src = thumbUrl;
  }
}

// Carregar imediatamente
updateGameData();

// Atualizar a cada 60s (o Worker atualiza o cache a cada 1min, então faz sentido)
setInterval(updateGameData, 60000);
