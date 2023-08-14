export { categ };

const architectureLink = document.querySelector(`.Architecture`);
const artLink = document.querySelector(`.Art`);
const biographyLink = document.querySelector(`.Biography`);
const businessLink = document.querySelector(`.Business`);
const craftsLink = document.querySelector(`.Crafts`);
const dramaLink = document.querySelector(`.Drama`);
const fictionLink = document.querySelector(`.Fiction`);
const foodLink = document.querySelector(`.Food`);
const healthLink = document.querySelector(`.Health`);
const historyLink = document.querySelector(`.History`);
const humorLink = document.querySelector(`.Humor`);
const poetryLink = document.querySelector(`.Poetry`);
const psychologyLink = document.querySelector(`.Psychology`);
const scienceLink = document.querySelector(`.Science`);
const technologyLink = document.querySelector(`.Technology`);
const travelLink = document.querySelector(`.Travel`);

const architecture = "subject:Architecture";
const art = "subject:Art";
const biography = "subject:Biography & Autobiography";
const business = "subject:Business";
const crafts = "subject:Crafts & Hobbies";
const drama = "subject:Drama";
const fiction = "subject:Fiction";
const food = "subject:Cooking";
const health = "subject:Health & Fitness";
const history = "subject:History";
const humor = "subject:Humor";
const poetry = "subject:Poetry";
const psychology = "subject:Psychology";
const science = "subject:Science";
const technology = "subject:Technology";
const travel = "subject:Travel";

let categ = architecture;

architectureLink.onclick = () => {
    architectureLink.classList.add(`active_link`);
    artLink.classList.remove(`active_link`);
    biographyLink.classList.remove(`active_link`);
    businessLink.classList.remove(`active_link`);
    craftsLink.classList.remove(`active_link`);
    dramaLink.classList.remove(`active_link`);
    fictionLink.classList.remove(`active_link`);
    foodLink.classList.remove(`active_link`);
    healthLink.classList.remove(`active_link`);
    historyLink.classList.remove(`active_link`);
    humorLink.classList.remove(`active_link`);
    poetryLink.classList.remove(`active_link`);
    psychologyLink.classList.remove(`active_link`);
    scienceLink.classList.remove(`active_link`);
    technologyLink.classList.remove(`active_link`);
    travelLink.classList.remove(`active_link`);
    categ = ``;
    categ = architecture;
}

artLink.onclick = () => {
    architectureLink.classList.remove(`active_link`);
    artLink.classList.add(`active_link`);
    biographyLink.classList.remove(`active_link`);
    businessLink.classList.remove(`active_link`);
    craftsLink.classList.remove(`active_link`);
    dramaLink.classList.remove(`active_link`);
    fictionLink.classList.remove(`active_link`);
    foodLink.classList.remove(`active_link`);
    healthLink.classList.remove(`active_link`);
    historyLink.classList.remove(`active_link`);
    humorLink.classList.remove(`active_link`);
    poetryLink.classList.remove(`active_link`);
    psychologyLink.classList.remove(`active_link`);
    scienceLink.classList.remove(`active_link`);
    technologyLink.classList.remove(`active_link`);
    travelLink.classList.remove(`active_link`);
    categ = ``;
    categ = art;
}

biographyLink.onclick = () => {
    architectureLink.classList.remove(`active_link`);
    artLink.classList.remove(`active_link`);
    biographyLink.classList.add(`active_link`);
    businessLink.classList.remove(`active_link`);
    craftsLink.classList.remove(`active_link`);
    dramaLink.classList.remove(`active_link`);
    fictionLink.classList.remove(`active_link`);
    foodLink.classList.remove(`active_link`);
    healthLink.classList.remove(`active_link`);
    historyLink.classList.remove(`active_link`);
    humorLink.classList.remove(`active_link`);
    poetryLink.classList.remove(`active_link`);
    psychologyLink.classList.remove(`active_link`);
    scienceLink.classList.remove(`active_link`);
    technologyLink.classList.remove(`active_link`);
    travelLink.classList.remove(`active_link`);
    categ = ``;
    categ = biography;
    getResponse();
}

businessLink.onclick = () => {
    architectureLink.classList.remove(`active_link`);
    artLink.classList.remove(`active_link`);
    biographyLink.classList.remove(`active_link`);
    businessLink.classList.add(`active_link`);
    craftsLink.classList.remove(`active_link`);
    dramaLink.classList.remove(`active_link`);
    fictionLink.classList.remove(`active_link`);
    foodLink.classList.remove(`active_link`);
    healthLink.classList.remove(`active_link`);
    historyLink.classList.remove(`active_link`);
    humorLink.classList.remove(`active_link`);
    poetryLink.classList.remove(`active_link`);
    psychologyLink.classList.remove(`active_link`);
    scienceLink.classList.remove(`active_link`);
    technologyLink.classList.remove(`active_link`);
    travelLink.classList.remove(`active_link`);
    categ = ``;
    categ = business;
}

