console.log('%c HI', 'color: firebrick')


let breeds = [];
function loadImages() { 
    fetch("https://dog.ceo/api/breeds/image/random/4") 
    .then(response => response.json()) 
    .then(data => {
             data.message.forEach(imgURL => addImage(imgURL))
        
})}

function addImage(dogPic) {
    const imageContainer = document.getElementById('dog-image-container');
    const image = document.createElement('img');
    image.src = dogPic;
    imageContainer.appendChild(image);
}

function fetchDogBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => { 
        const breedObj = data.message;
        
        for (const breed in breedObj) {
            
            addDogs(breed);
            breeds.push(breed);

            }
            console.log(breeds)
        })}

function addDogs(dogbreed) {
    const dogBreedContainer = document.getElementById('dog-breeds');
        
    const newLiforBreeds = document.createElement('li');
        
    newLiforBreeds.innerText = dogbreed;
        
    dogBreedContainer.appendChild(newLiforBreeds);
        
    newLiforBreeds.addEventListener('click', function onClick(event) {
        
        let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        
            event.target.style.color = randomColor;
        
            console.log(randomColor);
    } )
}






function filterBreeds(event) {
    let letter = event.target.value;
        console.log(letter);
    
        let filteredBreeds = breeds.filter(compareFirstLetters)

        function compareFirstLetters(element) {

            if (element[0] == letter) {
                return element;
            }
        }
            console.log(filteredBreeds);

            const dogBreedContainer = document.getElementById('dog-breeds');
            dogBreedContainer.innerHTML = "";
            
        for (const doggy of filteredBreeds){
                addDogs(doggy);
        }
}





document.addEventListener('DOMContentLoaded', () => {
    loadImages();
    fetchDogBreeds();
    
    const dropdown = document.getElementById("breed-dropdown");
    dropdown.addEventListener('change', filterBreeds )

});




// sets the vairiable imagecontainer = dogimagecontainer, the div. 


// created a new <img> tag and set it equal to newImagetag






