var audio=document.querySelector("audio")
var previous=document.querySelector("#previous")
var pp=document.querySelector("#play")
var next=document.querySelector("#next")
var input=document.querySelector("input")
var storage=["./metallic.mp3","./night.mp3","./party.mp3","./people.mp3","./popular.mp3","./khel.mp3"]
var storage2=["./metallica.jpg", "./night.jpg" , "./party.jpg" , "./people.jpg","./popular.jpg","./khel.jpg"]
var img=document.querySelector("img")
var index=0

function playthis(){
    audio.src=storage[index]
    img.src=storage2[index]
    audio.play()
    pp.innerHTML="pause"
}

pp.addEventListener("click",()=>{
    if(audio.paused){
        playthis()
    }
    else{
        audio.pause()
        pp.innerHTML="play"
    }
})
next.addEventListener("click",()=>{
    index=(index+1) % storage.length
    // audio.src=storage[index]
    // audio.play()
    // pp.innerHTML="pause"
    playthis()
})
previous.addEventListener("click",()=>{
    index=(index-1+storage.length)%storage.length
    playthis()
})
input.addEventListener("input",()=>{
    audio.volume=input.value
})

audio.addEventListener("ended",()=>{
    index=(index+1) % storage.length
    playthis()
})