const liveCamHour = () => {
  const now = new Date();
  const hour = now.getHours();
  const minute =now.getMinutes();
  document.getElementById("live-cam-hour").textContent =
    `販売所のライブ映像(${hour}:${minute})`;
};

liveCamHour();
