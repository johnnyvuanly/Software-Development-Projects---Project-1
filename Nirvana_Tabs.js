// alert('Testing connection to html')

let songInput = document.querySelector('#song_search')
let searchButton = document.querySelector("search")

searchButton.addEventListener('click', function() {
    let userSongSearch = songInput.value

    url = `http://www.songsterr.com/a/ra/songs/byartists.xml?artists=Metallica`
})