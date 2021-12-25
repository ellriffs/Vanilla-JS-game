const customer = document.getElementById('customer');
const amp = document.getElementById('amp');
let scoreCount = document.getElementById('score');
const music = document.getElementById('music');

music.play();
confirm(
  "'What it is mate'\n Can you avoid the Spider and finally get your refund?"
);

function reset() {
  scoreCount.value = 0;
  music.src = 'Assets/BOS.mp3';
  music.play();
}

function jump() {
  customer.classList.add('animate');
  setTimeout(function () {
    customer.classList.remove('animate');
    if (scoreCount.value == 50) {
      alert(
        'GAME OVER!!! \nWhats the verdict fella?...\n We only do credit notes'
      );
      document.getElementById('music').src = '';
    } else if (scoreCount.value == 10 || scoreCount.value == 30) {
      document.getElementById('discount').style.visibility = 'visible';
      scoreCount.value++;
    } else if (scoreCount.value == 15 || scoreCount.value == 35) {
      document.getElementById('discount').style.visibility = 'hidden';
      scoreCount.value++;
    } else {
      scoreCount.value++;
    }
  }, 700);
}

console.log(scoreCount);
