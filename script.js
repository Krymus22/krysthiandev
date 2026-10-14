// ============ TRADUÇÕES ============
const TRANSLATIONS = {
  pt: {
    nav_games: 'Jogos',
    nav_systems: 'Sistemas',
    nav_ui: 'UI',
    nav_models: "3D",
    nav_anim: "Animação",
    sec_models: "Modelos e personagens",
    sec_models_sub: "Personagens, armas, itens e cenários feitos no Blender para jogos na Roblox. Clique em um card para ver o modelo girando.",
    mod_baus: 'Baús de Tesouro',
    mod_espadas: 'Espadas por Raridade',
    mod_bolas: 'Bolas de Captura',
    mod_pets: 'Pets por Raridade',
    mod_slimes: 'Evolução do Slime',
    mod_ak47: 'AK-47',
    mod_pistola: 'Pistola',
    mod_escopeta: 'Escopeta',
    mod_sniper: 'Sniper',
    mod_cerimonia: 'Kit Militar de Cerimônia',
    mod_medico: 'Kit Militar de Sobrevivência',
    mod_ugc: 'Acessórios UGC',
    mod_brasil: 'Orelhão, Pipoca e Banca',
    mod_tycoon: 'Peças de Tycoon',
    mod_roda: 'Roda Esportiva',
    mod_cidade: 'Mapa da Cidade Zumbi',
    mod_kai_laminas: 'Lâminas de Jade do Kai',
    mod_lobo: "Lobo de Fogo",
    mod_scooter: "Patinete Elétrico",
    mod_sobrevivencia: "Props de Sobrevivência",
    mod_cozinha: "Cozinha Low Poly",
    mod_ugc_rainbow: "Acessórios UGC Rainbow",
    mod_picaretas: "Picaretas",
    mod_salgadinho: "Salgadinho Krunzo",
    mod_ferramentas: 'Ferramentas de Fazenda',
    sec_anim: "Peças em movimento",
    sec_anim_sub: 'Animações feitas para os modelos: baús que abrem, slimes que pulam, uma linha de produção e itens em uso.',
    ani_bau: 'Baú Lendário Abrindo',
    ani_slimes: 'Slimes Pulando',
    ani_tycoon: 'Linha de Produção do Tycoon',
    ani_bandeira: 'Bandeira ao Vento',
    ani_campo: 'Kit de Sobrevivência em Uso',
    nav_contact: 'Contato',
    doc_desc: "Modelagem 3D e animação para jogos na Roblox. Personagens, armas, itens e cenários feitos no Blender.",
    doc_title: "Krysthian | Modelador 3D e animador Roblox",
    aria_tools: "Ferramentas",
    aria_sections: "Seções",
    flag_preferred: "Preferido",
    past_work: "Trabalho anterior",
    tools_label: "Ferramentas",
    stat_game: "Jogo no ar",
    stat_years: "Anos no Roblox",
    btn_discord: "Falar no Discord",
    hero_title: "Modelagem <span class=\"brick\">3D</span><br>e animação<br>para Roblox.",
    skip_link: "Pular para o conteúdo",
    badge_open: 'Aceitando novos projetos',
    hero_desc: "Modelos, personagens e animações para jogos na Roblox. Antes de me dedicar ao 3D, trabalhei como programador e UI maker.",
    btn_works: "Ver trabalhos",
    card_response: "Tempo de resposta",
    sec_games: "Jogo que programei",
    status_wip: 'Em desenvolvimento',
    status_beta: 'Beta aberto',
    status_live: 'Publicado',
    play_roblox: 'Jogar na Roblox',
    game_fighters_genre: 'Anime fighters · Gacha e progressão',
    game_fighters_role: "Meu papel: programação, como sócio do jogo",
    game_fighters_desc: 'Anime fighters com o elenco inteiro trocado por brainrots: os lutadores invocados, os NPCs e os chefes. O jogador invoca brainrots aleatórios, monta e treina a equipe e avança por ilhas, comprando o acesso à seguinte ao juntar dinheiro suficiente.',
    tag_gacha: 'Sistema gacha',
    tag_worlds: 'Progressão por ilhas',
    tag_bosses: 'Chefes',
    tag_team: 'Equipe de lutadores',
    tag_grind: 'Farm e evolução',
    game_amazonia_gloss: '', // o nome já está em português; nada a explicar
    game_amazonia_genre: 'Roube um brainrot · PvP e renda passiva',
    game_amazonia_desc: 'Multiplayer competitivo ambientado na Amazônia. O jogador expande o território, coleciona criaturas que vão da fauna comum a seres lendários e gera renda com o acervo. Invade bases rivais para roubar as peças mais valiosas e defende a própria, com mutações raras e Lucky Blocks escondidos pelo mapa.',
    tag_income: 'Renda passiva',
    tag_raid: 'Invasão de base',
    tag_territory: 'Defesa de território',
    tag_mutations: 'Mutações',
    tag_collection: 'Coleção de criaturas',
    sec_systems: "Sistemas em ação",
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
    sys_grab_title: 'Sistema de Agarrar e Arremessar',
    sys_grab_desc: 'Física de manipulação de objetos: o jogador agarra, ajusta a distância, gira e arremessa. O HUD mostra o peso e a distância do item segurado, e uma loja de melhorias amplia alcance, força de agarre, potência do arremesso e mobilidade, pagas com as moedas do jogo.',
    tag_physics: 'Física',
    tag_grab: 'Agarrar e arremessar',
    tag_shop: 'Loja de melhorias',
    tag_progress: 'Progressão',
    tag_hud: 'HUD dinâmico',
    sys_vehicle_title: 'Sistema de Veículo e Trânsito',
    sys_vehicle_desc: 'Direção com câmbio, controle de tração, ABS e drift alternáveis, com painel de rotação e velocidade. Um sistema de trânsito acompanha o limite da via e aplica pontos e multas por infração, com menus de concessionária, garagem, DMV e histórico de autuações.',
    tag_vehicle: 'Física de veículo',
    tag_gearbox: 'Câmbio e tração',
    tag_speedlimit: 'Limite de velocidade',
    tag_fines: 'Pontos e multas',
    tag_dealership: 'Concessionária e garagem',
    sec_ui: 'UI & Arte',
    sec_ui_sub: 'Interfaces e assets visuais que criei para jogos na Roblox.',
    ui_titles: 'Títulos',
    ui_titles_note: 'Lista de títulos com três estados: bloqueado, disponível para equipar e equipado. Cada linha mostra a condição de desbloqueio.',
    ui_inventory: 'Inventário de Lutadores',
    ui_inventory_note: 'Tela de gerenciamento com abas de filtro, contagem de equipados e molduras por raridade.',
    ui_passes: 'Loja de Passes & VIP',
    ui_passes_note: 'Menu de monetização com GamePasses, pacote múltiplo e assinatura mensal.',
    ui_slot: 'Slot de Item Dourado',
    ui_slot_note: 'Moldura de inventário para itens de raridade alta.',
    aria_expand: 'Expandir vídeo',
    aria_spin: 'Ver girando',
    aria_close: 'Fechar',
    aria_play: 'Reproduzir',
    aria_pause: 'Pausar',
    aria_seek: 'Posição do vídeo',
    contact_title: 'Vamos criar',
    contact_title_2: 'algo.',
    contact_desc: "Disponível para modelagem 3D e animação. Baseado em Toledo, Paraná.",
    contact_hint: "Ao entrar em contato, conte o que precisa ser modelado ou animado, o estilo desejado e o prazo. Isso ajuda a responder mais rápido.",
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
    nav_models: "3D",
    nav_anim: "Animation",
    sec_models: "Models and characters",
    sec_models_sub: "Characters, weapons, items and environments made in Blender for Roblox games. Click a card to see the model turning.",
    mod_baus: 'Treasure Chests',
    mod_espadas: 'Swords by Rarity',
    mod_bolas: 'Capture Balls',
    mod_pets: 'Pets by Rarity',
    mod_slimes: 'Slime Evolution',
    mod_ak47: 'AK-47',
    mod_pistola: 'Pistol',
    mod_escopeta: 'Shotgun',
    mod_sniper: 'Sniper',
    mod_cerimonia: 'Military Ceremony Kit',
    mod_medico: 'Military Survival Kit',
    mod_ugc: 'UGC Accessories',
    mod_brasil: 'Payphone, Popcorn Cart and Newsstand',
    mod_tycoon: 'Tycoon Parts',
    mod_roda: 'Sports Wheel',
    mod_cidade: 'Zombie Town Map',
    mod_kai_laminas: "Kai's Jade Blades",
    mod_lobo: "Fire Wolf",
    mod_scooter: "Electric Scooter",
    mod_sobrevivencia: "Survival Props",
    mod_cozinha: "Low Poly Kitchen",
    mod_ugc_rainbow: "Rainbow UGC Accessories",
    mod_picaretas: "Pickaxes",
    mod_salgadinho: "Krunzo Snack Bag",
    mod_ferramentas: 'Farm Tools',
    sec_anim: "Pieces in motion",
    sec_anim_sub: 'Animations made for the models: chests that open, slimes that hop, a production line and items in use.',
    ani_bau: 'Legendary Chest Opening',
    ani_slimes: 'Slimes Hopping',
    ani_tycoon: 'Tycoon Production Line',
    ani_bandeira: 'Flag in the Wind',
    ani_campo: 'Survival Kit in Use',
    nav_contact: 'Contact',
    doc_desc: "3D modeling and animation for Roblox games. Characters, weapons, items and environments built in Blender.",
    doc_title: "Krysthian | Roblox 3D Artist and Animator",
    aria_tools: "Tools",
    aria_sections: "Sections",
    flag_preferred: "Preferred",
    past_work: "Earlier work",
    tools_label: "Tools",
    stat_game: "Live game",
    stat_years: "Years on Roblox",
    btn_discord: "Talk on Discord",
    hero_title: "<span class=\"brick\">3D</span> modeling<br>and animation<br>for Roblox.",
    skip_link: "Skip to content",
    badge_open: 'Taking new projects',
    hero_desc: "Models, characters and animations for Roblox games. Before moving into 3D, I worked as a programmer and UI maker.",
    btn_works: "See the work",
    card_response: "Response time",
    sec_games: "Game I programmed",
    status_wip: 'In development',
    status_beta: 'Open beta',
    status_live: 'Published',
    play_roblox: 'Play on Roblox',
    game_fighters_genre: 'Anime fighters · Gacha and progression',
    game_fighters_role: "My role: programming, as a partner in the game",
    game_fighters_desc: 'Anime fighters with the entire cast swapped for brainrots: the summoned fighters, the NPCs and the bosses. Players summon random brainrots, build and train a squad and progress through islands, buying access to the next one once they have saved enough money.',
    tag_gacha: 'Gacha system',
    tag_worlds: 'Island progression',
    tag_bosses: 'Bosses',
    tag_team: 'Fighter squad',
    tag_grind: 'Farming and upgrades',
    game_amazonia_gloss: '(Steal the Amazon)', // o título fica no original: é o nome do jogo
    game_amazonia_genre: 'Steal a brainrot · PvP and passive income',
    game_amazonia_desc: 'Competitive multiplayer set in the Amazon rainforest. Players expand their territory, collect creatures ranging from common wildlife to legendary beings, and earn from the collection. Raid rival bases to steal the most valuable pieces and defend your own, with rare mutations and Lucky Blocks hidden across the map.',
    tag_income: 'Passive income',
    tag_raid: 'Base raiding',
    tag_territory: 'Territory defense',
    tag_mutations: 'Mutations',
    tag_collection: 'Creature collection',
    sec_systems: "Systems in action",
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
    sys_grab_title: 'Grab and Throw System',
    sys_grab_desc: 'Object handling physics: the player grabs, adjusts distance, rotates and throws. The HUD shows the weight and distance of the held item, and an upgrade shop extends grab range, grab strength, fling power and mobility, paid with in-game coins.',
    tag_physics: 'Physics',
    tag_grab: 'Grab and throw',
    tag_shop: 'Upgrade shop',
    tag_progress: 'Progression',
    tag_hud: 'Dynamic HUD',
    sys_vehicle_title: 'Vehicle and Traffic System',
    sys_vehicle_desc: 'Driving with a gearbox and toggleable traction control, ABS and drift, plus an RPM and speed dashboard. A traffic system tracks the road speed limit and issues demerit points and fines for violations, with dealership, garage, DMV and citation history menus.',
    tag_vehicle: 'Vehicle physics',
    tag_gearbox: 'Gearbox and traction',
    tag_speedlimit: 'Speed limits',
    tag_fines: 'Points and fines',
    tag_dealership: 'Dealership and garage',
    sec_ui: 'UI & Art',
    sec_ui_sub: 'Interfaces and visual assets I created for Roblox games.',
    ui_titles: 'Titles',
    ui_titles_note: 'Title list with three states: locked, available to equip and equipped. Each row shows the unlock condition.',
    ui_inventory: 'Fighter Inventory',
    ui_inventory_note: 'Management screen with filter tabs, equipped counter and rarity frames.',
    ui_passes: 'Passes & VIP Shop',
    ui_passes_note: 'Monetization menu with GamePasses, bundle pack and monthly subscription.',
    ui_slot: 'Gold Item Slot',
    ui_slot_note: 'Inventory frame for high-rarity items.',
    aria_expand: 'Expand video',
    aria_spin: 'See it turning',
    aria_close: 'Close',
    aria_play: 'Play',
    aria_pause: 'Pause',
    aria_seek: 'Video position',
    contact_title: 'Let\'s build',
    contact_title_2: 'something.',
    contact_desc: "Available for 3D modeling and animation. Based in Toledo, Paraná, Brazil.",
    contact_hint: "When you get in touch, say what needs to be modeled or animated, the style you want and the deadline. It helps me reply faster.",
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

  // Textos com marcação própria (o 3D dourado do título). São strings fixas deste arquivo.
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  if (dict.doc_title) document.title = dict.doc_title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict.doc_desc) metaDesc.setAttribute('content', dict.doc_desc);

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


// ============ MODELAGEM E ANIMACAO ============
// Cards sem barra de controle: tocam ao entrar na tela e abrem no lightbox.
function setupReels() {
  const videos = [...document.querySelectorAll('.reel-video')];
  if (!videos.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const visible = new Set();

  // Uma fileira inteira entra na tela de uma vez. Comecar todas no mesmo quadro
  // trava a rolagem, entao as partidas saem em fila, uma a cada 70ms.
  const START_GAP = 70;
  let fila = 0;

  function play(video) {
    video.pending = Promise.resolve(video.pending).then(() => video.play()).catch(() => {});
  }

  function pause(video) {
    video.pending = Promise.resolve(video.pending).then(() => video.pause()).catch(() => {});
  }

  function playEscalonado(video) {
    const espera = fila * START_GAP;
    fila += 1;
    setTimeout(() => {
      fila = Math.max(0, fila - 1);
      if (visible.has(video)) play(video);
    }, espera);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const video = entry.target;
      if (entry.isIntersecting) {
        visible.add(video);
        playEscalonado(video);
      } else {
        visible.delete(video);
        pause(video);
      }
    });
  }, { threshold: 0.25 });

  videos.forEach(video => observer.observe(video));

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) return;
    visible.forEach(video => {
      if (video.paused) playEscalonado(video);
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

  document.querySelectorAll('.reel-card').forEach(card => {
    card.addEventListener('click', () => {
      const media = card.querySelector('.reel-video, .reel-still');
      if (!media) return;
      // o card de modelo e so uma imagem parada, o de animacao roda uma copia leve
      const cheio = media.dataset.hd || (media.tagName === 'VIDEO' ? media.currentSrc || media.src : '');
      if (!cheio) return;
      open(() => {
        lbVideo.src = cheio;
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

// ============ CABEÇALHO, ENTRADA E PARALLAX ============
function setupPageMotion() {
  const header = document.getElementById('header');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // No topo o cabeçalho é transparente sobre o cenário; ao rolar, vira sólido.
  function syncHeader() {
    header.classList.toggle('is-top', window.scrollY < 24);
  }
  syncHeader();
  window.addEventListener('scroll', syncHeader, { passive: true });

  if (reduced || !('IntersectionObserver' in window)) return;

  // Os blocos entram uma vez, em sequência curta dentro de cada grade.
  const alvos = document.querySelectorAll('.reveal, .reel-card, .system-card, .ui-card, .game-card, .contact-row');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  alvos.forEach(el => {
    const irmaos = [...el.parentElement.children].filter(n => n.matches('.reel-card, .system-card, .ui-card, .contact-row'));
    el.style.setProperty('--d', Math.min(irmaos.indexOf(el), 5) * 0.06 + 's');
    el.classList.add('will-reveal');
    observer.observe(el);
  });

  // O cenário do topo anda um pouco com o mouse, só em tela com ponteiro fino.
  const hero = document.querySelector('.hero');
  if (hero && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    hero.addEventListener('mousemove', e => {
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      hero.style.setProperty('--px', (-x * 18).toFixed(1) + 'px');
      hero.style.setProperty('--py', (-y * 12).toFixed(1) + 'px');
    });
    hero.addEventListener('mouseleave', () => {
      hero.style.setProperty('--px', '0px');
      hero.style.setProperty('--py', '0px');
    });
  }
}

// ============ LUZ DE PALCO ============
// A luz atras do site toma a cor e o lado da secao que ocupa o meio da tela (ver .stage-light).
function setupStageLight() {
  const sections = [...document.querySelectorAll('.section[id]')];
  if (!sections.length) return;
  const root = document.documentElement;

  function update() {
    const middle = window.innerHeight / 2;
    const current = sections.find(section => {
      const box = section.getBoundingClientRect();
      return box.top <= middle && box.bottom > middle;
    });
    root.dataset.light = current ? current.id : 'top';
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}

// ============ NAV ATIVA ============
function setupNavSpy() {
  const items = [...document.querySelectorAll('.nav-link[href^="#"]')]
    .map(link => ({ link, section: document.querySelector(link.getAttribute('href')) }))
    .filter(item => item.section);
  if (!items.length) return;

  // A secao conta como atual quando o topo dela passa da linha logo abaixo do header.
  const LINE = 120;

  function update() {
    let current = null;
    items.forEach(item => {
      if (item.section.getBoundingClientRect().top <= LINE) current = item;
    });
    // Contato e curto demais para chegar na linha, entao no fim da pagina ele vale.
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    if (atBottom) current = items[items.length - 1];

    items.forEach(item => {
      const isCurrent = item === current;
      item.link.classList.toggle('active', isCurrent);
      if (isCurrent) item.link.setAttribute('aria-current', 'true');
      else item.link.removeAttribute('aria-current');
    });
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });

  // Na primeira visita não grava nada: o idioma segue o navegador até o visitante escolher.
  applyLanguage(currentLang, localStorage.getItem('lang') !== null);

  setupSystemVideos();
  setupReels();
  setupLightbox();
  setupNavSpy();
  setupPageMotion();
  setupStageLight();
});
