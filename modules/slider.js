
let offset = 0;

const sliderLine = document.querySelector(`.slider_line`);

const slide1 = document.querySelector(`.slide_1`);
const slide2 = document.querySelector(`.slide_2`);
const slide3 = document.querySelector(`.slide_3`);

const btnOne = document.querySelector(`.slide_1`).addEventListener(`click`, function(){
    offset = 0;
    sliderLine.style.left = -offset + `px`;
    slide1.style.background = "#9E98DC";
    slide2.style.background = "#EFEEF6";
    slide3.style.background = "#EFEEF6";
});

const btnTwo = document.querySelector(`.slide_2`).addEventListener(`click`, function(){
    offset = 1120;
    sliderLine.style.left = -offset + `px`;
    slide1.style.background = "#EFEEF6";
    slide2.style.background = "#9E98DC";
    slide3.style.background = "#EFEEF6";
}); 

const btnThree = document.querySelector(`.slide_3`).addEventListener(`click`, function(){
    offset = 2240;
    sliderLine.style.left = -offset + `px`;
    slide1.style.background = "#EFEEF6";
    slide2.style.background = "#EFEEF6";
    slide3.style.background = "#9E98DC";
});


const time = function () {
    if (offset == 0) {
        slide1.style.background = "#9E98DC";
        slide2.style.background = "#EFEEF6";
        slide3.style.background = "#EFEEF6";
        sliderLine.style.left = -offset + `px`;
    } else if (offset == 1120) {
        slide1.style.background = "#EFEEF6";
        slide2.style.background = "#9E98DC";
        slide3.style.background = "#EFEEF6";
        sliderLine.style.left = -offset + `px`;
    } else if (offset === 2240) {
        slide1.style.background = "#EFEEF6";
        slide2.style.background = "#EFEEF6";
        slide3.style.background = "#9E98DC";
        sliderLine.style.left = -offset + `px`;
    } else if (offset == 3360) {
        offset = -1120;
    }
    offset += 1120;
  }

  setInterval(time, 5000);