craftsLink.onclick = () => {
    architectureLink.classList.remove(`active_link`);
    artLink.classList.remove(`active_link`);
    biographyLink.classList.remove(`active_link`);
    businessLink.classList.remove(`active_link`);
    craftsLink.classList.add(`active_link`);
    dramaLink.classList.remove(`active_link`);
    fictionLink.classList.remove(`active_link`);
    foodLink.classList.remove(`active_link`);
    healthLink.classList.remove(`active_link`);
    historyLink.classList.remove(`active_link`);
    humorLink.classList.remove(`active_link`);
    poetryLink.classList.remove(`active_link`);
    psychologyLink.classList.remove(`active_link`);
    scienceLink.classList.remove(`active_link`);
    technologyLink.classList.remove(`active_link`);
    travelLink.classList.remove(`active_link`);
    categ = ``;
    categ = crafts;
}

dramaLink.onclick = () => {
    architectureLink.classList.remove(`active_link`);
    artLink.classList.remove(`active_link`);
    biographyLink.classList.remove(`active_link`);
    businessLink.classList.remove(`active_link`);
    craftsLink.classList.remove(`active_link`);
    dramaLink.classList.add(`active_link`);
    fictionLink.classList.remove(`active_link`);
    foodLink.classList.remove(`active_link`);
    healthLink.classList.remove(`active_link`);
    historyLink.classList.remove(`active_link`);
    humorLink.classList.remove(`active_link`);
    poetryLink.classList.remove(`active_link`);
    psychologyLink.classList.remove(`active_link`);
    scienceLink.classList.remove(`active_link`);
    technologyLink.classList.remove(`active_link`);
    travelLink.classList.remove(`active_link`);
    categ = ``;
    categ = drama;
}

fictionLink.onclick = () => {
    architectureLink.classList.remove(`active_link`);
    artLink.classList.remove(`active_link`);
    biographyLink.classList.remove(`active_link`);
    businessLink.classList.remove(`active_link`);
    craftsLink.classList.remove(`active_link`);
    dramaLink.classList.remove(`active_link`);
    fictionLink.classList.add(`active_link`);
    foodLink.classList.remove(`active_link`);
    healthLink.classList.remove(`active_link`);
    historyLink.classList.remove(`active_link`);
    humorLink.classList.remove(`active_link`);
    poetryLink.classList.remove(`active_link`);
    psychologyLink.classList.remove(`active_link`);
    scienceLink.classList.remove(`active_link`);
    technologyLink.classList.remove(`active_link`);
    travelLink.classList.remove(`active_link`);
    categ = ``;
    categ = fiction;
}

foodLink.onclick = () => {
    architectureLink.classList.remove(`active_link`);
    artLink.classList.remove(`active_link`);
    biographyLink.classList.remove(`active_link`);
    businessLink.classList.remove(`active_link`);
    craftsLink.classList.remove(`active_link`);
    dramaLink.classList.remove(`active_link`);
    fictionLink.classList.remove(`active_link`);
    foodLink.classList.add(`active_link`);
    healthLink.classList.remove(`active_link`);
    historyLink.classList.remove(`active_link`);
    humorLink.classList.remove(`active_link`);
    poetryLink.classList.remove(`active_link`);
    psychologyLink.classList.remove(`active_link`);
    scienceLink.classList.remove(`active_link`);
    technologyLink.classList.remove(`active_link`);
    travelLink.classList.remove(`active_link`);
    categ = ``;
    categ = food;
}

healthLink.onclick = () => {
    architectureLink.classList.remove(`active_link`);
    artLink.classList.remove(`active_link`);
    biographyLink.classList.remove(`active_link`);
    businessLink.classList.remove(`active_link`);
    craftsLink.classList.remove(`active_link`);
    dramaLink.classList.remove(`active_link`);
    fictionLink.classList.remove(`active_link`);
    foodLink.classList.remove(`active_link`);
    healthLink.classList.add(`active_link`);
    historyLink.classList.remove(`active_link`);
    humorLink.classList.remove(`active_link`);
    poetryLink.classList.remove(`active_link`);
    psychologyLink.classList.remove(`active_link`);
    scienceLink.classList.remove(`active_link`);
    technologyLink.classList.remove(`active_link`);
    travelLink.classList.remove(`active_link`);
    categ = ``;
    categ = health;
}

historyLink.onclick = () => {
    architectureLink.classList.remove(`active_link`);
    artLink.classList.remove(`active_link`);
    biographyLink.classList.remove(`active_link`);
    businessLink.classList.remove(`active_link`);
    craftsLink.classList.remove(`active_link`);
    dramaLink.classList.remove(`active_link`);
    fictionLink.classList.remove(`active_link`);
    foodLink.classList.remove(`active_link`);
    healthLink.classList.remove(`active_link`);
    historyLink.classList.add(`active_link`);
    humorLink.classList.remove(`active_link`);
    poetryLink.classList.remove(`active_link`);
    psychologyLink.classList.remove(`active_link`);
    scienceLink.classList.remove(`active_link`);
    technologyLink.classList.remove(`active_link`);
    travelLink.classList.remove(`active_link`);
    categ = ``;
    categ = history;
}

