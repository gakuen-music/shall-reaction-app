const emotions = ["ouen", "kakkoii", "kandou", "moriagaru"];

emotions.forEach((emotion) => {
  document.getElementById(emotion).addEventListener("click", () => {
    if (document.body.classList.length > 0) {
      document.body.classList.remove(document.body.classList);
    }
    document.body.classList.add("_" + emotion);
  });
});
