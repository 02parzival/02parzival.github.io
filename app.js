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

function navCheck(entries){
    entries.forEach(entry =>{
        setTimeout(function(){
            if(entry.isIntersecting){
                type();
            }
        }, 1200)
  
    });
}

haruchat.forEach(chat => {
    observer.observe(chat);
});
