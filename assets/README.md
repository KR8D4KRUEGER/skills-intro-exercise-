# Components

Reusable pieces shared across every lesson and reference document. **Read this
before authoring a lesson** — build from what is here, and add to it rather than
inlining anything a second lesson would want.

| File | What it is | How to use |
| --- | --- | --- |
| `lesson.css` | The house style: typography, palette, sidenotes, callouts, tables, print rules. Light and dark. | Every lesson and reference doc links it. Never fork it. |
| `quiz.css` | Styles for the practice widgets. Depends on `lesson.css` variables. | Link alongside `quiz.js` on any lesson with practice. |
| `quiz.js` | Two widgets: a shuffled multiple-choice **retrieval quiz** with immediate feedback and a running score, and a **free-recall** prompt with a reveal button. | See the comment block at the top of the file for the exact markup. |

## Class vocabulary provided by `lesson.css`

- `.masthead` / `.eyebrow` / `.standfirst` — the header block of a document
- `.keyidea` with a `<span class="label">` — the one thing to remember
- `.sidenote` — an aside that should not interrupt the main line of argument
- `.dothis` — a numbered list of real-world actions to take away from the screen
- `.footer` — next steps, sources, and the reminder to ask questions
- `.askme` — the "your teacher is right here" prompt every lesson ends with
- `.noprint` — hide from the printed page

## Rules

- Same word count for every quiz option. Formatting or length must never leak
  the answer.
- Everything must print well — these documents get revisited on paper.
- Relative links only (`../assets/…`), so the workspace stays portable.
