let isOn = true;
setInterval(()=>{
    const rec =document.getElementById("rec-light");
    rec.textContent=isOn ? " REC🔴" :" ";
    isOn=!isOn;
},500)
