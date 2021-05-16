const sections = document.querySelectorAll("sections");

const options ={
    threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
    entries.forEach(entry => {
        console.log(entry);
    });
}


sections.forEach(section =>{
    observer.observe(section);
});