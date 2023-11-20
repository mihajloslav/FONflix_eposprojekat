function hide(genre) {
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

function ToggleBurger() {
    const buttons = document.querySelectorAll(".nav-button");
    if (buttons[0].style.display == "none") {
      ShowBurgerButtons();
    } else {
      HideBurgerButtons();
    }
  }
  
  function ShowBurgerButtons() {
    const buttons = document.querySelectorAll(".nav-button");
    buttons.forEach((button) => {
      
        button.style.display = "unset";
      
    });
    const expand = document.querySelectorAll(".expand-on-mobile");
    expand[0].style.height = "100px";
  }
  
  function HideBurgerButtons() {
    const buttons = document.querySelectorAll(".nav-button");
    buttons.forEach((button) => {
      
        button.style.display = "none";
      
    });
    const expand = document.querySelectorAll(".expand-on-mobile");
    expand[0].style.height = "0px";
  }
  
  function viewForm() {
    if (window.innerWidth > 700) {

      ShowBurgerButtons();
              const expand = document.querySelectorAll(".expand-on-mobile");
        expand[0].style.height = "0px";
    } else {

      HideBurgerButtons();
    }
  }
  
  window.addEventListener("resize", viewForm);