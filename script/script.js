'use-strict'
//navigation
const btnCloseNavigation = document.getElementsByClassName('close_nav');

const openNavigation = document.getElementById('openNav')

const navigation =document.querySelector('.navigation')

openNavigation.addEventListener('click', ()=>{
    navigation.classList.toggle('display')
    // navigation.classList.remove('display_none')
 })


 const btnsCloseNavigation= [...btnCloseNavigation];
 btnsCloseNavigation.forEach(element => {
     element.addEventListener('click', ()=>{
         console.log("clickedjjj")
         navigation.classList.remove('display')
         navigation.classList.add('display_none')
      })
 });

//*********** */


const images = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg"
]
const productImageDisplay = document.getElementById('productImage');

const btnScrollRight = document.getElementById('scrollRight');

const btnScrollLeft = document.getElementById('scrollLeft');

let currentImage = 0;
const increment = ()=>{
    console.log(currentImage)
    productImageDisplay.src = images[currentImage];
    if(currentImage >= images.length -1) currentImage =0; 
    else currentImage ++;
    
}
  

const decrement = function (){
     


if(currentImage === 0){
    console.log(`******** decrement if ${currentImage}`)
    currentImage = images.length - 1;
    console.log(`******** decrement if ${currentImage}`)
     productImageDisplay.src =images[currentImage]
}else if(currentImage<=images.length - 1){
    console.log(`******** decrement esle if ${currentImage}`)
    currentImage--;
    productImageDisplay.src = images[currentImage]
}
   
}
btnScrollRight.addEventListener('click', ()=> increment(images) )

btnScrollLeft.addEventListener('click', ()=> decrement(images) )







// if (currentImage < images.length && !(currentImage >= images.length) ){
//     currentImage = currentImage || 1
//     productImageDisplay.src = images[currentImage]
//     currentImage +=1
//     console.log(currentImage)
// }else {
//     currentImage = 0
//     productImageDisplay.src = images[currentImage]
//     console.log(currentImage)
// }

