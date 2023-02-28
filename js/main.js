const imagesArray = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

const imageListDom = document.querySelector('.image-list');
let sliderContent = '';

for (let i = 0; i < imagesArray.length; i++) {
    let newWrapper = ` <div class="wrapper">
                         <img src="${imagesArray[i]}" class="wrapped-img">
                      </div> `;

    sliderContent += newWrapper;
    console.log(newWrapper);
}

imageListDom.innerHTML = sliderContent;

const wrapperDom = document.getElementsByClassName('wrapper');
console.log(wrapperDom);

let activeImage = 0; //0 relativo alla posizione nell'array. 

wrapperDom[activeImage].classList.add('show');  //l'img del primo wrapper sarà sempre visibile.


const nextBtnDom = document.querySelector('#next-btn');
const prevBtnDom = document.querySelector('#prev-btn');

nextBtnDom.addEventListener('click',
    function () {

        if (activeImage < wrapperDom.length - 1) {

            wrapperDom[activeImage].classList.remove('show');

            activeImage++;

            wrapperDom[activeImage].classList.add('show');

            prevBtnDom.classList.remove('hide');

            if (activeImage == wrapperDom.length - 1) {

                nextBtnDom.classList.add('hide');
             

            }
        }
    }
);


prevBtnDom.addEventListener('click',

    function () {
        if (activeImage > 0) {
            wrapperDom[activeImage].classList.remove('show');
            activeImage--;
            wrapperDom[activeImage].classList.add('show')

            nextBtnDom.classList.remove('hide');


            if (activeImage == 0) {
                prevBtnDom.classList.add('hide');
            }
        }
    }
);



