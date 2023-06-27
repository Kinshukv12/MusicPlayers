const audio = document.getElementById('music')
  const start = document.querySelector('.start')
  const end = document.querySelector('.end')
  const progressBar = document.querySelector('.progress-bar')
  const now = document.querySelector('.now')

  function conversion (value) {
    let minute = Math.floor(value / 60)
    minute = minute.toString().length === 1 ? ('0' + minute) : minute
    let second = Math.round(value % 60)
    second = second.toString().length === 1 ? ('0' + second) : second
    return `${minute}:${second}`
  }

  audio.onloadedmetadata = function () {
    end.innerHTML = conversion(audio.duration)
    start.innerHTML = conversion(audio.currentTime)
  }

  progressBar.addEventListener('click', function (event) {
    let coordStart = this.getBoundingClientRect().left
    let coordEnd = event.pageX
    let p = (coordEnd - coordStart) / this.offsetWidth
    now.style.width = p.toFixed(3) * 100 + '%'

    audio.currentTime = p * audio.duration
    audio.play()
  })

  setInterval(() => {
    start.innerHTML = conversion(audio.currentTime)
    now.style.width = audio.currentTime / audio.duration.toFixed(3) * 100 + '%'
  }, 1000)

  
  function playMusic(){
   
        console.log('play');
        if(audio.paused){
            audio.play();
        }
        else{
            audio.pause();
        }
    
}

function myFunc(x){
    x.classList.toggle("fa-play-circle");
    x.classList.toggle("fa-pause-circle");
}






  

  