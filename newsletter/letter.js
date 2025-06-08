document.addEventListener("DOMContentLoaded", () => {
  const md = window.markdownit();
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) {
  document.getElementById("letter-content").innerHTML = "<p>뉴스레터를 찾을 수 없습니다.</p>";
    return;
  }

  fetch(`${id}.md`)
    .then(res => res.text())
    .then(text => {
      const html = md.render(text);
      document.getElementById("letter-content").innerHTML = html;
    })
    .catch(() => {
      document.getElementById("letter-content").innerHTML = "<p>본문을 불러오는 데 실패했습니다.</p>";
    });
});
