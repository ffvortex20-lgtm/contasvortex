let completed = [false, false, false, false];

function complete(index, link) {
  window.open(link, "_blank");
  completed[index - 1] = true;
  updateProgress();
}

function updateProgress() {
  let count = completed.filter(v => v).length;
  let percent = (count / 4) * 100;

  document.getElementById("progress").style.width = percent + "%";
  document.getElementById("progressText").innerText = count + "/4 ações concluídas";
  document.getElementById("percent").innerText = percent + "%";

  if (count === 4) {
    let btn = document.getElementById("unlockBtn");
    btn.disabled = false;
    btn.classList.add("active");
  }
}

function unlock() {
  window.location.href = "downloads.html";
}
