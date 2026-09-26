/* ---------------------------------------------------------------------------
   Practice widgets for lessons in this workspace. Zero dependencies.
   Include with:  <script src="../assets/quiz.js" defer></script>

   Retrieval quiz
   --------------
   <div class="quiz" data-quiz>
     <p class="q">Question text?</p>
     <ul class="opts">
       <li data-correct>The right answer</li>
       <li>A plausible wrong answer</li>
     </ul>
     <p class="why" hidden>Why the right answer is right.</p>
   </div>

   Options are shuffled on load, so authors may list the correct one first.
   Keep every option the same word count — formatting must not leak the answer.

   Free recall
   -----------
   <div class="recall" data-recall>
     <p class="q">Write it from memory, then check.</p>
     <div class="answer" hidden>The model answer.</div>
   </div>

   A textarea and a Reveal button are injected automatically.
   ------------------------------------------------------------------------ */

(function () {
  'use strict';

  function shuffle(items) {
    var a = items.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function buildQuiz(quiz, index, tally) {
    var list = quiz.querySelector('.opts');
    var why = quiz.querySelector('.why');
    if (!list) return;

    var label = document.createElement('span');
    label.className = 'qnum';
    label.textContent = 'Question ' + index;
    var question = quiz.querySelector('.q');
    if (question) question.insertBefore(label, question.firstChild);

    var options = shuffle(Array.prototype.slice.call(list.children));
    list.innerHTML = '';

    var answered = false;

    options.forEach(function (source) {
      var isCorrect = source.hasAttribute('data-correct');
      var li = document.createElement('li');
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'opt';
      button.innerHTML = source.innerHTML;

      button.addEventListener('click', function () {
        if (answered) return;
        answered = true;
        tally.record(isCorrect);

        Array.prototype.forEach.call(list.querySelectorAll('.opt'), function (b) {
          b.disabled = true;
        });
        button.classList.add(isCorrect ? 'correct' : 'wrong');
        if (!isCorrect) {
          var right = list.querySelector('[data-correct-btn]');
          if (right) right.classList.add('correct');
        }
        if (why) why.hidden = false;
      });

      if (isCorrect) button.setAttribute('data-correct-btn', '');
      li.appendChild(button);
      list.appendChild(li);
    });
  }

  function buildRecall(recall) {
    var answer = recall.querySelector('.answer');
    var box = document.createElement('textarea');
    box.setAttribute('placeholder', 'Answer from memory before revealing…');
    box.setAttribute('aria-label', 'Your answer');

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'reveal';
    button.textContent = 'Reveal answer';
    button.addEventListener('click', function () {
      if (answer) answer.hidden = false;
      button.remove();
    });

    if (answer) recall.insertBefore(box, answer);
    else recall.appendChild(box);
    recall.insertBefore(button, answer || null);
  }

  function makeTally() {
    var node = document.querySelector('[data-score]');
    var right = 0, done = 0, total = 0;
    return {
      setTotal: function (n) { total = n; },
      record: function (isCorrect) {
        done++;
        if (isCorrect) right++;
        if (node) node.textContent = right + ' / ' + done + ' correct' +
          (done === total ? ' — all questions answered' : '');
      }
    };
  }

  document.addEventListener('DOMContentLoaded', function () {
    var tally = makeTally();
    var quizzes = document.querySelectorAll('[data-quiz]');
    tally.setTotal(quizzes.length);
    Array.prototype.forEach.call(quizzes, function (quiz, i) {
      buildQuiz(quiz, i + 1, tally);
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-recall]'), buildRecall);
  });
})();
