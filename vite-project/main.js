const randURL = "https://api.scryfall.com/cards/random";
const searchTerm = document.getElementById("term");

async function randomCard(randURL) {
  try {
    const response = await fetch(randURL);
    const randomData = await response.json(); //makes the data into JSON object we can use
    console.log(randomData);
    document.getElementById("api-random-response").src =
      randomData.image_uris.png;
    document.getElementById("api-random-response").alt = randomData.name;
  } catch (error) {
    console.log(error);
  }
}
randomCard(randURL);
async function searchCard() {
  try {
    var term = document.getElementById("search").value;
    const searchURL = `https://api.scryfall.com/cards/named?fuzzy=${term}`;
    const response = await fetch(searchURL);
    const searchData = await response.json();
    console.log(searchData);
    document.getElementById("api-search-response").src =
      searchData.image_uris.png;
    document.getElementById("api-search-response").alt = searchData.name;
  } catch (error) {
    console.log(error);
  }
}
