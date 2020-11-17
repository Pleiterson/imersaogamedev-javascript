class Pontuacao {
  constructor() {
    this.pontos = 0; //sempre que iniciar o jogo, a pontuação será zero
  }

  //método que exibe a pontuação na tela
  exibe() {
    textAlign(RIGHT); //alinha a pontuação um pouco para a direita
    fill('#fff'); //define a cor da pontuação a ser exibida na tela
    textSize(50); //define o tamanho da fonte da pontuação na tela
    text(parseInt(this.pontos), width - 30, 50); //os demais parâmetros são as coordenadas de exibição da pontuação na tela. Função "parseInt" deixa o contador da pontuação em números inteiros
  }

  //método que calcula a pontuação (score) do gamer
  calculaScore() {
    this.pontos = this.pontos + 0.2;
  }
}