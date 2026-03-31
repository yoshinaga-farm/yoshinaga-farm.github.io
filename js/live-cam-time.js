const liveCamHour = () => {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  const msec = now.getMilliseconds();
  
  document.getElementById("live-cam-hour").textContent =
    `販売所のライブ映像(${hour}:${minute}:${second}.${msec})`;
};

liveCamHour();

setInterval(liveCamHour, 1);
