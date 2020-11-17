//arquivo criado para carregar as imagens e sons utilizados no jogo
function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png'); //informando o local onde o arquivo de imagem do cenário está
  imagemGameOver = loadImage('imagens/assets/game-over.png'); //informando o local onde o arquivo de imagem game over está
  imagemPersonagem = loadImage('imagens/personagem/correndo.png'); //informando o local onde o arquivo de imagem da personagem está, bruxa
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png'); //informando o local onde o arquivo de imagem do inimigo está, gotinha
  imagemInimigoTroll = loadImage('imagens/inimigos/troll.png'); //informando o local onde o arquivo de imagem do inimigo está, troll
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png'); //informando o local onde o arquivo de imagem do inimigo está, gotinha voadora
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png'); //informando o local onde o arquivo de imagem da tela inicial está
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf'); //informando o local onde o arquivo de fonte da tela inicial está
  imagemVida = loadImage('imagens/assets/coracao.png'); //informando o local onde o arquivo de imagem da vida está
  
  somDoJogo = loadSound('sons/trilha_jogo.mp3'); //informando o local onde o arquivo de som do jogo está, trilha sonora
  somPulo = loadSound('sons/somPulo.mp3'); //informando o local onde o arquivo de som do pulo da personagem está
  
  fita = loadJSON('fita/fita.json'); //informando o local onde o arquivo de fita.json está
}