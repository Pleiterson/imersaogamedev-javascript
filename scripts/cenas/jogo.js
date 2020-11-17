//classe para carregar os mecanismos do jogo de modo geral
class Jogo {
  constructor(){
    this.indice = 0; //índice do vetor do inimigo atual
    //determinando quais inimigos e a velocidade que aparecerão na tela. 0=gotinha, 1=troll, 2=gotinha voadora
    this.mapa = fita.mapa; //passando o mapa do arquivo fita.json
  }

  //método para carregar as informações na tela
  setup() {
    cenario = new Cenario(imagemCenario, 3); //declarando a classe Cenario e instanciando o construtor com a imagem do cenário e a velocidade
    score = new Pontuacao(); //declarando a classe Pontuação
    personagem = new Personagem(matrixPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270); //declarando a classe Personagem e instanciando o construtor com a imagem da personagem, bruxa
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial); //declarando a classe Vida

    const inimigo = new Inimigo(matrixInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10); //declarando a classe Inimigo e instanciando o construtor com a imagem do inimigo, gotinha
    const inimigoTroll = new Inimigo(matrixInimigoTroll, imagemInimigoTroll, width, 0, 200, 200, 400, 400, 15); //declarando a classe Inimigo e instanciando o construtor com a imagem do inimigo, troll
    const inimigoVoador = new Inimigo(matrixInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10); //declarando a classe Inimigo e instanciando o construtor com a imagem do inimigo, gotinha voadora

    inimigos.push(inimigo); //incluindo o inimigo gotinha no array
    inimigos.push(inimigoTroll); //incluindo o inimigo troll no array
    inimigos.push(inimigoVoador); //incluindo o inimigo gotinha voadora no array
  }

  //método para comandos via telcado/mouse
  keyPressed() {
    if (key === 'ArrowUp') { //ArrowUp é a setinha para cima do teclado
      personagem.pula();
      somPulo.play(); //o som do pulo é executado sempre que clicamos para a personagem pular
    }
  }

  //método para executar todos os comandos de jogo
  draw() {
    cenario.exibe(); //chamando o método exibe() da classe Cenario
    cenario.move(); //chamando o método move() da classe Cenario
    score.exibe(); //chamando o métodoo exibe() da classe Pontuacao
    score.calculaScore(); //chamando o métodoo calculaScore() da classe Pontuacao
    personagem.exibe(); //chamando o método exibe() Personagem
    personagem.aplicaGravidade(); //chamando o método aplicaGravidade() Personagem
    vida.exibe();

    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo]; //variável que define qual inimigo está aparecendo na tela agora
    const inimigoVisivel = inimigo.x < -inimigo.largura; //validando se o inimigo que está na tela, saiu completamente da tela
    inimigo.velocidade = linhaAtual.velocidade; //vai determinar a velocidade dos inimigos de forma aleatória

    inimigo.exibe(); //chamado o método exibe() da classe Animacao
    inimigo.move(); //chamado o método move() da classe Inimigo

    //não é necessário refazer a validação, sendo que já está validando na declaração da variável
    if (inimigoVisivel) {
      this.indice++; //aumentando o índice do vetor de inimigos
      inimigo.aparece();
      //se o vetor de inimigo for maior que dois, entra na condição
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0; //reiniando o índice do vetor quanto atigir a capacidade máxima de inimigos que temos, três
      }
    }
    //verificando a colisão e exibindo Game Over
    if (personagem.colidindo(inimigo)) {
      vida.perdeVida();
      personagem.imortal();
      
      //validando se a quantidade de vida é igual a zero, se sim, game over
      if (vida.vidas === 0){       
        image(imagemGameOver, width/2 - 200, height/3); //mostrando a imagem de game over na tela
        noLoop();
      }
    }
  }
}