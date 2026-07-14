import assert from "node:assert/strict";
import test from "node:test";
import { filterPosts, findPostById, posts } from "../src/posts.js";

test("finds a post by its stable id", () => {
  assert.equal(findPostById(posts, "decision-logs")?.title, "Write down the decision, not the meeting");
});

test("returns null when a post id is missing or unknown", () => {
  assert.equal(findPostById(posts, "does-not-exist"), null);
  assert.equal(findPostById(posts, ""), null);
});

test("returns all posts for an empty query", () => {
  assert.equal(filterPosts(posts, "").length, posts.length);
});

test("searches titles, categories, and excerpts without case sensitivity", () => {
  assert.deepEqual(filterPosts(posts, "QUALITY").map((post) => post.id), ["test-signals"]);
  assert.deepEqual(filterPosts(posts, "decision").map((post) => post.id), ["decision-logs", "useful-docs", "boring-automation"]);
});

test("returns an empty list when nothing matches", () => {
  assert.deepEqual(filterPosts(posts, "quantum bananas"), []);
});
