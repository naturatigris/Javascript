const wrapper = document.querySelector(".wrapper");
const content = document.querySelector("#content");
const filter=document.getElementById("filter");

let page = 1;
let isLoading = false;

async function loadMoreContent() {
  if (isLoading) return;
  isLoading = true;

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`);
    const data = await response.json();
    filter.addEventListener("change", (e) => {
      console.log(e.target.value);
      console.log(data);
      data.forEach(post => {
        if ((post.title.includes(e.target.value))||(post.body.includes(e.target.value))){

        const div = document.createElement("div");
        div.style = "padding: 20px; margin:0; background: #eee;";
        div.innerHTML = `<h4>${post.title}</h4><p>${post.body}</p>`;
        content.appendChild(div);}
      });
      page++;

    

    })

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
