import assert from "node:assert/strict";
import test from "node:test";
import { filterPosts, posts } from "../src/posts.js";

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
