export const posts = [
  {
    id: "small-prs",
    title: "Small pull requests are a communication tool",
    category: "Engineering",
    excerpt: "A practical way to reduce review latency without trading away context.",
    body: "Small changes make intent visible. They make review easier, rollback safer, and feedback faster. The goal is not an arbitrary line limit. The goal is a coherent change that a reviewer can understand without reconstructing a week of decisions.",
  },
  {
    id: "decision-logs",
    title: "Write down the decision, not the meeting",
    category: "Collaboration",
    excerpt: "Decision logs preserve the useful part of a conversation: the trade-off.",
    body: "Meeting notes often record who said what. A decision log captures the problem, options, chosen direction, owner, and date to revisit. That structure gives future teammates enough context to challenge or extend the decision without repeating the entire discussion.",
  },
  {
    id: "test-signals",
    title: "Tests should explain the risk they protect",
    category: "Quality",
    excerpt: "A readable test suite is an executable map of product risk.",
    body: "A good test name describes the behavior and the failure that matters. Prefer a few strong assertions around public behavior to many assertions about implementation details. When a test fails, it should guide the next investigation instead of creating more ambiguity.",
  },
  {
    id: "feedback-loops",
    title: "Shorten the loop before adding more process",
    category: "Delivery",
    excerpt: "Fast feedback often solves the problem that another ceremony tries to contain.",
    body: "Before adding a checkpoint, measure how long it takes a developer to learn whether a change works. Faster tests, smaller environments, clearer ownership, and observable releases create better control than a process that only notices problems later.",
  },
  {
    id: "useful-docs",
    title: "Documentation starts at the next decision",
    category: "Collaboration",
    excerpt: "Useful docs help someone act; complete docs only describe what already exists.",
    body: "Start documentation with the next task a teammate must complete. Include the prerequisites, boundaries, example, and verification step. Then link deeper reference material. This keeps the primary path short while preserving detail for the cases that need it.",
  },
  {
    id: "boring-automation",
    title: "The best automation feels boring",
    category: "Delivery",
    excerpt: "Reliable automation removes a decision without hiding the outcome.",
    body: "Automation should make the safe path the easy path. Keep its inputs visible, failures actionable, and escape hatch explicit. If a script needs an expert every time it fails, it has moved the work rather than removed it.",
  },
];

export function filterPosts(items, query) {
  const normalizedQuery = query.trim().toLocaleLowerCase();
  if (!normalizedQuery) return items;

  return items.filter((post) => {
    const searchableText = `${post.title} ${post.category} ${post.excerpt}`.toLocaleLowerCase();
    return searchableText.includes(normalizedQuery);
  });
}
