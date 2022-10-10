const homeBtn = document.querySelectorAll('.container .home button');
const guestBtn = document.querySelectorAll('.container .guest button');
const homeScores = document.querySelector('.home .number p');
const guestScores = document.querySelector('.guest .number p');
const minusHome = document.querySelector('.minus-home')
const minusGuest = document.querySelector('.minus-guest')
const reset = document.querySelector('.reset');

const homeTeam = document.querySelector('.home h3');
const guestTeam = document.querySelector('.guest h3');



const compare = (a, b) => {
    if(a > b) {
        homeTeam.classList.add('ahead-score');
        guestTeam.classList.remove('ahead-score');
    } else if(a < b){
        guestTeam.classList.add('ahead-score');
        homeTeam.classList.remove('ahead-score');
    }
}




let home = 0;
let guest = 0;


homeBtn.forEach(e => {
    e.addEventListener('click', e => {
        if(e.target.classList.contains('add1')) {
            homeScores.innerText = home+=1;
        } else if(e.target.classList.contains('add2')) {
            homeScores.innerText = home+=2;
        } else if(e.target.classList.contains('add3')) {
            homeScores.innerText = home+=3;
        }
        compare(home, guest)
    })

})

minusHome.addEventListener('click', e => {
    if(home >= 1) {
        homeScores.innerText = home-=1;
    }
})

guestBtn.forEach(e => {
    e.addEventListener('click', e => {
        if(e.target.classList.contains('add1')) {
            guestScores.innerText = guest+=1;
        } else if(e.target.classList.contains('add2')) {
            guestScores.innerText = guest+=2;
        } else if(e.target.classList.contains('add3')) {
            guestScores.innerText = guest+=3;
        }
        compare(home, guest)
    })
})

minusGuest.addEventListener('click', e => {
    if(guest >= 1) {
        guestScores.innerText = guest-=1;
    }
})

reset.addEventListener('click', () => {
    home = 0;
    guest = 0;

    guestScores.innerText = 0;
    homeScores.innerText = 0;
})