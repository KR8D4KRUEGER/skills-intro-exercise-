# Working Notes

Scratchpad for the user's stated preferences and my own reminders. Not a journal —
if something is decision-grade, it belongs in a learning record instead.

## Stated preferences

- **Session shape:** long, irregular sessions rather than short daily ones.
  Spacing will therefore be weak, so each lesson must carry its own retrieval
  practice, and every lesson after the first should open by pulling something
  back from the previous one.
- **Not a coder.** No application code in examples. Git commands only.
- **No deadline.** Optimise for storage strength, not for covering ground.

## Teaching reminders

- Route analogies through network security — hashing, integrity, chain of custody,
  least privilege. That vocabulary is already in place; Git's concepts can borrow it.
- Frame GitHub features as controls wherever it is honest to do so (branch
  protection = separation of duties, required review = approval gate, signed
  commits = non-repudiation). This is the bridge to the AI GRC goal and it makes
  otherwise-dry features memorable.
- Quiz options must be equal in word count. Never let length or phrasing hint at
  the answer.
- Read `assets/README.md` before authoring — build from existing components.

## Open threads

- `RESOURCES.md` has a live **Gaps** section: no trusted source yet for repository
  governance framed for a compliance audience, and no community where security/GRC
  practitioners discuss Git-as-evidence. Both need searching before the mission's
  governance-flavoured lessons can be properly grounded.
- Communities have not been raised with the user yet. Wisdom is the third leg of
  this workspace's philosophy, so propose one once the basic flow is comfortable —
  but drop it without argument if they decline.
- The repository this workspace lives in is a copy of GitHub's *Introduction to
  GitHub* exercise. Its four steps — branch, commit, pull request, merge — map
  almost exactly onto lessons 2 through 4, so it can serve as the real-world task
  those lessons attach to.

## Environment

- Sessions may run in a sandbox where `git-scm.com` and `docs.github.com` are
  blocked by the network proxy. Verify claims against the open-source mirrors
  (`progit/progit2`, `github/docs`) via `raw.githubusercontent.com`; the canonical
  links still belong in the lessons, since they work in the user's own browser.
