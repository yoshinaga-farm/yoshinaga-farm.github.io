const loadHeader = async () => {
  const res = await fetch("/components/header.html");
  const html = await res.text();
  document.getElementById("header").innerHTML = html;
}

loadHeader();

const loadFooter = async () => {
  const res = await fetch("/components/footer.html");
  const html = await res.text();
  document.getElementById("footer").innerHTML = html;
}

loadFooter();