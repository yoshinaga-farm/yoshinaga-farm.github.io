const liveCamHour = () => {
  const now = new Date();
  const hour = now.getHours().toString().padStart(2, "0");
  const minute = now.getMinutes().toString().padStart(2, "0");
  const second = now.getSeconds().toString().padStart(2, "0");
  const msec = now.getMilliseconds().toString().padStart(3, "0");

  document.getElementById("live-cam-hour").textContent =
    `販売所のライブ映像(${hour}:${minute}:${second}.${msec})`;
};

liveCamHour();

setInterval(liveCamHour, 16);
