const btn = document.querySelector(".btn");
const video = document.querySelector(".background-video");
const preloader = document.querySelector(".preloader");
const fa = document.querySelector(".fa");

window.addEventListener("load",()=>{
    preloader.style.zIndex = "-2";
})

btn.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        fa.classList.add("fa-pause");
        fa.classList.remove("fa-play");
        btn.classList.remove("pause");
    } else {
        video.pause();
        fa.classList.remove("fa-pause");
        fa.classList.add("fa-play");
        btn.classList.add("pause");
    }
});

// btn.addEventListener("click",()=>{
//     if(video.classList.contains("pause")){
//         btn.classList.remove("pause");
//         video.play();
//         fa.classList.add("fa-pause");
//         fa.classList.remove("fa-play");
       

//     }
//     else{
       
//         // play.classList.toggle("fa-pause");
//         btn.classList.add("pause");
//         video.pause();
//         fa.classList.remove("fa-pause");
//         fa.classList.add("fa-play");
//     }
// });

// function videoStart(){
//     console.log("video played..");
//     play.classList.toggle("fa-pause");
// }

// pause.addEventListener("click",videoPause);

// function videoPause(){
   
// }
