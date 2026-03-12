async function loadHeader(){
  const res = await fetch("/components/header.html");
  const html = await res.text();
  document.getElementById("header").innerHTML = html;
}

loadHeader();

async function loadFooter() {
    const res = await fetch("/components/footer.html");
    const html = await res.text();
    document.getElementById("footer").innerHTML = html;
}

loadFooter();