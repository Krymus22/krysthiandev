# Portfólio - Krysthian

Site de portfólio com integração em tempo real à API do Roblox.

## 🚀 Como hospedar no GitHub Pages

### 1. Criar repositório no GitHub
- Acesse [github.com](https://github.com)
- Clique em **New repository**
- Nome sugerido: `krysthian-portfolio` (ou qualquer outro)
- Marque como **Public**
- Clique em **Create repository**

### 2. Subir os arquivos
Você pode fazer pelo site mesmo:
- Na página do repositório, clique em **"uploading an existing file"**
- Arraste os 3 arquivos: `index.html`, `style.css`, `script.js`
- Clique em **Commit changes**

### 3. Ativar GitHub Pages
- Vá em **Settings** (do repositório)
- Menu lateral: **Pages**
- Em **Source**, selecione: `Deploy from a branch`
- Branch: `main` / `(root)`
- Clique em **Save**

Em 1-2 minutos, seu site estará no ar em:
```
https://SEU_USUARIO.github.io/NOME_DO_REPO/
```

## 🔧 Como atualizar

Toda vez que quiser mudar algo:
1. Edite os arquivos
2. Faça commit no GitHub (pelo site ou Git)
3. Em ~1 minuto, o site atualiza automaticamente

## 📝 O que cada arquivo faz

- **index.html** — estrutura do site
- **style.css** — todo o visual (cores, layout, animações)
- **script.js** — busca dados da API do Roblox (players online, visitas)

## 🎮 API do Roblox

O site busca em tempo real:
- Quantos jogadores estão jogando agora
- Total de visitas do jogo
- Thumbnail oficial do jogo

Atualiza a cada 30 segundos. Usa o proxy gratuito `corsproxy.io` pra contornar o CORS.

## 🎨 Personalização rápida

Para mudar a cor de destaque, edite `style.css`:
```css
:root {
  --color-accent: #a855f7;  /* Roxo atual */
  --color-accent-glow: rgba(168, 85, 247, 0.35);
}
```

Para adicionar mais jogos, copie o bloco `.project-card` em `index.html` e adicione lógica equivalente em `script.js`.
