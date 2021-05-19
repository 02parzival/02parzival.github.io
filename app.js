const optionItem = document.querySelector('.optionitem');
const optionImages = document.querySelectorAll('.optionitem img');
const optionContainer = document.querySelector('.optionitem-container');
const hqNav = document.querySelector('.hqNav');
const schNav = document.querySelector('#schNav');
const libNav = document.querySelector('.libNav');



//Button
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');

//Counter

const size = optionContainer.clientWidth;
let counter = 1;


optionItem.style.transform = 'translateX(' + (-size * counter) + 'px)';


nextBtn.addEventListener('click',function(){
    if (counter >= optionImages.length -1) return;
    optionItem.style.transition= 'transform 0.4s ease-in-out';
    counter ++;
    optionItem.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click',function(){
    if (counter <= 0) return;
    optionItem.style.transition= 'transform 0.4s ease-in-out';
    counter --;
    optionItem.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

optionItem.addEventListener('transitionend', function(){
    if (optionImages[counter].id === 'lastClone'){
        optionItem.style.transition = 'none';
        counter = optionImages.length -2;
        optionItem.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (optionImages[counter].id === 'firstClone'){
        optionItem.style.transition = 'none';
        counter = optionImages.length -counter;
        optionItem.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

});

hqNav.addEventListener('click', function(){
    window.location.href = "./pages/headquarter/headquarter.html";
});

schNav.addEventListener('click', function(){
    window.location.href = "./pages/school/school.html";
});

libNav.addEventListener('click', function(){
    window.location.href = "./pages/library/library.html";
});

const text = "Where do you want to go?";
let index = 0;
let chat = "";
let letter = "";

function type(){
    setTimeout(function(){
        if (letter.length !== text.length){
            letter = text.slice(0, ++index);
            document.querySelector('#chattext').textContent = letter;
            type();
        }
    }, 60);
}

const sections = document.querySelectorAll("section");
const haruchat = document.querySelectorAll(".haruchat")

const options = {
    threshold: 0.2
};

let observer = new IntersectionObserver(navCheck, options);
let functionOne = 0; /*limit function to only run once*/


function navCheck(entries){
    entries.forEach(entry =>{
        setTimeout(function(){
            if(entry.isIntersecting){
                if(functionOne===0){
                    type();
                    optionShow();
                    functionOne++;
                }

            }
        }, 1200);
    });
}


haruchat.forEach(chat => {
    observer.observe(chat);
});
