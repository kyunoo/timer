// 기본 타이머 및 차단 로직 뼈대
let timeLeft = 1500;
let timerId = null;

document.getElementById('startBtn').addEventListener('click', () => {
  if (timerId) return;
  timerId = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      let m = Math.floor(timeLeft / 60);
      let s = timeLeft % 60;
      document.getElementById('timer').innerText = `${m}:${s < 10 ? '0' : ''}${s}`;
    }
  }, 1000);
});

document.getElementById('resetBtn').addEventListener('click', () => {
  clearInterval(timerId);
  timerId = null;
  timeLeft = 1500;
  document.getElementById('timer').innerText = "25:00";
});

document.getElementById('blockBtn').addEventListener('click', () => {
  const site = document.getElementById('siteInput').value;
  if (!site) return;
  alert(site + " 차단 규칙이 등록되었습니다!");
});
