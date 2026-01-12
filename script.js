const members = [
  ["서연","https://i.imgur.com/NByQjvp.jpeg"],
  ["혜린","https://i.imgur.com/p4pNO8L.jpeg"],
  ["지우","https://i.imgur.com/Fsm7x4B.jpeg"],
  ["채연","https://i.imgur.com/rllLvQ0.jpeg"],
  ["유연","https://i.imgur.com/Erk3M2Q.jpeg"],
  ["수민","https://i.imgur.com/SQABOYC.jpeg"],
  ["나경","https://i.imgur.com/ZIWNMdW.jpeg"],
  ["유빈","https://i.imgur.com/qUIfBPJ.jpeg"],
  ["카에데","https://i.imgur.com/zinTMy6.jpeg"],
  ["다현","https://i.imgur.com/XFOpGHL.jpeg"],
  ["코토네","https://i.imgur.com/7hLlcWU.jpeg"],
  ["연지","https://i.imgur.com/oZlgRIr.jpeg"],
  ["니엔","https://i.imgur.com/P9xCpCZ.jpeg"],
  ["소현","https://i.imgur.com/jc7iZ2q.jpeg"],
  ["신위","https://i.imgur.com/szjM0aE.jpeg"],
  ["마유","https://i.imgur.com/PfxEvRH.jpeg"],
  ["린","https://i.imgur.com/kZDR0XH.jpeg"],
  ["주빈","https://i.imgur.com/p2cT3qf.jpeg"],
  ["하연","https://i.imgur.com/f3oZyj0.jpeg"],
  ["시온","https://i.imgur.com/VPyJ8vf.jpeg"],
  ["채원","https://i.imgur.com/bLXoHJF.jpeg"],
  ["설린","https://i.imgur.com/H0LlgNS.jpeg"],
  ["서아","https://i.imgur.com/dwk548L.jpeg"],
  ["지연","https://i.imgur.com/0sYaKD6.jpeg"]
];

const inputs = document.getElementById("inputs");
const resultList = document.getElementById("resultList");

members.forEach((m,i)=>{
  inputs.innerHTML+=`
  <div class="member-control">
    <div class="member-header">
      <img src="${m[1]}"><strong>${m[0]}</strong>
    </div>
    <input type="range" min="0" max="100" value="50" id="r${i}">
    <textarea id="t${i}"></textarea>
  </div>`;

  resultList.innerHTML+=`
  <div class="card">
    <img src="${m[1]}">
    <div class="content">
      <div class="bar"><div class="bar-inner" id="b${i}"></div></div>
      <div class="result-text" id="o${i}"></div>
    </div>
  </div>`;
});

function generate(){
  document.getElementById("otpOut").textContent =
    document.getElementById("otpIn").value;

  members.forEach((_,i)=>{
    const v=document.getElementById("r"+i).value;
    document.getElementById("b"+i).style.width=v+"%";
    document.getElementById("o"+i).textContent=
      document.getElementById("t"+i).value;
  });

  controls.style.display="none";
  result.style.display="block";
}

async function saveImage(){
  const canvas = await html2canvas(capture,{scale:2});
  const a=document.createElement("a");
  a.href=canvas.toDataURL();
  a.download="triples.png";
  a.click();
}
