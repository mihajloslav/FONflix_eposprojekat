const hide = (genre) =>{
    let comedy = document.querySelector("#genrecomedy");
    let horror = document.querySelector("#genrehorror");
    let action = document.querySelector("#genreaction");

    action.style.display = "none";
    horror.style.display = "none";
    comedy.style.display = "none";

    switch(genre) {
        case 1:
            action.style.display = "block";
            horror.style.display = "block";
            comedy.style.display = "block";
            break;
        case 2:
            action.style.display = "block";
            break;
        case 3:
            horror.style.display = "block";
            break;
        case 4:
            comedy.style.display = "block";
            break;
    }
}

const ToggleBurger = ()  =>{
    const buttons = document.querySelectorAll(".nav-button");
    if (buttons[0].style.display == "none") {
        _showbuttons();
    } else {
        _hidebuttons();
    }
}
  
const _showbuttons = () => {
    const list_items = document.querySelectorAll(".navbar-li");
    const buttons = document.querySelectorAll(".nav-button");
    const expand = document.querySelectorAll(".expand-on-mobile");
    list_items.forEach((li) => {
        li.style.display = "block";
    })
    buttons.forEach((button) => {
        button.style.display = "unset";
    });
    expand[0].style.height = "150px";
}
  
const _hidebuttons = () => {
    const list_items = document.querySelectorAll(".navbar-li");
    const buttons = document.querySelectorAll(".nav-button");
    const expand = document.querySelectorAll(".expand-on-mobile");
    list_items.forEach((li) => {
        li.style.display = "none";
    })
    buttons.forEach((button) => { 
        button.style.display = "none";  
    });
    expand[0].style.height = "0px";
  }
  
const Resize= () => {
    if (window.innerWidth > 700) {
        _showbuttons();
        const expand = document.querySelectorAll(".expand-on-mobile");
        expand[0].style.height = "0px";
    } 
    else {
        _hidebuttons();
    }
}
  
window.addEventListener("resize", Resize);