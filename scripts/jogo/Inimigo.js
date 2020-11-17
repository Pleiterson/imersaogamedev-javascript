class Inimigo extends Animacao {
  constructor(matrix, imagem, x, varY, largura, altura, largSprite, altSprite, vel) {
    super(matrix, imagem, x, varY, largura, altura, largSprite, altSprite)

    this.vel = vel;
    this.x = width;
  }

  //método que faz mover os personagens na tela
  move() {
    this.x = this.x - this.vel;
  }
  
  aparece(){
    this.x = width;
  }
}