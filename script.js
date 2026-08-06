// ============ TRADUÇÕES ============
const TRANSLATIONS = {
  pt: {
    nav_games: 'Jogos',
    nav_systems: 'Sistemas',
    nav_ui: 'UI',
    nav_contact: 'Contato',
    badge_open: 'Aberto a novos projetos',
    hero_role: 'Desenvolvedor Roblox.',
    hero_desc: 'Mais de 2 anos criando experiências completas no Roblox Studio: scripts, sistemas, UI e tudo que seu jogo precisar. Soluções personalizadas para cada projeto.',
    btn_hire: 'Me contratar',
    btn_works: 'Ver trabalhos',
    card_available: 'Disponível para trabalho',
    card_exp: 'Anos de experiência',
    card_games_wip: 'Jogos em desenvolvimento',
    card_systems: 'Sistemas no portfólio',
    card_response: 'Tempo de resposta',
    sec_01: '01 / jogos',
    sec_games: 'Em desenvolvimento',
    sec_games_sub: 'Jogos que estou construindo agora. Ainda não publicados.',
    cover_soon: 'Capa em breve',
    status_wip: 'Em desenvolvimento',
    game_fighters_genre: 'Anime fighters · Gacha e progressão',
    game_fighters_desc: 'Anime fighters com o elenco inteiro trocado por brainrots: os lutadores invocados, os NPCs e os chefes. O jogador invoca brainrots aleatórios, monta e treina a equipe e avança por ilhas, comprando o acesso à seguinte ao juntar dinheiro suficiente.',
    tag_gacha: 'Sistema gacha',
    tag_worlds: 'Progressão por ilhas',
    tag_bosses: 'Chefes',
    tag_team: 'Equipe de lutadores',
    tag_grind: 'Farm e evolução',
    game_amazonia_gloss: '', // o nome já está em português; nada a explicar
    game_amazonia_genre: 'Roube um brainrot · PvP e renda passiva',
    game_amazonia_desc: 'Releitura do gênero com fauna amazônica no lugar dos memes. As criaturas da base geram renda por segundo, e os jogadores invadem bases rivais para roubar as mais valiosas enquanto defendem a própria com travas e armadilhas.',
    tag_income: 'Renda passiva',
    tag_raid: 'Invasão de base',
    tag_defense: 'Defesa e armadilhas',
    tag_mutations: 'Mutações',
    tag_rebirth: 'Renascimento',
    sec_02: '02 / trabalhos',
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
    sec_03: '03 / interface',
    sec_ui: 'UI & Arte',
    sec_ui_sub: 'Interfaces e assets visuais que criei para jogos na Roblox.',
    ui_passes: 'Loja de Passes & VIP',
    ui_passes_note: 'Menu de monetização com GamePasses, pacote múltiplo e assinatura mensal.',
    ui_slot: 'Slot de Item Dourado',
    ui_slot_note: 'Moldura de inventário para itens de raridade alta.',
    ui_emblems: 'Emblemas Militares',
    ui_emblems_note: 'Conjunto de insígnias de divisão para sistema de patentes.',
    ui_icon: 'Ícone de Jogo',
    ui_icon_note: 'Arte quadrada para a miniatura de busca e a página do jogo na Roblox.',
    aria_expand: 'Expandir vídeo',
    aria_close: 'Fechar',
    aria_play: 'Reproduzir',
    aria_pause: 'Pausar',
    aria_seek: 'Posição do vídeo',
    sec_04: '04 / contato',
    contact_title: 'Vamos criar',
    contact_title_2: 'algo.',
    contact_desc: 'Disponível para freelance na Roblox. Baseado em Toledo, Paraná.',
    contact_hint: 'Ao entrar em contato, inclua uma visão geral do projeto, os sistemas necessários e o prazo esperado. Isso ajuda bastante no escopo.',
    lbl_email: 'E-mail',
    hint_email: 'Canal alternativo. Para propostas, prefira o Discord',
    btn_send_email: 'Enviar e-mail',
    lbl_discord: 'Discord',
    hint_discord: 'Preferido para propostas de projeto',
    btn_add: 'Adicionar',
    lbl_roblox: 'Roblox',
    hint_roblox: 'Meu perfil na plataforma',
    btn_view_profile: 'Ver perfil'
  },
  en: {
    nav_games: 'Games',
    nav_systems: 'Systems',
    nav_ui: 'UI',
    nav_contact: 'Contact',
    badge_open: 'Open to new projects',
    hero_role: 'Roblox Developer.',
    hero_desc: '2+ years building complete experiences in Roblox Studio: scripts, systems, UI and everything your game needs. Custom solutions for every project.',
    btn_hire: 'Hire me',
    btn_works: 'See works',
    card_available: 'Available for work',
    card_exp: 'Years of experience',
    card_games_wip: 'Games in development',
    card_systems: 'Systems in portfolio',
    card_response: 'Response time',
    sec_01: '01 / games',
    sec_games: 'In development',
    sec_games_sub: 'Games I am building right now. Not published yet.',
    cover_soon: 'Cover coming soon',
    status_wip: 'In development',
    game_fighters_genre: 'Anime fighters · Gacha and progression',
    game_fighters_desc: 'Anime fighters with the entire cast swapped for brainrots: the summoned fighters, the NPCs and the bosses. Players summon random brainrots, build and train a squad and progress through islands, buying access to the next one once they have saved enough money.',
    tag_gacha: 'Gacha system',
    tag_worlds: 'Island progression',
    tag_bosses: 'Bosses',
    tag_team: 'Fighter squad',
    tag_grind: 'Farming and upgrades',
    game_amazonia_gloss: '(Steal the Amazon)', // o título fica no original: é o nome do jogo
    game_amazonia_genre: 'Steal a brainrot · PvP and passive income',
    game_amazonia_desc: 'A take on the genre with Amazon rainforest wildlife in place of the memes. Creatures in your base generate income per second, and players raid rival bases to steal the most valuable ones while defending their own with locks and traps.',
    tag_income: 'Passive income',
    tag_raid: 'Base raiding',
    tag_defense: 'Defense and traps',
    tag_mutations: 'Mutations',
    tag_rebirth: 'Rebirth',
    sec_02: '02 / works',
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
    sec_03: '03 / interface',
    sec_ui: 'UI & Art',
    sec_ui_sub: 'Interfaces and visual assets I created for Roblox games.',
    ui_passes: 'Passes & VIP Shop',
    ui_passes_note: 'Monetization menu with GamePasses, bundle pack and monthly subscription.',
    ui_slot: 'Gold Item Slot',
    ui_slot_note: 'Inventory frame for high-rarity items.',
    ui_emblems: 'Military Emblems',
    ui_emblems_note: 'Division insignia set for a rank system.',
    ui_icon: 'Game Icon',
    ui_icon_note: 'Square art for the search thumbnail and game page on Roblox.',
    aria_expand: 'Expand video',
    aria_close: 'Close',
    aria_play: 'Play',
    aria_pause: 'Pause',
    aria_seek: 'Video position',
    sec_04: '04 / contact',
    contact_title: 'Let\'s build',
    contact_title_2: 'something.',
    contact_desc: 'Available for Roblox freelance work. Based in Toledo, Paraná, Brazil.',
    contact_hint: 'When reaching out, include a project overview, required systems and expected deadline. This helps a lot with scoping.',
    lbl_email: 'Email',
    hint_email: 'Alternative channel. For proposals, prefer Discord',
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

function t(key) {
  const dict = TRANSLATIONS[currentLang] || {};
  return dict[key] !== undefined ? dict[key] : key;
}

// Rótulos que dependem do estado (ex.: pausar/reproduzir) não podem sair do
// HTML: precisam ser reescritos quando o idioma muda.
const labelSyncers = [];

function applyLanguage(lang, persist = true) {
  currentLang = lang;
  if (persist) localStorage.setItem('lang', lang);
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  const dict = TRANSLATIONS[lang];

  // Compara com undefined em vez de testar o valor: string vazia é uma tradução
  // válida (ex.: glosa que só existe em inglês) e precisa limpar o texto.
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (dict[key]) el.setAttribute('aria-label', dict[key]);
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  labelSyncers.forEach(sync => sync());
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
// Tocam sozinhos ao entrar na tela e pausam ao sair, para não gastar banda.
// A barra de controle permite pausar e navegar pelos segundos.
function setupSystemVideos() {
  const videos = [...document.querySelectorAll('.system-video')];
  if (!videos.length) return;

  // Vídeos que o visitante pausou na mão. Nunca voltam a tocar sozinhos:
  // se o autoplay ignorasse isso, rolar a página desfaria a escolha dele.
  const heldPaused = new Set();
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

  function fmt(seconds) {
    const s = isFinite(seconds) && seconds > 0 ? seconds : 0;
    return Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0');
  }

  videos.forEach(video => {
    const media = video.closest('.system-media');
    const playBtn = media.querySelector('.vc-play');
    const track = media.querySelector('.vc-track');
    const fill = media.querySelector('.vc-fill');
    const timeEl = media.querySelector('.vc-time');

    // preload="none" adia os metadados, então a duração vem do HTML para o
    // relógio não nascer zerado.
    const declared = parseFloat(video.dataset.duration) || 0;
    const duration = () => (isFinite(video.duration) && video.duration > 0) ? video.duration : declared;

    let scrubbing = false;
    let pendingSeek = null; // posição pedida antes dos metadados carregarem

    function paint() {
      const dur = duration();
      const at = pendingSeek !== null ? pendingSeek : video.currentTime;
      const pct = dur ? Math.min(100, Math.max(0, (at / dur) * 100)) : 0;
      fill.style.width = pct + '%';
      timeEl.textContent = fmt(at) + ' / ' + fmt(dur);
      track.setAttribute('aria-valuenow', Math.round(pct));
      track.setAttribute('aria-valuetext', fmt(at) + ' / ' + fmt(dur));
    }

    function reflect() {
      playBtn.classList.toggle('is-paused', video.paused);
      playBtn.setAttribute('aria-label', t(video.paused ? 'aria_play' : 'aria_pause'));
    }
    labelSyncers.push(reflect);

    function seekTo(seconds) {
      const dur = duration();
      if (!dur) return;
      const target = Math.min(dur, Math.max(0, seconds));

      // Sem metadados carregados, atribuir currentTime não pega. Guarda a posição
      // e aplica assim que o vídeo souber a própria duração.
      if (video.readyState === 0) {
        pendingSeek = target;
        video.preload = 'metadata';
        video.load();
      } else {
        pendingSeek = null;
        video.currentTime = target;
      }
      paint();
    }

    playBtn.addEventListener('click', () => {
      if (video.paused) {
        heldPaused.delete(video);
        play(video);
      } else {
        heldPaused.add(video);
        pause(video);
      }
    });

    function seekFromPointer(clientX) {
      const box = track.getBoundingClientRect();
      if (!box.width) return;
      seekTo(((clientX - box.left) / box.width) * duration());
    }

    track.addEventListener('pointerdown', e => {
      scrubbing = true;
      track.classList.add('is-scrubbing');
      track.setPointerCapture(e.pointerId);
      seekFromPointer(e.clientX);
      e.preventDefault();
    });

    track.addEventListener('pointermove', e => {
      if (scrubbing) seekFromPointer(e.clientX);
    });

    function endScrub(e) {
      if (!scrubbing) return;
      scrubbing = false;
      track.classList.remove('is-scrubbing');
      if (e.pointerId != null && track.hasPointerCapture(e.pointerId)) {
        track.releasePointerCapture(e.pointerId);
      }
    }
    track.addEventListener('pointerup', endScrub);
    track.addEventListener('pointercancel', endScrub);

    track.addEventListener('keydown', e => {
      const dur = duration();
      if (!dur) return;
      const step = e.shiftKey ? 1 : 5;
      if (e.key === 'ArrowLeft') seekTo(video.currentTime - step);
      else if (e.key === 'ArrowRight') seekTo(video.currentTime + step);
      else if (e.key === 'Home') seekTo(0);
      else if (e.key === 'End') seekTo(dur);
      else if (e.key === ' ' || e.key === 'Enter') playBtn.click();
      else return;
      e.preventDefault();
    });

    video.addEventListener('loadedmetadata', () => {
      if (pendingSeek !== null) {
        video.currentTime = pendingSeek;
        pendingSeek = null;
      }
      paint();
    });
    video.addEventListener('timeupdate', () => { if (!scrubbing) paint(); });
    video.addEventListener('play', reflect);
    video.addEventListener('pause', reflect);

    reflect();
    paint();
  });

  // Quem pediu menos animação recebe os controles, mas nada começa sozinho.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const video = entry.target;
      if (entry.isIntersecting) {
        visible.add(video);
        if (!heldPaused.has(video)) play(video);
      } else {
        visible.delete(video);
        pause(video);
      }
    });
  }, { threshold: 0.35 });

  videos.forEach(video => observer.observe(video));

  // O navegador pausa vídeo mudo quando a aba vai para segundo plano e o observer
  // não dispara de novo na volta: sem isso o vídeo ficaria congelado no lugar.
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) return;
    visible.forEach(video => {
      if (video.paused && !heldPaused.has(video)) play(video);
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
