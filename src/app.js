import { filterPosts, posts } from "./posts.js";

const postsContainer = document.querySelector("#posts");
const searchInput = document.querySelector("#search");
const resultSummary = document.querySelector("#result-summary");

function postCard(post) {
  return `
    <article class="post-card">
      <p class="post-meta">${post.category}</p>
      <h3>${post.title}</h3>
      <p>${post.excerpt}</p>
    </article>
  `;
}

function render(query = "") {
  const visiblePosts = filterPosts(posts, query);
  resultSummary.textContent = `${visiblePosts.length} ${visiblePosts.length === 1 ? "note" : "notes"}`;
  postsContainer.innerHTML = visiblePosts.length
    ? visiblePosts.map(postCard).join("")
    : '<p class="empty-state">No notes match this search.</p>';
}

searchInput.addEventListener("input", (event) => render(event.target.value));
render();
