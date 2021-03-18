
console.log('javascript file')

let icon = document.getElementById('sub-icon')
let subCateList = document.getElementsByClassName('sub-cate-List')

icon.addEventListener('click', function (value) {
    subCateList[0].classList.toggle('showList')
})


let myRange = document.getElementById('myRange');
let showPrice = document.getElementById('show-price')

myRange.addEventListener('input', function () {
    showPrice.innerHTML = myRange.value;
})


// collapsible

let BrandType = document.getElementsByClassName('BrandType');
 
BrandType[0].addEventListener('click', function () {

    let content = document.getElementsByClassName('content');
     
    if (content[0].style.display === "block") {
        content[0].style.display = "none";
      } else {
        content[0].style.display = "block";
      }

})


// serach for Brand

let search = document.getElementById('search')
let checkBox = document.getElementsByClassName('checkBox')
let fillter ;
let BrandName;
let BrandInner; 
let textValue;

function myFunction(params) {
    
    fillter = search.value.toUpperCase();
    BrandName = document.getElementsByClassName('BrandName');

  for (let i = 0; i < BrandName.length; i++) {

      const element = BrandName[i].getElementsByTagName('h5')[0];

      textValue =  element.textContent || element.innerText;

      if(textValue.toUpperCase().indexOf(fillter) > -1 ){
        BrandName[i].style.display ="";
        checkBox[i].style.display ="";
      }else{
        BrandName[i].style.display ="none";  
        checkBox[i].style.display ="none";  
      }
     
  }



    
}

  // checkbox fillter start

  let BrandList = document.querySelectorAll(".cardsBox");
  console.log(BrandList)

  //setup click event handlers on our checkboxes
var checkBoxes = document.querySelectorAll(".BrandList .BrandBox .checkBox input");
console.log(checkBoxes)

for(var i =0; i < checkBoxes.length; i++){
  checkBoxes[i].addEventListener('click', fillterCheck)
}


function fillterCheck(e) {

  let curentChek = e.target;

  if(curentChek.checked == true){
      showHideHandel(curentChek.value, "showeBox")
  }else if(curentChek.checked == false){
    showHideHandel(curentChek.value, "hideBox")
  }

}

function showHideHandel(checkvalue, addClass) {
  
   for(var i =0; i < BrandList.length; i++){

    var currenitem = BrandList[i];

     if(currenitem.getAttribute("data-type") == checkvalue){
       addClassHandler(currenitem ,addClass)
     }

   }

}

function addClassHandler(elements,addClass ) {
  
   var currentClassValue = elements.className;
   console.log(currentClassValue)
   console.log(elements)
   console.log(addClass)

   if(currentClassValue.indexOf(addClass) == -1){
  
      elements.className  +=  " " + addClass
     }else{
      elements.className  +=  " " + addClass
     }

}

 // checkbox fillter End