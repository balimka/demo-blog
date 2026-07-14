import { findPostById, posts } from "./posts.js";

const articleStatus = document.querySelector("#article-status");
const articleDetail = document.querySelector("#article-detail");
const articleCategory = document.querySelector("#article-category");
const articleTitle = document.querySelector("#article-title");
const articleExcerpt = document.querySelector("#article-excerpt");
const articleBody = document.querySelector("#article-body");

const postId = new URLSearchParams(window.location.search).get("id");
const post = findPostById(posts, postId);

if (!post) {
  document.title = "Note not found · Signal / Notes";
  articleStatus.textContent = "This note could not be found. Return to all notes and choose another article.";
} else {
  document.title = `${post.title} · Signal / Notes`;
  articleCategory.textContent = post.category;
  articleTitle.textContent = post.title;
  articleExcerpt.textContent = post.excerpt;
  articleBody.textContent = post.body;
  articleDetail.hidden = false;
}
