const dino = document.querySelector('.dino');
let isJump = false;
const backgroud = document.querySelector('.background')
let position = 0;

function dinoPula(event) {
    if (event.keyCode === 32) {
        if (!isJump) {
            jump();
        }

    }
}

function jump() {

    isJump = true;
    let upInterval = setInterval(() => {
        if (position >= 180) {
            clearInterval(upInterval)

            //descendo
            let dowInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(dowInterval)
                    isJump = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }

            }, 20);

        } else {
            //subindo
            position += 20;
            dino.style.bottom = position + 'px'; // aqui eu acesso uma propriedade do css. esse 'px' é pra concatenar com position e criar uma posição na tela
        }
    }, 20);
}

function createCactus() {
    const cactus = document.createElement('div') // isso cria uma "div" no html 
    let cactusPosition = 1000;
    let randonTime = Math.random() * 6000;

    cactus.classList.add('cactus') // isso cria uma classe dentro da "div"
    cactus.style.left = 1000 + 'px'
    backgroud.appendChild(cactus) // isso adiciona um filho

    let letfInterval = setInterval(() => {

        if (cactusPosition <= -60) {
            clearInterval(letfInterval)
            backgroud.replaceChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60){
            // game over
            clearInterval(letfInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</h1>';
            let reload = setInterval(() => {
                location.reload();
            },2000)
        }else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px'
        }
    }, 20);

    setTimeout(createCactus, randonTime);
}


createCactus();

document.addEventListener('keyup', dinoPula);
