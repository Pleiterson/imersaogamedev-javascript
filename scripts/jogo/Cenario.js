class Cenario {
  //possui as informações para construir um cenário
  constructor(imagem, velocidade) {
    this.imagem = imagem;
    this.velocidade = velocidade;
    this.x1 = 0; //iniciando a imagem no zero
    this.x2 = width; //iniciando a imagens exatamente onde a outra termina
  }

  //método para exibir o fundo (background) na tela
  exibe() {
    image(this.imagem, this.x1, 0, width, height);
    image(this.imagem, this.x2, 0, width, height);
  }

  //método para movimentar o background na tela
  move() {
    this.x1 = this.x1 - this.velocidade;
    this.x2 = this.x2 - this.velocidade;

    if (this.x1 < -width) {
      this.x1 = width
    }

    if (this.x2 < -width) {
      this.x2 = width
    }
  }
}