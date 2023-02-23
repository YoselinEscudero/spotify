const cardTop = document.querySelector('#cardTop').content
const contenido = document.querySelector('#contenido')
const fragment = document.createDocumentFragment()
let topTwoHundred = []


document.addEventListener('DOMContentLoaded', () => {
    loadMusicData()
})

const loadMusicData = () =>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9ccfd38edcmshe7fc87b2983adc8p193814jsna6359473359d',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks', options)
        .then(response => response.json())
        .then(response => {
            topTwoHundred = response
            creaCards()
            console.log('canciones', topTwoHundred)

        })
        .catch(err => console.error(err));
}

const creaCards = () => {
    topTwoHundred.forEach((song) => {
        cardTop.querySelector('img').setAttribute('src', song.trackMetadata.displayImageUri)
        cardTop.querySelector('.songname').textcontent = song.trackMetadata.trackName
        const clone = cardTop.cloneNode(true)
        fragment.appendChild(clone)
     })
    contenido.appendChild(fragment)

}