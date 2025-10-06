var arr=[
    {
        song:"Pehle Bhi Main",
        url:"songs/Pehle Bhi Main.mp3",
        image:"images/animal.jpg",
        duration:"4:10",
    },
    {
        song:"Barbaad",
        url:"songs/Barbaad (PenduJatt.Com.Se).mp3",
        image:"images/barbaad.webp",
        duration:"5:34",
    },
    {
        song:"Zamana Lage",
        url:"songs/Zamaana Lage (PenduJatt.Com.Se).mp3",
        image:"images/zamaana-lage-from-metro-in-dino-pritam.webp",
        duration:"2:44",
    },
     {
        song:"Winning Speech",
        url:"songs/Winning Speech - Karan Aujla.mp3",
        image:"images/winning-speech-karan-aujla.webp",
        duration:"3:39",
    },
     {
        song:"Panwadi",
        url:"songs/Panwadi (PenduJatt.Com.Se).mp3",
        image:"images/panwadi-from-sunny-sanskari-ki-tulsi-kumari-khesari-lal-yadav.webp",
        duration:"4:34",
    },
    {
        song:"Wavy",
        url:"songs/Wavy - Karan Aujla.mp3",
        image:"images/wavy-karan-aujla.webp",
        duration:"4:15",
    },
     {
        song:"Dhun",
        url:"songs/Dhun (PenduJatt.Com.Se).mp3",
        image:"images/dhun.webp",
        duration:"3:24",
    },
     {
        song:"Saiyaara",
        url:"songs/Saiyaara (PenduJatt.Com.Se).mp3",
        image:"images/saiyara.webp",
        duration:"3:54",
    },
    {
        song:"Jale 2",
        url:"songs/Jale 2.mp3",
        image:"images/jale.jpg",
        duration:"2:39",
    },
     {
        song:"Courtside",
        url:"C:/Users/MICRO/Desktop/MERN15/SHERY YT/WEB D LEVEL 2/level2/youtubemusic/songs/Courtside - Karan Aujla.mp3",
        image:"images/courtside-karan-aujla.webp",
        duration:"2:34",
    },
    {
        song:"Ram Siya Ram",
        url:"songs/Ram Siya Ram.mp3",
        image:"images/ram.jpg",
        duration:"3:50",
    },
     {
        song:"Desi Kalakar",
        url:"songs/Desi Kalakaar (PenduJatt.Com.Se).mp3",
        image:"images/desi.jpg",
        duration:"6:30",
    },
    {
        song:"Arjan Vailly Ne",
        url:"songs/Arjan Vailly Ne.mp3",
        image:"images/animal.jpg",
        duration:"3:02",
    },
    {
        song:"Arz Kiya Hai",
        url:"songs/Arz Kiya Hai(KoshalWorld.Com).mp3",
        image:"images/anuv.jpg",
        duration:"5:07",
    },
     {
        song:"Aavan Javan",
        url:"songs/Aavan Jaavan War 2 128 Kbps.mp3",
        image:"images/aavan-jaavan-from-war-2-pritam.webp",
        duration:"3:45",
    },
    {
        song:"Admiring You",
        url:"songs/Admirin You - Karan Aujla.mp3",
        image:"images/courtside-karan-aujla.webp",
        duration:"3:48",
    },
    
]
//Always Remember / during the selection not \(backword slash)
var allSongs=document.querySelector("#all-songs")
var poster=document.querySelector("#left")
var play=document.querySelector("#play")
var backward=document.querySelector("#backward")
var forward=document.querySelector("#forward")
var audio=new Audio()
var selectedSong=0  //isme jis gaane par click hoga uski id aayegi save hogi fir uska image or url sab use kar lo
function mainFunction(){
var clutter=""
arr.forEach(function(obj,idx){
    clutter+=`<div class="song-card" id=${idx}>
    <div class="part1">
        <img src=${obj.image} alt="">
        <h2>${obj.song}</h2>
    </div>
    <h6>${obj.duration}</h6>
</div>`
})
//jo gana click kiya hai uski id(index) selectedSong me aayegi or fir uski image/url daal do
audio.src=arr[selectedSong].url //audio ke andar url daaal diya initially 0 hai selectedSong to pehle ka poster aayega
poster.style.backgroundImage=`url(${arr[selectedSong].image})`
//parent kon hai jiske andar saare songs the uske andar daal diya 
allSongs.innerHTML=clutter
}
mainFunction()


//Event Bubbling-
allSongs.addEventListener("click",function(dets){
//all songs ke andar kisko target kar rhe 
 if(dets.target.id){
    selectedSong=dets.target.id
    mainFunction()
    audio.play() //audio play kar diya
     play.innerHTML=`<i class="ri-pause-mini-fill"></i>`
     flag=1
     //isse play pause wali problem solve ho jayegi
 }
})


function playThroughBtn(){
    var flag=0
play.addEventListener("click",function(){
   if(flag==0){
     play.innerHTML=`<i class="ri-pause-mini-fill"></i>`
     mainFunction()
     audio.play()
     flag=1
   }
   else{
    play.innerHTML=`<i class="ri-play-fill"></i>`
    mainFunction()
     audio.pause()
    flag=0
   }
})
forward.addEventListener("click",function(){
  if(selectedSong<arr.length-1){
    selectedSong++
  mainFunction()
  audio.play()
  }
  else{
    forward.style.opacity=0.3
  }
})
backward.addEventListener("click",function(){
    if(selectedSong>0){
    selectedSong--
  mainFunction()
  audio.play()
  }
  else{
    backward.style.opacity=0.3
  }
})
}
playThroughBtn()