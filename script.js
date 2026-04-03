let done = [false,false,false,false];

function go(i, link){
  window.open(link,"_blank");

  if(!done[i-1]){
    done[i-1] = true;

    let el = document.getElementById("t"+i);
    el.classList.add("done");

    el.querySelector("button").innerHTML = "✔";
  }

  update();
}

function update(){
  let total = done.filter(v=>v).length;
  let pct = total * 25;

  document.getElementById("barFill").style.width = pct+"%";
  document.getElementById("txt").innerText = total+"/4 ações";
  document.getElementById("pct").innerText = pct+"%";

  if(total === 4){
    let btn = document.getElementById("unlock");
    btn.disabled = false;
    btn.classList.add("active");
    btn.innerText = "🔓 Desbloquear";
  }
}

function openPage(){
  window.location.href = "downloads.html";
}
