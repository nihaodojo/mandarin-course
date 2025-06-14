document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('quizForm');
  const result = document.getElementById('result');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let score = 0;
    let total = 2;

    const answers = {
      q1: 'B',
      q2: 'C'
    };

    for (let q in answers) {
      const selected = form[q].value;
      if (selected === answers[q]) {
        score++;
      }
    }

    result.innerHTML = `<h3>You scored ${score}/${total}</h3>`;
  });
});
