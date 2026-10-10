const manilaTime = document.getElementById("manila-time");

function updateManilaTime() {
  const time = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Manila",
  }).format(new Date());

  manilaTime.textContent = `Manila • ${time}`;
}

updateManilaTime();
setInterval(updateManilaTime, 30000);