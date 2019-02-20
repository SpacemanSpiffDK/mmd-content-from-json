// JS by Dan Høegh
// UCN MMD 2018

const recipies = [
    {
        "name": "Too Much Chocolate Cake",
        "rating": 3,
        "intro": "This cake won me First Prize at the county fair last year. It is very chocolaty.",
        "procedure": [ 
            "Preheat oven to 350 degrees F (175 degrees C).", 
            "In a large bowl, mix together the cake and pudding mixes, sour cream, oil, beaten eggs and water. Stir in the chocolate chips and pour batter into a well greased 12 cup bundt pan.", 
            "Bake for 50 to 55 minutes, or until top is springy to the touch and a wooden toothpick inserted comes out clean. Cool cake thoroughly in pan at least an hour and a half before inverting onto a plate If desired, dust the cake with powdered sugar." 
        ],
        "ingredients": [
            "1 (18.25 ounce) package devil's food cake mix",
            "1 (5.9 ounce) package instant chocolate pudding mix",
            "1 cup sour cream",
            "1 cup vegetable oil",
            "4 eggs",
            "1/2 cup warm water",
            "2 cups semisweet chocolate chips"
        ],
        "picture": "assets/images/cake-1.jpg",
    },
    {
        "name": "Die Eier Von Satan",
        "rating": 5,
        "intro": "By Tool, lyrics from genius.com",
        "procedure": [ 
            "In eine Schüssel geben",
            "Butter einrühren",
            "Gemahlene Nüsse zugeben und",
            "Den Teig verkneten",
            "Augenballgroße Stücke vom Teig formen",
            "Im Staubzucker walzen und",
            "Sagt die Zauberwörter",
            "Simsalbimbamba Saladu Saladim",
            "Auf ein gefettetes Backblech legen und",
            "Bei zweihundert Grad für fünfzehn Minuten backen und",
            "KEINE EIER"
        ],
        "ingredients": [
            "Eine halbe Tasse Staubzucker",
            "Ein Viertel Teelöffel Salz",
            "Eine Messerspitze türkisches Haschisch",
            "Ein halbes Pfund Butter",
            "Ein Teelöffel Vanillenzucker",
            "Ein halbes Pfund Mehl",
            "Einhundertfünfzig Gramm gemahlene Nüsse",
            "Ein wenig extra Staubzucker",
            "und keine Eier"
        ],
        "picture": "assets/images/cake-2.jpg",
    }    
]

function buildNavigation(){

    let elmNav = document.getElementById('recipies');

    for (let i = 0; i < recipies.length; i++) {
        let listItem = document.createElement('li');
        let linkItem = document.createElement('a');
        linkItem.href = "#";
        linkItem.addEventListener('click', function(){
            addContent(i);
        });
        let linkItemText = document.createTextNode(recipies[i].name);
        linkItem.appendChild(linkItemText);
        listItem.appendChild(linkItem);
        elmNav.appendChild(listItem);
    }
}

function addContent(itemIndex) {
    document.getElementById('header').innerHTML = recipies[itemIndex].name;
    document.getElementById('intro').innerHTML = recipies[itemIndex].intro;
    document.getElementById('picture').src = recipies[itemIndex].picture;
    document.getElementById('picture').alt = recipies[itemIndex].name;

    const elmIng = document.getElementById('ingredients');
    elmIng.innerHTML = ""; // Clear content
    const ing = recipies[itemIndex].ingredients;
    const ingLength = ing.length;
    for (let i = 0; i < ingLength; i++){
        let ingItem = document.createElement('li');
        let ingItemText = document.createTextNode(ing[i]);
        ingItem.appendChild(ingItemText);
        elmIng.appendChild(ingItem);
    }

    const elmProc = document.getElementById('procedure');
    elmProc.innerHTML = ""; // Clear content
    const steps = recipies[itemIndex].procedure;
    const stepsLength = steps.length;
    for (let i = 0; i < stepsLength; i++) {
        let stepItem = document.createElement('li');
        let stepItemText = document.createTextNode(steps[i]);
        stepItem.appendChild(stepItemText);
        elmProc.appendChild(stepItem);
    }

    // set rating
    const maxRating = 6;
    const rating = recipies[itemIndex].rating;
    let ratingStars = "";
    for (let i = 0; i < maxRating; i++){
        if (rating > i) {
            ratingStars += '★';
        } else {
            ratingStars += '☆';
        }
    }
    document.getElementById('rating').innerHTML = ratingStars;

}

window.onload = function(){
    buildNavigation();
    addContent(0);
}


