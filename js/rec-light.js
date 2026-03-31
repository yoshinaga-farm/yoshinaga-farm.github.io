let isOn = true;
setInterval(()=>{
    const rec =document.getElementById("rec-light");
    rec.textContent=isOn ? "🔴" :" ";
    isOn=!isOn;
},500)
