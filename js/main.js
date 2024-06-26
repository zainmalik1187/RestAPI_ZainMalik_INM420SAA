console.log('Astronomy Picture of the Day');

async function getData (baseURL, endpoint, apiKey, date) {
    const data = await fetch(`https://${baseURL}/${endpoint}?api_key=${apiKey}&date=${date}&concept_tags=True`);
    const result = await data.json();
    const dateID = result.date; //calling date
    const imgTitle = result.title; //title for picture of the day
    const imgIcon = result.url; //picture
    const desc = result.explanation; //description of picture
    console.log(result);

    const containerResult = document.getElementById('data-container') //Pushing text and image values to appear
    containerResult.innerHTML = ` 
        <p>The Astromony Picture of the Day for ${date} is..</p>
        <p>${imgTitle}</p>
        <img src="${imgIcon}" alt="image"/>
        <p>${desc}</p>
    `

}

// Handle button click to fetch data for the selected date
document.getElementById('button').addEventListener('click', () => {
    const selectedDate = document.getElementById('date-picker').value; 
    if (selectedDate) { //if date is selected during date picker confirmation the follow through
        getData('api.nasa.gov/planetary', 'apod', "tE84pDbWGKrqFKrQhwI61Nqkr1hF5KjBgGc4UTVP", selectedDate);
    } else { //if date is not selected, push alert message
        alert('Please select a date');
    }
});