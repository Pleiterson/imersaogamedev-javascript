//sketch é o gerenciador de estados do jogo
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  somDoJogo.loop(); //o som de trilha do jogo fica em loop quando inicia o jogo
  jogo = new Jogo(); //declarando a classe Jogo para acessar seus métodos
  telaInicial = new TelaInicial(); //declarando a classe TelaInicial para acessar seus métodos
  botao = new Button('Iniciar', width/2, height/2); //declarando a classe Button para acessar o botão
  jogo.setup(); //chamando o método setup() da classe Jogo
  cenas = {jogo, telaInicial};
}

function keyPressed() {
  jogo.keyPressed(key); //chamando o método keyPressed() da classe Jogo
}

function draw() {
  cenas[cenaAtual].draw(); //chamado o objeto cenas declarados na linha 8
}