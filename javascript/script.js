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