//classe para calcular as vidas da personagem no jogo
class Vida {
  constructor(maxVida, vidaInicial){
    this.maxVida = maxVida; //quantidade máxima de vidas permitida no jogo
    this.vidaInicial = vidaInicial; //quantidade de vidas para iniciar o jogo
    this.vidas = this.vidaInicial; //quantidade de vidas obtidas durant eo jogo
    this.largura = 25; //definindo a largura da imagem na tela, largura
    this.altura = 20; //definindo a largura da imagem na tela, altura
    this.xInicial = 20;
    this.y = 20;
  }
  
  exibe(){
    //mostrando a quantidade de vidas que possui
    for(let i = 0; i < this.vidas; i++){
      const margem = i * 10;
      const posicao = this.xInicial * (i + 1);
      
      image(imagemVida, posicao + margem, this.y, this.largura, this.altura);
    }
  }
  
  //método que soma as vidas ganhas durante o jogo
  ganhaVida(){
    if(this.vidas < this.maxVida){
       this.vidas++;
    }
  }
  
  //método que calcula as vidas perdidas durante o jofo até o game over
  perdeVida(){
    this.vidas--;
  }
}