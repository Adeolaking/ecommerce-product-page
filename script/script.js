'use-strict'
//navigation
const btnCloseNavigation = document.getElementsByClassName('close_nav');

const openNavigation = document.getElementById('openNav')

const navigation =document.querySelector('.navigation')

openNavigation.addEventListener('click', ()=>{
    navigation.classList.add('display')
    navigation.classList.remove('display_none')
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
const increment = function (images){
    console.log("Gbass Gboss")
    console.log(currentImage)

    if (currentImage < images.length && !(currentImage >= images.length) ){
        currentImage = currentImage || 1
        productImageDisplay.src = images[currentImage]
        currentImage +=1
        console.log(currentImage)
    }else {
        currentImage = 0
        productImageDisplay.src = images[currentImage]
        console.log(currentImage)
    }
    console.log(currentImage)

}
  

const decrement = function (images){
    
//  ;
//  console.log(currentImage)

if(currentImage != 0){
     productImageDisplay.src = images[currentImage]
   currentImage -=1
}else{
    productImageDisplay.src = images[currentImage]
    currentImage= currentImage || (images.length - 1)
}
   
}
btnScrollRight.addEventListener('click', ()=> increment(images) )

btnScrollLeft.addEventListener('click', ()=> decrement(images) )







