const URL_NARUTO = "https://i.ibb.co/2YPMPcw/wp5845402.jpg";
const CARD_COLOR_NARUTO = "#344265";
const URL_HERO = "https://i.ibb.co/c2CsvNN/wallup-net.jpg";
const CARD_COLOR_HERO = "#9e1f1f";
const URL_FUTEBOL =
  "https://wallpapercave.com/wp/wp4275524.jpg";
const CARD_COLOR_FUTEBOL = "#122142";
const ATTRIBUTE_FONT_COLOR_NARUTO = "#000"
const ATTRIBUTE_BACKGROUND_COLOR_NARUTO = "#faf961"
const ATTRIBUTE_FONT_COLOR_HERO = "#FFF"
const ATTRIBUTE_BACKGROUND_COLOR_HERO = "#175687"
const ATTRIBUTE_FONT_COLOR_FUTEBOL = "#FFF"
const ATTRIBUTE_BACKGROUND_COLOR_FUTEBOL = "#5f8c55"

//
function queryString() {
  const urlParams = new URLSearchParams(location.search);
  const deck = urlParams.get("deck");
  return deck;
}

function AttributeColor(){
  let deck = queryString();
    // definir cor dos atributos
    let cardAttributesPlayer = document.querySelectorAll(".atr-player-card");
    let cardAttributesCPU = document.querySelectorAll(".atr-cpu-card");
    if(deck === "cardNaruto"){
      for(let i = 0; i < cardAttributesPlayer.length; i++){
        cardAttributesPlayer[i].style.color = ATTRIBUTE_FONT_COLOR_NARUTO;
        cardAttributesPlayer[i].style.backgroundColor = ATTRIBUTE_BACKGROUND_COLOR_NARUTO;
        cardAttributesCPU[i].style.color = ATTRIBUTE_FONT_COLOR_NARUTO;
        cardAttributesCPU[i].style.backgroundColor = ATTRIBUTE_BACKGROUND_COLOR_NARUTO;
      }
    } else if (deck === "cardHero"){
      for(let i = 0; i < cardAttributesPlayer.length; i++){
        cardAttributesPlayer[i].style.color = ATTRIBUTE_FONT_COLOR_HERO;
        cardAttributesPlayer[i].style.backgroundColor = ATTRIBUTE_BACKGROUND_COLOR_HERO;
        cardAttributesCPU[i].style.color = ATTRIBUTE_FONT_COLOR_HERO;
        cardAttributesCPU[i].style.backgroundColor = ATTRIBUTE_BACKGROUND_COLOR_HERO;
      }
    } else if(deck === "cardFutebol"){
      for(let i = 0; i < cardAttributesPlayer.length; i++){
        cardAttributesPlayer[i].style.color = ATTRIBUTE_FONT_COLOR_FUTEBOL;
        cardAttributesPlayer[i].style.backgroundColor = ATTRIBUTE_BACKGROUND_COLOR_FUTEBOL;
        cardAttributesCPU[i].style.color = ATTRIBUTE_FONT_COLOR_FUTEBOL;
        cardAttributesCPU[i].style.backgroundColor = ATTRIBUTE_BACKGROUND_COLOR_FUTEBOL;
      }
    }
}


// função para gerar o background baseado no deck selecionado.
function backgroundSelector() {
  let deck = queryString();
  let background = document.querySelector(".tela-jogo__container");
  let backgroundCard = document.getElementsByClassName("tela-jogo__cards");

  if (deck === "cardNaruto") {
    background.style.backgroundImage = `url(${URL_NARUTO})`;
    for (let i = 0; i < backgroundCard.length; i++) {
      backgroundCard[i].style.background = CARD_COLOR_NARUTO;
    }
  } else if (deck === "cardHero") {
    background.style.backgroundImage = `url(${URL_HERO})`;
    for (let i = 0; i < backgroundCard.length; i++) {
      backgroundCard[i].style.background = CARD_COLOR_HERO;
    }
  } else if (deck === "cardFutebol") {
    background.style.backgroundImage = background.style.backgroundImage = `url(${URL_FUTEBOL})`;
    for (let i = 0; i < backgroundCard.length; i++) {
      backgroundCard[i].style.background = CARD_COLOR_FUTEBOL;
    }
  }
}

AttributeColor();
backgroundSelector();
