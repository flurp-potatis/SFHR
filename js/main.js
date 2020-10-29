
//Some test posts
const post = [
    { 
        name: "Chicken tikka",
        desc: "This is a dish originating from India",
        img: "img/demo_img.jpg",
        rating: 15,
        tags: ["chicken", "onion", "cream", "salt"],
        location: "hamburger.html"
    }, 
    {
        name: "Chilli con cane",
        desc: "This is a latin american dish",
        img: "img/demo_img.jpg",
        rating: 5,
        tags: ["meat", "onion", "cream", "chilli", "beans"],
        location: "hamburger.html"
    }, 
    {
        name: "Meatballs",
        desc: "Swedish allround food",
        img: "img/demo_img.jpg",
        rating: 7,
        tags: ["meat", "onion"],
        location: "hamburger.html"
    }, 
    {
        name: "Beetroot Soup",
        desc: "A traditional dish eaten by medival farmers",
        img: "img/demo_img.jpg",
        rating: 21,
        tags: ["beetroot", "cream", "salt"],
        location: "hamburger.html"
    }, 
    {
        name: "Spagetti",
        desc: "Originally from Italy, this dish is everywhere",
        img: "img/demo_img.jpg",
        rating: 9,
        tags: ["eggs", "flour"],
        location: "hamburger.html"
    },
    {
        name: "Some other generic food",
        desc: "Some other generic desciption",
        img: "img/demo_img.jpg",
        rating: 1,
        tags: ["eggs", "cream"],
        location: "hamburger.html"
    },
    {
        name: "More authentic dishes",
        desc: "This is a description of another generic food",
        img: "img/demo_img.jpg",
        rating: 2,
        tags: ["wheat", "cream"],
        location: "hamburger.html"
    },
    {
        name: "Tacos",
        desc: "Some more latin american food",
        img: "img/demo_img.jpg",
        rating: 15,
        tags: ["meat", "onion", "corn", "avocado", "tortilla"],
        location: "hamburger.html"
    },
    { 
        name: "Pad thai",
        desc: "A thailandian dish that tastes very good",
        img: "img/demo_img.jpg",
        rating: 15,
        tags: ["chicken", "onion", "soy", "nudles", "cucumber"],
        location: "hamburger.html"
    },
    {
        name: "Stroganoff",
        desc: "Swedish 'husmanskost'",
        img: "img/demo_img.jpg",
        rating: 5,
        tags: ["meat", "cream", "tomatosause"],
        location: "hamburger.html"
    },
    {
        name: "Falafal",
        desc: "Food originating from middleeastern culture",
        img: "img/demo_img.jpg",
        rating: 16,
        tags: ["chickpeas"],
        location: "hamburger.html"
    },
    {
        name: "Very simple guacamole",
        desc: "A traditional dish eaten by medival farmers",
        img: "img/demo_img.jpg",
        rating: 21,
        tags: ["avocado"],
        location: "hamburger.html"
    }, 
    {
        name: "Grandmas fruitsalad",
        desc: "How does these devises work???",
        img: "img/demo_img.jpg",
        rating: 25,
        tags: ["pears", "apples", "bananas", "melon","orange"],
        location: "hamburger.html"
    }, 
    {
        name: "Crab",
        desc: "scary creature with tasty inside",
        img: "img/demo_img.jpg",
        rating: 5,
        tags: ["crabmeat", "garlic","butter"],
        location: "hamburger.html"
    }, 
    {
        name: "Food from my neighbour",
        desc: "This comes from my neighbour",
        img: "img/demo_img.jpg",
        rating: 12,
        tags: ["cream", "onion","meat"],
        location: "hamburger.html"
    }, 
    {
        name: "Hamburger",
        desc: "Inspired from american food",
        img: "img/demo_img.jpg",
        rating: 39,
        tags: ["meat", "onion","lettuc","tomato","dressing","bread"],
        location: "hamburger.html"
    },
    //
    { 
        name: "Oatmeal",
        desc: "This is a basic breakfast",
        img: "img/demo_img.jpg",
        rating: 12,
        tags: ["wheat","water"],
        location: "hamburger.html"
    },
    {
        name: "Hotdog",
        desc: "Simple warm sosage",
        img: "img/demo_img.jpg",
        rating: 2,
        tags: ["hotdog", "bread"],
        location: "hamburger.html"
    },
    {
        name: "Pankakes",
        desc: "Flat, sweet pancakes",
        img: "img/raspberry.jpg",
        rating: 23,
        tags: ["flour", "milk","eggs","salt"],
        location: "hamburger.html"
    },
    {
        name: "Vegetable soup",
        desc: "A traditional dish eaten by medival farmers",
        img: "img/demo_img.jpg",
        rating: 18,
        tags: ["vegetables", "cream","water","spices"],
        location: "hamburger.html"
    },
    {
        name: "Pasta",
        desc: "Originally from Italy, this dish is everywhere",
        img: "img/demo_img.jpg",
        rating: 13,
        tags: ["eggs", "wheat"],
        location: "hamburger.html"
    },
    {
        name: "Rise bowl",
        desc: "originated frome china",
        img: "img/demo_img.jpg",
        rating: 3,
        tags: ["rise", "bowl"],
        location: "hamburger.html"
    },
    {
        name: "Burito",
        desc: "Packaged food",
        img: "img/demo_img.jpg",
        rating: 12,
        tags: ["tortilla", "meat","vegetables"],
        location: "hamburger.html"
    },
    {
        name: "Nut mix",
        desc: "Nuts in a mix",
        img: "img/demo_img.jpg",
        rating: 11,
        tags: ["peanuts","wallnuts"],
        location: "hamburger.html"
    }
]



//This is the relevant code

getNewPost = function(e) {
    //Define the post template
    const template = document.createElement("template");
    template.innerHTML = `
        <a href="${e.location}">
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
        <a>
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

/*
// Generate infinite Posts
window.onscroll = function(e) {    
    const last_post = document.querySelector(".post").lastChild;
    console.log(last_post);
    
    //Enable this for infinite Posts
    while((window.innerHeight + pageYOffset) >= document.body.offsetHeight) {
        getNewPost(e);
    } 
    
}
*/

//Define JSON 


//Sort recepies, showing the most rated highest
post.sort(function(a, b) {return b.rating - a.rating});

//This prints all test posts by default
post.forEach((e) => getNewPost(e));


