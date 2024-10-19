document.addEventListener("DOMContentLoaded", () => {
  const screenBlur = document.querySelector(".screen-blur");
  const audio = document.getElementById("background-audio");
  const playBtn = document.getElementById("fingerprint");

  playBtn.addEventListener("click", () => {
    screenBlur.style.display = "none";
    audio.play();

    // Logic để xóa lớp 'not-loaded' sau khi nhấn nút playBtn
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1500);
  });
});
