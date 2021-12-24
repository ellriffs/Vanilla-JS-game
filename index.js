const customer = document.getElementById('customer');
const amp = document.getElementById('amp');
let scoreCount = document.getElementById('score');

confirm(
  "'What it is mate'\n Can you avoid the Spider and finally get your refund?"
);

function jump() {
  customer.classList.add('animate');
  setTimeout(function () {
    customer.classList.remove('animate');
    if (scoreCount.value == 50) {
      alert(
        'GAME OVER!!! \nWhats the verdict fella?...\n We only do credit notes'
      );
    } else {
      scoreCount.value++;
    }
  }, 700);
}

console.log(scoreCount);
