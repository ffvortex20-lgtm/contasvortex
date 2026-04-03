let completed = [false, false, false, false];

function complete(i, link) {
  window.open(link, "_blank");

  if (!completed[i - 1]) {
    completed[i - 1] = true;

    let task = document.getElementById("task" + i);
    task.classList.add("done");

    task.querySelector("button").innerText = "✔";
  }

  update();
}

function update() {
  let total = completed.filter(v => v).length;
  let percent = total * 25;

  document.getElementById("progress").style.width = percent + "%";
  document.getElementById("progressText").innerText = total + "/4 ações concluídas";
  document.getElementById("percent").innerText = percent + "%";

  if (total === 4) {
    let btn = document.getElementById("unlockBtn");
    btn.disabled = false;
    btn.classList.add("active");
    btn.innerText = "🔓 Desbloquear acesso";
  }
}

function unlock() {
  window.location.href = "downloads.html";
}
