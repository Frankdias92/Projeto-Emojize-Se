const emoji = [
  "💻",
  "👋",
  "🙌",
  "🚀",
  "📱",
  "✔️",
  "👻",
  "🤖",
];
let openCards = [];

const nivelSelecionado = document.querySelector('#nivel');
const tabuleiro = document.querySelector('#tabuleiro');

nivelSelecionado.addEventListener('change', function() {
    const selectedLevel = nivelSelecionado.value;
    if (selectedLevel === 'facil') {
        criarCartas(12, emoji);
    } else if (selectedLevel === 'dificil') {
        criarCartas(16, emoji);
      }
      criarParesDeCartas(); // Chame a função para criar pares de cartas
});

function criarCartas(numCartas, emojis) {
  tabuleiro.innerHTML = '';
  
  let shuffleEmojis = emojis.slice(0, numCartas / 2);
  shuffleEmojis = shuffleEmojis.concat(shuffleEmojis);
  
  shuffleEmojis = shuffleEmojis.sort(() => Math.random() - 0.5);

  for (let i = 0; i < numCartas; i++) {
    const carta = document.createElement('div');
    carta.classList.add('carta');
    const conteudo = document.createElement('div');
    conteudo.classList.add('conteudo-carta'); 
    conteudo.textContent = shuffleEmojis[i];
    carta.onclick = handleClick;
    carta.appendChild(conteudo);
    tabuleiro.appendChild(carta);
  }
}

function handleClick() {
  if ( openCards.length < 2 ) {
    this.classList.add( 'boxOpen' );
    openCards.push( this );
  }
  if( openCards.length == 2 ) {
    setTimeout( checkMatch, 500 );
  }
}

function checkMatch() {
  if ( openCards[0].innerHTML === openCards[1].innerHTML ) {
    openCards[0].classList.add( 'boxMatch' );
    openCards[1].classList.add( 'boxMatch' );
  } else {
    openCards[0].classList.remove( 'boxOpen' );
    openCards[1].classList.remove( 'boxOpen' );
  }

  openCards = [];

  if ( document.querySelectorAll( '.boxMatch' ).length === document.querySelectorAll( '.conteudo-carta' ).length ) {
    alert( "você venceur" );
    // temporizador()
  }
} 


function embaralharCartas(cartas) {
  for (let i = cartas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
  }
}

function criarParesDeCartas() {
  const cartas = [];
  for (let i = 1; i <= 6; i++) {
      cartas.push(i, i);
  }
  embaralharCartas(cartas);
  return cartas;
}

let cliques = 0;

function incrementarContadorCliques() {
    cliques++;
    document.querySelector('#contadorCliques').textContent = cliques;
    console.log(cliques);
}

let interval;

function temporizador() {
  timerId = document.querySelector('#tempoRestante');
  let segundos = 10;

  const interval = setInterval(() => {
    const timeLeft = segundos % 10;

    timerId.textContent = `Tempo Restante: ${timeLeft}s`
    console.log(`Tempo Restante: ${timeLeft}s`);

    segundos --;
  
    if ( segundos < 0 ) {
      clearInterval( interval );
      alert( 'Tempo Esgotado!' );
    }
  }, 1000);
}

function verificarCartas() {
  if (cartaSelecionada1 && cartaSelecionada2) {
    if (cartaSelecionada1.textContent === cartaSelecionada2textContent) {
        cartaSelecionada1.classList.add('encontrada');
        cartaSelecionada2.classList.add('encontrada');
        cartaSelecionada1.removeEventListener('click', virarCarta);
        cartaSelecionada2.removeEventListener('click', virarCarta);
        
    } else {
        setTimeout(() => {
            cartaSelecionada1.classList.remove('virada');
            cartaSelecionada2.classList.remove('virada');
            cartaSelecionada1.addEventListener('click', virarCarta);
            cartaSelecionada2.addEventListener('click', virarCarta);
            cartaSelecionada1.textContent = '';
            cartaSelecionada2.textContent = '';
        }, 1000);
    }
    cartaSelecionada1 = null;
    cartaSelecionada2 = null;
  }

}

const cartas = document.querySelectorAll('.carta');
cartas.forEach(carta => carta.addEventListener('click', virarCarta));




function exibirMensagem(mensagem) {
  document.getElementById('mensagem').textContent = mensagem;
}

function btnStart () {
  $('.btn-Init').click( () => {
    $('#tabuleiro').css('opacity', '1');
    $('.selectNivel').css('display', 'none');
    $('.btn-Init').css('display', 'none');
    $('.btn-Reset').css('display', 'flex');
    temporizador()
  })

  $('.btn-Reset').click( () => {
    $('#tabuleiro').css('opacity', '0');
    $('.selectNivel').css('display', 'flex');
    $('.btn-Reset').css('display', 'none');
    $('.btn-Init').css('display', 'flex');
  })
}

btnStart ()