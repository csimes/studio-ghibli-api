const baseURL = "https://ghibliapi.herokuapp.com/films/";
const movieTitle = document.querySelector(".card-title")
const directorName = document.querySelector(".director");
const releaseDate = document.querySelector(".release");
const runTime = document.querySelector(".runtime");
const description = document.querySelector(".summary")
const dropdown = document.querySelector(".dropdown")
const submitBtn = document.querySelector(".submit-btn")

submitBtn.onclick = function() {getFilms()};
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
})

async function getFilms() {
    let response = await fetch(baseURL)
    let data = await response.json();
    
    function displayTitles(titles) {
        titles.forEach(t => {
            let titleInMenu = document.createElement("option");
            titleInMenu.innerText = t.title;
            titleInMenu.value = t.id;
            dropdown.add(titleInMenu);
        })
    }
    displayTitles(data);

    let id = dropdown.value;
    response = await fetch(`${baseURL}${id}`)
    data = await response.json();

    movieTitle.innerText = data.title;
    directorName.innerText = data.director;
    releaseDate.innerText = data.release_date;
    runTime.innerText = data.running_time + " minutes";
    description.innerText = data.description;
}
getFilms();
