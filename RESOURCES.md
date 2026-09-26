# Git & GitHub Resources

Curated, high-trust sources for this workspace. Lessons draw their knowledge
from here rather than from guesswork, and cite back to these links.

## Knowledge

- [Book: _Pro Git_ (2nd ed.) — Scott Chacon & Ben Straub](https://git-scm.com/book/en/v2)
  The canonical Git text, free online, CC-licensed, maintained in the open at
  [progit/progit2](https://github.com/progit/progit2). Use for: anything about what
  Git actually *is* — the object model, the three areas, branching, merging. Treat
  this as the tiebreaker when two sources disagree.
  - Ch. 1.3 [What is Git?](https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F) — snapshots vs. deltas, the three states, the three areas
  - Ch. 10.2 [Git Objects](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects) — what a commit object literally contains

- [GitHub Docs: GitHub flow](https://docs.github.com/en/get-started/using-github/github-flow)
  The vendor's own description of the branch → commit → pull request → review →
  merge → delete cycle. Use for: the collaboration layer that sits *on top of* Git,
  and for the exact terminology GitHub's own UI uses.

- [Learn Git Branching — Peter Cottle](https://learngitbranching.js.org/)
  Browser-based visual sandbox with progressive levels; no install needed. Use for:
  building intuition about branches and history as a shape, especially before
  merging and rebasing feel real. Source: [pcottle/learnGitBranching](https://github.com/pcottle/learnGitBranching).

- [Git reference manual (man pages)](https://git-scm.com/docs)
  Exhaustive and terse. Use for: settling exactly what a flag does. Not a place to
  learn from cold.

## Wisdom (Communities)

- [r/git](https://reddit.com/r/git)
  Focused subreddit for Git specifically — troubleshooting, workflow critique.
  Use for: "I got into this state, how do I get out."

- [GitHub Skills discussion board](https://github.com/orgs/skills/discussions/categories/introduction-to-github)
  The official help channel for the exercise this repository is based on.
  Use for: getting unstuck on the starter exercise itself.

- [Stack Overflow — `git` tag](https://stackoverflow.com/questions/tagged/git)
  Enormous archive of already-answered failure modes. Use for: searching an exact
  error message before asking anywhere else.

## Gaps

Not yet found — these drive future search:

- A high-trust source on **repository governance for compliance audiences**:
  branch protection, required reviews, signed commits, and CODEOWNERS framed as
  control evidence rather than as developer convenience. This is the bridge from
  this mission to the GRC goal and is currently unsourced.
- A well-regarded **community for security/GRC practitioners** where Git-as-audit-trail
  questions land better than they would in a developer forum.

## Notes on access

`git-scm.com` and `docs.github.com` are unreachable from this sandboxed session's
network, so their content was verified via the open-source mirrors
([progit/progit2](https://github.com/progit/progit2), [github/docs](https://github.com/github/docs)).
The links above are correct and work from a normal browser.
