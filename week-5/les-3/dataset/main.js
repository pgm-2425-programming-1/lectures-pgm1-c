(()  => {
    
    const $list = document.getElementById('list');

    function generateHTMLForMovie(movie){
        return `
            <li class="item" data-id="${movie.id}">
                <h2>${movie.title}</h2>
                <p>${movie.director}</p>
            </li>
        `
    }
    function generateHTMLForMovies(movies){
        let html = "";
        for(const movie of movies)
        {
            html += generateHTMLForMovie(movie);
        }
        return html;
    }


    $list.innerHTML = generateHTMLForMovies(movies);

    const $items = document.querySelectorAll('.item');

    for(const $item of $items){
        $item.addEventListener('click', function(e) {
            const id = e.currentTarget.dataset.id;
            let clickedMovie;
            for(const movie of movies){
                if(movie.id === id){
                    clickedMovie = movie;
                }
            }
            console.log(clickedMovie);
            window.alert(`Geklikt op ${clickedMovie.title} die ${clickedMovie.duration} minuten duurt`);
        })
    }


})();