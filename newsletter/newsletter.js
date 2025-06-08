document.addEventListener("DOMContentLoaded", () => {
  fetch("newsletter.json")
    .then(res => res.json())
    .then(data => {
      const list = document.createElement("ul");
      data.forEach(newsletter => {
        const item = document.createElement("li");
        item.innerHTML = `<a href="letter.html?id=${newsletter.id}">${newsletter.title} <span>${newsletter.date}</span></a>`;
        list.appendChild(item);
      });
      document.getElementById("newsletter-list").appendChild(list);
    });
});
