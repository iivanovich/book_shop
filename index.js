import * as slider from './modules/slider.js';
import { ratingZero, ratingOne, ratingTwo, ratingThree, ratingFour, ratingFive } from './modules/rating.js';
import { categ } from "./modules/links.js";


const touchLink = document.querySelector(`.aside`);
const content = document.querySelector(`.cards`);
touchLink.onclick = () => {
    stInd = 0;
    content.innerHTML = ``;
    getResponse();
}


let stInd = 0;
const btnLoader = document.querySelector(`.btn_load_center`);
btnLoader.onclick = () => {
    stInd = stInd + 6;
    content.innerHTML = ``;
    getResponse();
}


getResponse();


async function getResponse() {
    let response = await fetch(`https://www.googleapis.com/books/v1/volumes?q="${categ}"&key=AIzaSyDiAUZhDqrQ5_8uKvEOV5JPI1hAcZuDZN4&printType=books&startIndex=${stInd}&maxResults=6`);
    let content = await response.json();    

    const card = document.querySelector(`.cards`)

    let key;
    for (key in content) {
    }

    let list = content[key];
    let items;

    for (items in list) {
        let text = list[items].volumeInfo.description;
        let curren;
        let amount;
        let saleability = list[items].saleInfo.saleability;

        if (saleability == `NOT_FOR_SALE`) {
            curren = ` `;
            amount = ` `;
        } else if (saleability == `FOR_SALE`) {
            curren = list[items].saleInfo.listPrice.currencyCode;
            amount = list[items].saleInfo.listPrice.amount;
        }

        let review;
        let rating;

        if (list[items].volumeInfo.averageRating == 1) {
            rating = ratingOne;
        } else if (Math.round(list[items].volumeInfo.averageRating) == 2) {
            rating = ratingTwo;
        } else if (Math.round(list[items].volumeInfo.averageRating) == 3) {
            rating = ratingThree;
        } else if (Math.round(list[items].volumeInfo.averageRating) == 4) {
            rating = ratingFour;
        } else if (Math.round(list[items].volumeInfo.averageRating) == 5) {
            rating = ratingFive;
        } else if (!list[items].volumeInfo.averageRating) {
            rating = ratingZero;
        }

        if (list[items].volumeInfo.ratingsCount) {
            review = list[items].volumeInfo.ratingsCount;
        } else if (!list[items].volumeInfo.ratingsCount) {
            review = 0;
        }

        // console.log(list[items])

        card.innerHTML += `
        
        <div class="card">
        <div class="card_left">
            <img src="${list[items].volumeInfo.imageLinks.smallThumbnail}" alt="Обложка">
        </div>
        <div class="card_right">
            <div class="author">${list[items].volumeInfo.authors.join(', ')}</div>
            <div class="title">${list[items].volumeInfo.title}</div>
            <div class="statistics">
                ${rating}
                <div class="review">${review} review
                </div>
            </div>
            <div class="card_text">${text.substring(0, 115)}...</div>
            <div class="coast">${amount} ${curren}</div>
            <button class="card_btn">buy now</button>
        </div>
    </div>
        
        `
    }

    const btn = await document.querySelectorAll(`.card_btn`);
    const ipt = document.querySelector(`.counter`);
    
    let press;

    for (press in btn){
        
        let pressCard = btn[press];

        pressCard.onclick = () => {

            ipt.classList.remove(`none`);

            pressCard.classList.toggle(`press`);

            if (pressCard.classList.contains(`press`)){
                ipt.value++;
            } else {
                ipt.value--;
                if (ipt.value == 0) {
                    ipt.classList.add(`none`);
                }
                }
            } 
        }
}


