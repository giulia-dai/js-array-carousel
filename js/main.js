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
