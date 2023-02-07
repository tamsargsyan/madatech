const SEARCH = document.querySelector("#search");
const SEARCH_BTN = document.querySelector("#search-btn");
const CARDS_TITLE = document.querySelectorAll("#card-title");
const CARDS = document.querySelectorAll("#card");
const ITEM_NOT_FOUND = document.querySelector("#item-not-found");

const search = () => {
  let result = [];
  for (let i = 0; i < CARDS_TITLE.length; i++) {
    if (
      CARDS_TITLE[i].innerText
        .toLowerCase()
        .includes(SEARCH.value.toLowerCase())
    ) {
      CARDS[i].classList.remove("hidden");
      result.push(CARDS[i]);
    } else {
      CARDS[i].classList.add("hidden");
    }
  }
  result.length
    ? ITEM_NOT_FOUND.classList.add("item-not-found")
    : ITEM_NOT_FOUND.classList.remove("item-not-found");
};
SEARCH_BTN.addEventListener("click", search);
SEARCH.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    SEARCH_BTN.click();
  }
});
SEARCH.addEventListener("input", () => {
  if (!this.value) {
    CARDS.forEach((card) => card.classList.remove("hidden"));
    ITEM_NOT_FOUND.classList.add("item-not-found");
  }
});
