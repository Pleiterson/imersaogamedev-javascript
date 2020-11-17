//classe para carregar as cenas dos jogo de modo geral
class TelaInicial {
  constructor(){
    
  }
  
  //método para carregar no draw do sketch a tela inicial
  draw(){
    this._imagemDeFundo();
    this._texto();
    this._button();
  }
  
  //método "privado" para carregar a imagem de fundo da tela inicial
  _imagemDeFundo(){
    image(imagemTelaInicial, 0, 0, width, height); //carregando a imagem de tela inicial, antes de inciar o jogo
  }
  
  //método "privado" para carregar os textos na tela inicial
  _texto(){
    textFont(fonteTelaInicial); //carregando a fonte do texto da tela inicial
    textAlign(CENTER); //centralizando todos os textos abaixo no meio da tela
    textSize(50); //definindo o tamanho da fonte do texto da tela inicial
    text('As aventuras de', width / 2, height / 3); //carregando o título da tela inicial
    textSize(100);
    text('Hipsta', width / 2, height / 5 * 3); //carregando o título da tela inicial
  }
  
  //método para o botão que iniciará o jogo, e entrará a tela do cenário da floresta
  _button(){
    botao.y = height / 7 * 5; //definindo o botão abaixo do texto
    botao.draw();
  }
}