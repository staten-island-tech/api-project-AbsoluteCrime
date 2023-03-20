const randURL = "https://api.scryfall.com/cards/random";
const searchURL = "https://api.scryfall.com/cards/search"

async function randomCard(randURL) {
  try {
    const response = await fetch(randURL);
    const random = await response.json();//makes the data into JSON object we can use
    console.log(random);
    document.getElementById("api-response").src = random.image_uris.png;
    document.getElementById("api-response").alt = random.name;
  } catch (error) {
    console.log(error);
  }
}
randomCard(randURL);
async function searchData(URL) {
  try {
    const searchURL
    const searchResponse = await fetch(URL);


  } catch (error) {

  }
}