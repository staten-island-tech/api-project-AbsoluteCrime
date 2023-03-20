const URL = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/archmage";

async function getData(URL) {
  try {
    const response = await fetch(URL, {
      headers: {
        'X-RapidAPI-Key': '7e1a2580c7msh192b4f51ce7e606p1b8db6jsn4b16a735f245',
        'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
      }
    }
    );
    const data = await response.json();//makes the data into JSON object we can use
    console.log(data);
    document.getElementById("api-response").textContent = data.classes[0];
  } catch (error) {
    console.log(error);
  }
}
getData(URL);