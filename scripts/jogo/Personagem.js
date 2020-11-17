class Personagem extends Animacao {
  constructor(matrix, imagem, x, varY, largura, altura, largSprite, altSprite) {
    super(matrix, imagem, x, varY, largura, altura, largSprite, altSprite)
    this.varY = varY;
    this.yInicial = height - this.altura - this.varY;
    this.y = this.yInicial;
    this.velPulo = 0;
    this.gravidade = 6;
    this.alturaPulo = -50;
    this.pulos = 0; //variável apra calcular a quantidade de pulos
    this.invencivel = false;
  }

  //método para que a personagem pule os inimigos
  pula() {
    //condição para limitar a quantidade de pulos que pode ser dado pela personagem
    if (this.pulos < 2) {
      this.velPulo = this.alturaPulo;
      this.pulos++; //contando a quantidade de pulos
    }
  }

  //método que aplica a gravidade na personagem, ou seja, retorna a zero
  aplicaGravidade() {
    this.y = this.y + this.velPulo;
    this.velPulo = this.velPulo + this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.pulos = 0; //zerando o contador de pulos quando a personagem chega ao chão
    }
  }

  imortal(){
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;
    }, 1000); //definindo quantos segundos ela ficará invencível
  }
  
  //método para verificar se a personagem está colidindo nos inimigos
  colidindo(inimigo) {
    //se for invencivel retorna falso enão tira mais vidas
    if (this.invencivel){
      return false;
    }
    
    const precisao = 0.7; //precisão é necessária devido ao tamanho do quadrado da personagem ser um pouco maior, sendo assim colide antes da hora. Com a precisão considera-se o contorno da própria personagem
    
    //função do p5.js que confere os valores de quadrado da bruxa e fotinha são iguais, se sim, colide.
    const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao);

    return colisao;
  }
}