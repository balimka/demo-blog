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
    body:
      "Meeting notes often record who said what. A decision log captures the problem, the options considered, the chosen direction, the owner, and the date when the team should revisit the choice. That structure gives future teammates enough context to challenge or extend the decision without repeating the entire discussion. " +
      "A useful log starts with the situation that forced a choice. It explains the constraints, the evidence available at the time, and the alternatives the team rejected. It does not need to reproduce every comment from the meeting. The goal is to preserve the trade-off so that someone joining months later can understand why the current design exists. " +
      "Good decision records also make uncertainty visible. They separate facts from assumptions, name the risks the team accepted, and describe the signal that would justify changing course. A short review date prevents a temporary workaround from quietly becoming permanent architecture. Links to experiments, diagrams, pull requests, and customer feedback provide deeper detail without making the primary record difficult to scan. " +
      "Keep the document close to the work, use language that a new teammate can follow, and update its status when reality changes. The record is not a contract that prevents future disagreement. It is a starting point for a better disagreement, because the next conversation can build on the reasoning that already happened instead of guessing at it.",
  },
  {
    id: "test-signals",
    title: "Tests should explain the risk they protect",
    category: "Quality",
    excerpt: "A readable test suite is an executable map of product risk.",
    body:
      "A good test name describes the behavior and the failure that matters. Prefer a few strong assertions around public behavior to many assertions about implementation details. When a test fails, it should guide the next investigation instead of creating more ambiguity. " +
      "Start with the risk that would hurt a user or slow the team down. A checkout test might protect the rule that a confirmed payment creates exactly one order. A search test might protect the combination of a query and a category filter. Naming that risk keeps the suite connected to product behavior instead of the current shape of the code. " +
      "Strong tests arrange only the context the behavior needs, perform one meaningful action, and assert the observable result. They avoid reaching into private state when a public outcome can prove the same thing. This makes refactoring safer because the implementation can change without forcing the team to rewrite tests that never represented a user-facing promise. " +
      "Coverage numbers can reveal an obvious gap, but they cannot tell whether the important scenarios are protected. A small suite around boundaries, failure paths, and business rules often gives more confidence than hundreds of shallow assertions. Include empty states, one-item states, combined inputs, and the point where a value crosses a meaningful threshold. Use generated data only when it makes the intent clearer rather than hiding it. " +
      "Failure messages are part of the developer experience. Compare values that explain the difference, keep fixtures readable, and avoid unrelated assertions in the same case. If a test can fail for five independent reasons, the next person has to investigate all five before learning what changed. Focused tests shorten that loop. " +
      "Fast feedback matters as much as correctness. Keep pure business logic independent from the browser, network, and clock whenever possible. Run those checks on every small edit, then use a smaller number of integration and browser tests to confirm that the pieces work together. The layers should complement one another rather than duplicate the same assertions at increasing cost. " +
      "A flaky test is not harmless noise. It teaches developers to rerun failures until they disappear and makes real regressions easier to ignore. Treat nondeterminism as a defect: control time, isolate shared state, remove order dependencies, and wait for observable conditions rather than arbitrary delays. Quarantine may protect the delivery pipeline briefly, but it should come with an owner and a deadline. " +
      "Review tests with the same care as production code. Ask what risk the case protects, whether the setup communicates that risk, and whether the assertion would catch a realistic regression. Delete cases that only repeat another test or freeze an irrelevant implementation detail. Add a regression test when a defect exposes a missing boundary. Over time, the suite becomes an executable map of the system's promises and the evidence the team uses to change it confidently.",
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
