function hide(genre)
{
    let comedy = document.querySelector("#genrecomedy")
    let horror = document.querySelector("#genrehorror")
    let action = document.querySelector("#genreaction")
    if(genre == 1)
    {
        action.style.display = "block";
        horror.style.display = "block";
        comedy.style.display = "block";
    }
    if(genre == 2)
    {
        action.style.display = "block";
        horror.style.display = "none";
        comedy.style.display = "none";
    }
    if(genre == 3)
    {
        action.style.display = "none";
        horror.style.display = "block";
        comedy.style.display = "none";
    }
    if(genre == 4)
    {
        action.style.display = "none";
        horror.style.display = "none";
        comedy.style.display = "block";
    }
}

document.querySelector('.burger').addEventListener('click', function() {
    var sidebar = document.querySelector('.sidebar');
    if (sidebar.style.display === 'none') {
        sidebar.style.display = 'block';
    } else {
        sidebar.style.display = 'none';
    }
});
