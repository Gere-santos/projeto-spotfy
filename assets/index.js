const bancoMusicas =[
    {
    id:1,
    music:"./music/Armin.mp3", 
    artista:"Armin van Buuren",
    imagem:"./img/armin.jpg",
    nomeMusica:"Sunny Days"
    },{
        id:2,
        music:"./music/davidguetta.mp3", 
        artista:"David Guetta Ft Sia",
        imagem:"./img/davidguetta.jpg",
        nomeMusica:"Flames"
        },{
            id:3,
            music:"./music/martin.mp3", 
            artista:"Martin Garrix Ft Bebe Rexha",
            imagem:"./img/martin.jpg",
            nomeMusica:"In The Name of Love"
            },{
                id:4,
                music:"./music/nick.mp3", 
                artista:"Nick Romero ft Nervo",
                imagem:"./img/nickromero.jpg",
                nomeMusica:"Like Home"
                },{
                    id:5,
                    music:"./music/AaronSmith.m4a", 
                    artista:"Aaron Smith",
                    imagem:"./img/Aaron-Smith.jpg",
                    nomeMusica:"Dancing"
                    },{
                        id:6,
                        music:"./music/CatDealers.m4a", 
                        artista:"Cat Dealers",
                        imagem:"./img/Cat-Dealers.jpg",
                        nomeMusica:"Gone Too Long"
                        },{
                            id:7,
                            music:"./music/closer.m4a", 
                            artista:"The Chainsmokers",
                            imagem:"./img/The_Chainsmokers.jpg",
                            nomeMusica:"Closer"
                            },{
                                id:8,
                                music:"./music/Meduza.m4a", 
                                artista:"Meduza With Becky Hill & Goodboys ",
                                imagem:"./img/meduza.png",
                                nomeMusica:"Lose Control"
                                },{
                                    id:9,
                                    music:"./music/PanicAtTheDisco.mp3", 
                                    artista:"Panic At The Disco",
                                    imagem:"./img/panic.jpg",
                                    nomeMusica:"High Hopes Remix Nick Romero"
                                    },{
                                        id:10,
                                        music:"./music/Nelly.m4a", 
                                        artista:"Nelly",
                                        imagem:"./img/nelly.jpg",
                                        nomeMusica:"Just A Dream"
                                        },{
                                            id:11,
                                            music:"./music/Natalie.mp3", 
                                            artista:"Natalie Taylor",
                                            imagem:"./img/natalie.jpg",
                                            nomeMusica:"Surrender"
                                            },
]

let tagAudio = document.querySelector('.tagAudio');
const play = document.querySelector('.play');
const next = document.querySelector('.next-btn');
const previous = document.querySelector('.prev-btn');
const fotoArtista = document.querySelector('#fotoArtista');
const descricaoArtista = document.querySelector('.descricaoArtista');
const nomeMusica = document.querySelector('.nomeMusica');
const  inputVolume = document.querySelector('#inputVolume');
let tempoMusica = document.querySelector('.tempo-musica')
let iconPlayPause = document.querySelector('.fa-play')
const barra = document.querySelector('#range-player')
let tempoDecorrido = document.querySelector('.atualiza-barra')

let = guardaNumero = 0;

const loadContent = (guardaNumero = 0) =>{
const item = bancoMusicas[guardaNumero]
fotoArtista.src = item.imagem;
descricaoArtista.textContent = item.artista;
nomeMusica.textContent = item.nomeMusica;
tagAudio.src = item.music;
tagAudio.addEventListener('loadeddata', () => {
   barra.value = 0
   tempoMusica.textContent = segundosParaMinutos(Math.floor(tagAudio.duration));

});
}

loadContent()


const playMusic = ()=>{
          if(iconPlayPause.classList == 'fa-solid fa-play'){
          iconPlay()    
}
else if(iconPlayPause.classList !='fa-solid fa-play'){
    iconPause()    
}
}


const iconPlay = () =>{
    if(iconPlayPause.classList == 'fa-solid fa-play'){
        iconPlayPause.classList.remove('fa-play')
        iconPlayPause.classList.add('fa-pause')
        tagAudio.play()       
}
}

const iconPause = ()=>{
    if(iconPlayPause.classList !='fa-solid fa-play'){
        iconPlayPause.classList.remove('fa-pause')
             iconPlayPause.classList.add('fa-play')
             tagAudio.pause()       
    }

}

play.addEventListener('click', playMusic)

const nextBtn = ()=>{
    guardaNumero++
    if(guardaNumero>bancoMusicas.length -1){
    guardaNumero=0
   }
loadContent(guardaNumero)
tagAudio.play()
iconPlay()
}

const previousBtn = ()=>{
    guardaNumero--
    if(guardaNumero<0){
    guardaNumero = bancoMusicas.length-1
    }
    loadContent(guardaNumero)
    tagAudio.play()
    iconPlay()
}

const alterarVolume = ()=>{
    tagAudio.volume = inputVolume.value
}

const createList = (imagem, artista, nomeMusica, id)=>{
    const creatElement = document.createElement('tr')
   const tddocument = document.querySelector('#tableList2')
   tddocument.appendChild(creatElement)
    creatElement.innerHTML = `<tr>
    <td>${id}</td>
    <td class="img-flex"> <img src="${imagem}" alt="" class="img-icon" >
    <div class="descrica-artista-list td2"> <p> ${nomeMusica}</p><p>${artista}</p> </div></td>
    <td class="td3">${nomeMusica}</td>
    <td class="td4">Há 5 dias</td>
    <td class="td5">02:51</td>
  
</tr>`
}
const atualizaTela = () =>{
    bancoMusicas.forEach((valor )=>createList(valor.imagem, valor.artista, valor.nomeMusica, valor.id) )
}
atualizaTela()

const atualizaQtDmusica = ()=>{
   const item = document.createElement('p')
   document.querySelector('.lista-h1').appendChild(item)
   item.innerHTML=` <p class="usuario-musicas"> Geremias Francisco de Oliveira Santos. ${bancoMusicas.length} músicas</p>`
}
atualizaQtDmusica()

const atualizaBarra = ()=>{
   
    barra.value = Math.floor((tagAudio.currentTime / tagAudio.duration) * 100);
 tempoDecorrido.textContent = segundosParaMinutos(Math.floor(tagAudio.currentTime));
}



const segundosParaMinutos = (segundos)=>{
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}
//tagAudio.addEventListener('loadeddata', convertePminuto)


const retornarMusica = (evento)=>{
evento.preventDefault()
tagAudio.currentTime = 0
tagAudio.play()
}

const removeMenu = () => {
    let menu = document.querySelector('.menu-superior')
    menu.classList.add('invisible')
    
}

const tempoMusicaLista = () => {
    for (let i = 0; i < bancoMusicas.length; i++){
       let musicas = bancoMusicas[i].music
       let total = tagAudio.src = musicas
        console.log(total)
        tagAudio.addEventListener('loadeddata', () => {
            console.log(segundosParaMinutos(Math.floor(tagAudio.duration)));

        });
        
    }
}
tempoMusicaLista()

window.addEventListener('scroll', removeMenu)
tagAudio.addEventListener('timeupdate', atualizaBarra)
retornar.addEventListener('click', retornarMusica)

inputVolume.addEventListener('mousemove', alterarVolume)
next.addEventListener('click', nextBtn)
previous.addEventListener('click', previousBtn)