humorLink.onclick = () => {
    architectureLink.classList.remove(`active_link`);
    artLink.classList.remove(`active_link`);
    biographyLink.classList.remove(`active_link`);
    businessLink.classList.remove(`active_link`);
    craftsLink.classList.remove(`active_link`);
    dramaLink.classList.remove(`active_link`);
    fictionLink.classList.remove(`active_link`);
    foodLink.classList.remove(`active_link`);
    healthLink.classList.remove(`active_link`);
    historyLink.classList.remove(`active_link`);
    humorLink.classList.add(`active_link`);
    poetryLink.classList.remove(`active_link`);
    psychologyLink.classList.remove(`active_link`);
    scienceLink.classList.remove(`active_link`);
    technologyLink.classList.remove(`active_link`);
    travelLink.classList.remove(`active_link`);
    categ = ``;
    categ = humor;
}

poetryLink.onclick = () => {
    architectureLink.classList.remove(`active_link`);
    artLink.classList.remove(`active_link`);
    biographyLink.classList.remove(`active_link`);
    businessLink.classList.remove(`active_link`);
    craftsLink.classList.remove(`active_link`);
    dramaLink.classList.remove(`active_link`);
    fictionLink.classList.remove(`active_link`);
    foodLink.classList.remove(`active_link`);
    healthLink.classList.remove(`active_link`);
    historyLink.classList.remove(`active_link`);
    humorLink.classList.remove(`active_link`);
    poetryLink.classList.add(`active_link`);
    psychologyLink.classList.remove(`active_link`);
    scienceLink.classList.remove(`active_link`);
    technologyLink.classList.remove(`active_link`);
    travelLink.classList.remove(`active_link`);
    categ = ``;
    categ = poetry;
}

psychologyLink.onclick = () => {
    architectureLink.classList.remove(`active_link`);
    artLink.classList.remove(`active_link`);
    biographyLink.classList.remove(`active_link`);
    businessLink.classList.remove(`active_link`);
    craftsLink.classList.remove(`active_link`);
    dramaLink.classList.remove(`active_link`);
    fictionLink.classList.remove(`active_link`);
    foodLink.classList.remove(`active_link`);
    healthLink.classList.remove(`active_link`);
    historyLink.classList.remove(`active_link`);
    humorLink.classList.remove(`active_link`);
    poetryLink.classList.remove(`active_link`);
    psychologyLink.classList.add(`active_link`);
    scienceLink.classList.remove(`active_link`);
    technologyLink.classList.remove(`active_link`);
    travelLink.classList.remove(`active_link`);
    categ = ``;
    categ = psychology;
}

scienceLink.onclick = () => {
    architectureLink.classList.remove(`active_link`);
    artLink.classList.remove(`active_link`);
    biographyLink.classList.remove(`active_link`);
    businessLink.classList.remove(`active_link`);
    craftsLink.classList.remove(`active_link`);
    dramaLink.classList.remove(`active_link`);
    fictionLink.classList.remove(`active_link`);
    foodLink.classList.remove(`active_link`);
    healthLink.classList.remove(`active_link`);
    historyLink.classList.remove(`active_link`);
    humorLink.classList.remove(`active_link`);
    poetryLink.classList.remove(`active_link`);
    psychologyLink.classList.remove(`active_link`);
    scienceLink.classList.add(`active_link`);
    technologyLink.classList.remove(`active_link`);
    travelLink.classList.remove(`active_link`);
    categ = ``;
    categ = science;
}

technologyLink.onclick = () => {
    architectureLink.classList.remove(`active_link`);
    artLink.classList.remove(`active_link`);
    biographyLink.classList.remove(`active_link`);
    businessLink.classList.remove(`active_link`);
    craftsLink.classList.remove(`active_link`);
    dramaLink.classList.remove(`active_link`);
    fictionLink.classList.remove(`active_link`);
    foodLink.classList.remove(`active_link`);
    healthLink.classList.remove(`active_link`);
    historyLink.classList.remove(`active_link`);
    humorLink.classList.remove(`active_link`);
    poetryLink.classList.remove(`active_link`);
    psychologyLink.classList.remove(`active_link`);
    scienceLink.classList.remove(`active_link`);
    technologyLink.classList.add(`active_link`);
    travelLink.classList.remove(`active_link`);
    categ = ``;
    categ = technology;
}

travelLink.onclick = () => {
    architectureLink.classList.remove(`active_link`);
    artLink.classList.remove(`active_link`);
    biographyLink.classList.remove(`active_link`);
    businessLink.classList.remove(`active_link`);
    craftsLink.classList.remove(`active_link`);
    dramaLink.classList.remove(`active_link`);
    fictionLink.classList.remove(`active_link`);
    foodLink.classList.remove(`active_link`);
    healthLink.classList.remove(`active_link`);
    historyLink.classList.remove(`active_link`);
    humorLink.classList.remove(`active_link`);
    poetryLink.classList.remove(`active_link`);
    psychologyLink.classList.remove(`active_link`);
    scienceLink.classList.remove(`active_link`);
    technologyLink.classList.remove(`active_link`);
    travelLink.classList.add(`active_link`);
    categ = ``;
    categ = travel;
}