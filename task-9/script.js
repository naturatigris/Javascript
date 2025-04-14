const wrapper = document.querySelector(".wrapper");
const content = document.querySelector("#content");

let page = 1;
let isLoading = false;

async function loadMoreContent() {
  if (isLoading) return;
  isLoading = true;

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`);
    const data = await response.json();

    data.forEach(post => {
      const div = document.createElement("div");
      div.style = "padding: 20px; margin:0; background: #eee;";
      div.innerHTML = `<h4>${post.title}</h4><p>${post.body}</p>`;
      content.appendChild(div);
    });

    page++;
  } catch (err) {
    console.error("Error loading content:", err);
  }

  isLoading = false;
}

// Load initial content
loadMoreContent();

wrapper.addEventListener("scroll", () => {
  if (wrapper.scrollTop + wrapper.clientHeight >= wrapper.scrollHeight - 100) {
    loadMoreContent();
  }
});
