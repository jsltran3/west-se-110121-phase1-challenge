// write your code here

const baseURL = 'http://localhost:3000/images/1'

const flatgram = document.querySelector(".image-container")

fetch(baseURL)

.then(res => res.json())

.then(instaPage);

const doggo = [

{

"id": 1,

"title": "Woofing those bugs away",

"likes": 0,

"image": "./assets/coder-dog.png",

"comments": [

{

"id": 1,

"imageId": 1,

"content": "What a cute dog!"

},

{

"id": 2,

"imageId": 1,

"content": "He's got a nose for bugs!"

},

{

"id": 3,

"imageId": 1,

"content": "Woof!"

}

]

}

]

function instaPage(picture){

const pic = document.querySelector('.title');

pic.textContent = "Woofing those bugs away"

pic.id = `id - ${picture.id}`

document.getElementById("card-image").src = "./assets/coder-dog.png";

const picDescription1 = document.querySelector('.comments');

pic.textContent = "What a cute dog!"

const picDescription2 = document.querySelector('.comments');

pic.textContent = "He's got a nose for bugs!"

const picDescription3 = document.querySelector('.comments');

pic.textContent = "Woof!"

}