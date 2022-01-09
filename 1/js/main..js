// get slider imges .
let getSlidImg = Array.from(document.querySelectorAll('.slid-container img'));
// set number of imges . 
let countImg = getSlidImg.length;
// set curnt slide . 
let curntSlide = 1;
// get slid Number . 
let getSlidNumber = document.getElementById('slid-number');
// get next button and perv button . 
let nextButton = document.getElementById('next');
let pervButton = document.getElementById('perv');

nextButton.onclick = nextslide;
pervButton.onclick = pervslide;
// Creat The Main UL Elemtent.  
let ulElement = document.createElement('ul');
// set attr to The Main UL .
ulElement.setAttribute('id', 'pagenation-ul');
for (let i = 1; i <= countImg; i++) {
    let liClied = document.createElement('li');
    liClied.setAttribute('data-index', i);
    liClied.appendChild(document.createTextNode(i));
    ulElement.appendChild(liClied);
}
// set new ul we created in div has class indecators .
document.getElementById('indecators').appendChild(ulElement);
// get new ul we created .
let getNewUl = document.getElementById('pagenation-ul');
// set li in var .
let pagentionPullets = Array.from(document.querySelectorAll('#pagenation-ul li'));
// lop to li items . 
for (let i = 0 ; i < pagentionPullets.length ; i++) {
    pagentionPullets[i].onclick = function() {
        curntSlide = parseInt(pagentionPullets[i].getAttribute('data-index')) ;
        checkslide();
    } 
}
console.log(curntSlide) ;
// call the function
checkslide();
function nextslide() {
    if (curntSlide === countImg) {
        // do nating 
    } else {
        curntSlide++ ;
        checkslide() ;
    }
}
function pervslide() {
    if (curntSlide === 1) {
        // do nating 
    } else {
        curntSlide-- ;
        checkslide() ;
    }
}
// funtion check slides 
function checkslide() {
     // chec if curntSlide equal 1 it's meen curntSlide is the firest then add class disapled to perv Button .
    if (curntSlide === 1) {
        pervButton.classList.add('disapled');
    } else {
        pervButton.classList.remove('disapled');
    }
    // chec if curntSlide equal length fo Array (countImg) it's meen curntSlide is the last then add class disapled to next Button .
    if (curntSlide === countImg) {
        nextButton.classList.add('disapled');
    } else {
        nextButton.classList.remove('disapled');
    }
    // set the side Number .
    getSlidNumber.textContent = 'Slide #' + (curntSlide) + ' of ' + (countImg);
    // Set class active on curent side .
    // call funtion remove itemes .
    remove();
    getSlidImg[curntSlide - 1].classList.add('active');
    // Set Active Calss on curent pagination items .
    getNewUl.children[curntSlide - 1].classList.add('active');
   
}
// functoin remove active class from  getslidImg .
function remove() {
    getSlidImg.forEach(function (item) {
        item.classList.remove('active');
    });
    pagentionPullets.forEach(function (pullet) {
        pullet.classList.remove('active');
    });
}



// //test 1 
// // get slider imges .
// let getImg = Array.from(document.querySelectorAll('.slid-container img')) ;
// let getSlidNumber = document.getElementById('slid-number') ;
// let countImg = getImg.length ;
// let curent = 1 ;
// let newUl = document.createElement('ul') ;
// newUl.setAttribute('id','pagention-id');
// for (let i = 1 ; i <= countImg ; i++ ) {
//     let  newLi = document.createElement('li') ;
//     newLi.setAttribute('data-index',i) ;
//     newLi.appendChild(document.createTextNode(i));
//     newUl.appendChild(newLi) ;
// }
// document.getElementById('indecators').appendChild(newUl);  
// let getpulets = Array.from(document.querySelectorAll('#pagention-id li')) ;
// for (let i = 0 ; i < getpulets.length; i++) {
//     console.log(getpulets[i]) ;
//     getpulets[i].onclick = function () {
//         curent = parseInt(this.getAttribute('data-index')) ;
//         check() ;
//     }
// }
// let perv =document.getElementById('perv') ;
// let next = document.getElementById('next') ;
// check() ;
// function check() {
//     remove () ;
//     if (curent === 1) {
//         perv.classList.add('disapled') ;
//     } else   {
//         perv.classList.remove('disapled') ;
//     }
//     if (curent === countImg) {
//         next.classList.add('disapled') ;
//     } else   {
//         next.classList.remove('disapled') ;
//     }
//     getSlidNumber.textContent = 'Slid # ' + curent + ' of ' + countImg ;
//     getpulets[curent - 1].classList.add('active') ; 
//     getImg[curent - 1].classList.add('active') ;
    
// }
// function remove () {
//     getpulets.forEach(function(item){
//         item.classList.remove('active') ;
//     });
//     getImg.forEach(function(pullet){
//         pullet.classList.remove('active') ;
//     });
// }
// function prevf () {
//     if (curent == 1) {
//         // do nothing
//     } else {
//         curent-- ;
//         check() ;
//     }
// }
// function nextf () {
//     if (curent == countImg) {
//         // do nothing
//     } else {
//         curent++ ;
//         check() ;
//     }
// }
// perv.onclick = prevf;
// next.onclick = nextf; 
