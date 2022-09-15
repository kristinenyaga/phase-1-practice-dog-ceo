console.log('%c HI', 'color: firebrick')
// document.addEventListener("DOMContentLoaded",()=>{
//   getImage()
// })

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

let dogList=document.querySelector("#dog-breeds")
dogList.addEventListener("click",handleClick)

let dogUl=document.querySelector("#dog-image-container")
let imageList=[]
let breedslist=[]

let dropdown=document.querySelector("#breed-dropdown")
dropdown.addEventListener("change",handleChange)


// function to add images to the dom
  function getImage(){  
  fetch(imgUrl)
  .then(response => response.json())
  .then(images => {
    
     let imgs=images.message
     imageList = createImgElement(imgs)
     renderImages(imageList)
  })
  }

// function to create img tag to add the urls
function createImgElement(imgs){
  return imgs.map(image =>{
    let i=`<img src="${image}">`
    return i
  })

// function to render images to the dom
}
 function renderImages(imageList){

  imageList.forEach(element => {
    dogUl.innerHTML+=element
    
  });
 }
// function to render breeds to the dom
 function getBreeds(){
  fetch(breedUrl)
  .then(response => response.json())
  .then(breeds => {
    
    breedslist=Object.keys(breeds["message"])
    let breedsReturned = createLiElement(breedslist)
    renderBreeds(breedsReturned)
 })
 }

 function  createLiElement(breedslist){
  return breedslist.map(breed =>{
    return `<li>${breed}</li>`

  })

 }

 function renderBreeds(breedsReturned){

  breedsReturned.forEach(element => {
    document.querySelector("#dog-breeds").innerHTML+=element
    
  });
 }
  //function to change color of the li onclick
 function handleClick(e){
  if(e.target.style.color === 'red'){
    e.target.style.color = 'black'
  }
  else
  {
    e.target.style.color = 'red'
  }
 }

//function to handle any change on the dropdown
function handleChange(e){
  const letter= e.target.value
  console.log(letter)

 const filteredBreed= breedslist.filter(breed =>{
    return breed.startsWith(letter)
  })
  let returnedFilter=createLiElement(filteredBreed)
  dogList.innerHTML=""
  renderBreeds(returnedFilter)
}



getImage()
getBreeds()