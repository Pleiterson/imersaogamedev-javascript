//classe para gerenciar o botão da tela inicial, assim podemos chamar ele em outras telas do jogo
class Button {
  constructor(texto, x, y){
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.button = createButton(this.texto); //criando um botão no construtor podemos criar ele em qualquer lugar com o texto que quisermos
    this.button.mousePressed(() => this._alteraCena()); //definindo o que será executado quando clicar no botão. No caso, chamado o jogo
    this.button.addClass('botao-tela-inicial'); //chamado a configuração do botão do arquivo style.css
  }
  
  draw(){
    this.button.position(this.x, this.y); //definindo a posição do botão na tela
    this.button.center('horizontal');
  }
  
  _alteraCena(){
    this.button.remove(); //removendo o botão da tela quando inicia o jogo
    cenaAtual = 'jogo';
  }
}