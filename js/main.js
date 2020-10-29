
//Some test posts
const post = [
    post1 = { 
        name: "Chicken tikka",
        desc: "This is a dish originating from India",
        img: "img/demo_img.jpg",
        rating: 15,
        tags: ["chicken", "onion"]
    }, post2 = {
        name: "Chilli con cane",
        desc: "This is a latin american dish",
        img: "img/demo_img.jpg",
        rating: 5,
        tags: ["meat", "onion"]
    }, post3 = {
        name: "Meatballs",
        desc: "Swedish allround food",
        img: "img/demo_img.jpg",
        rating: 7,
        tags: ["meat", "onion"]
    }, post4 = {
        name: "Reetroot Soup",
        desc: "A traditional dish eaten by medival farmers",
        img: "img/demo_img.jpg",
        rating: 21,
        tags: ["beetroot", "cream"]
    }, post5 = {
        name: "Spagetti",
        desc: "Originally from Italy, this dish is everywhere",
        img: "img/demo_img.jpg",
        rating: 9,
        tags: ["eggs", "wheat"]
    }, post5 = {
        name: "Some other generic food",
        desc: "Some other generic desciption",
        img: "img/demo_img.jpg",
        rating: 1,
        tags: ["eggs", "cream"]
    }, post6 = {
        name: "More authentic dishes",
        desc: "This is a description of another generic food",
        img: "img/demo_img.jpg",
        rating: 2,
        tags: ["wheat", "cream"]
    }, post7 = {
        name: "Tacos",
        desc: "Some more latin american food",
        img: "img/demo_img.jpg",
        rating: 15,
        tags: ["meat", "onion"]
    }
]



//This is the relevant code

getNewPost = function(e) {
    //Define the post template
    const template = document.createElement("template");
    template.innerHTML = `
        <div class="post">
        <h3 id="name">${e.name}</h3>
        <img id="img" src=${e.img}>
        <p id="tags">${e.tags}</p>
        <p id="desc">${e.desc}</p>
        <button>Like</button> 
        <p id="rating" style="display: inline;">${e.rating}</p>
        <button>Comment</button>
        <p id="comments" style="display: inline;">0</p>
        </div>
    `

    //Print template
    const mydiv = document.querySelector("#recipies");
    mydiv.appendChild(template.content);
}

//Define which posts should be displayed
getNewSearchResult = function() {
    const elements = document.querySelectorAll(".post"); //Clear feed
    elements.forEach((e) => e.remove());

    const searchbar_input = document.querySelector("#searchbar").value;
    const search_filter_tags = searchbar_input.toLowerCase().split(" ");

    if(searchbar_input === "") location.reload(); //Ugly way to show all recepies if searchbar is empty
    
    //This creates a list of the best search results - specific
    let list_of_best_matches = new Array();
    post.forEach(function(e) { //Go through each post tag and return only posts that include ALLL searched tags
        if(JSON.stringify(search_filter_tags) === JSON.stringify(e.tags)) list_of_best_matches.push(e);
    });

    //This creates a list of the remaining hits - general
    let list_of_all_matches = new Array();
    post.forEach(function(e) { //Go through each searched tag and return all posts with AT LEAST one tag
        search_filter_tags.forEach(function(filter) {
            if(e.tags.includes(filter)) list_of_all_matches.push(e); 
        });
    });

    //Print the best matches on top of the remaining ones
    list_of_best_matches.forEach((e) => getNewPost(e));
    list_of_all_matches.forEach(function(e) {
        if(!list_of_best_matches.includes(e)) getNewPost(e); //To not print the same post twice
    });
}


/* Generate infinite Posts
window.onscroll = function(e) {    
    const last_post = document.querySelector(".post").lastChild;
    console.log(last_post);
    
    /* Enable this for infinite Posts
    while((window.innerHeight + pageYOffset) >= document.body.offsetHeight) {
        getNewPost(e);
    } 
    
}
*/

//Sort recepies, showing the most rated highest
post.sort(function(a, b) {return b.rating - a.rating});

//This prints all test posts by default
post.forEach((e) => getNewPost(e));



// json laod and read file


'use strict';

const fs = require('fs');

let recipie = {
    name: "Food",
    desc: "Description",
    img: "img/demo_img.jpg",
    rating: 5,
    tags: ["tag1", "tag2"]
};
console.log("hej we did it")

let data = JSON.stringify(recipie, null, 2);
fs.writeFileSync('json/Recipies.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});



fs.readFile('json/Recipies.json', (err, data) => {
    if (err) throw err;
    let recipies = JSON.parse(data);
    console.log(recipie);
});

console.log('This is after the read call');