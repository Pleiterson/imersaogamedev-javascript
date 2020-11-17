//classe de animação que servirá para todos os personagens do jogo
class Animacao {
  constructor(matrix, imagem, x, varY, largura, altura, largSprite, altSprite) {
    this.matrix = matrix; //matriz da imagem dos personagens
    this.imagem = imagem; //imagem dos personagens
    this.largura = largura; //largura do personagem na tela
    this.altura = altura; //altura do personagem na tela
    this.x = x; //posição, largura, da imagem na tela
    this.varY = varY; //variável apra centralizar todos os personagens em uma única linha rente ao chão
    this.y = height - this.altura - this.varY; //posição, altura, da imagem na tela
    this.largSprite = largSprite; //largura da personagem na imagem
    this.altSprite = altSprite; //altura da personagem na imagem

    this.frameAtual = 0; //índice da matriz
  }

  //método para exibir os personagens do jogo na tela
  exibe() {
    //função image insere uma imagem no canvas
    image(this.imagem, this.x, this.y, this.largura, this.altura, this.matrix[this.frameAtual][0], this.matrix[this.frameAtual][1], this.largSprite, this.altSprite);

    this.anima(); //chamado o método anima
  }

  //método que anima os personagens na tela
  anima() {
    this.frameAtual++;
    if (this.frameAtual >= this.matrix.length - 1) {
      this.frameAtual = 0;
    }
  }
}