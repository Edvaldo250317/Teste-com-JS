const btn= document.getElementById("pulinho")
console.log(btn)


const ctct = document.querySelector('.ctct');


const jumpct = () => { 
    
    console.log("pulou")
    
    ctct.classList.add('jumpct');
    setInterval(() => {
        
        ctct.classList.remove('jumpct');
    }, 600);


}

document.addEventListener('keydown', jumpct);



