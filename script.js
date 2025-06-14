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

<!-- Firebase SDK -->
<script src="https://www.gstatic.com/firebasejs/10.12.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.1/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore-compat.js"></script>

// Firebase SDK config
const firebaseConfig = {
  apiKey: "AIzaSyBTd7XHWL76jNQhZ3btvlow-dQfEoR9yJs",
  authDomain: "mandarincourse-1c553.firebaseapp.com",
  projectId: "mandarincourse-1c553",
  storageBucket: "mandarincourse-1c553.firebasestorage.app",
  messagingSenderId: "573086580797",
  appId: "1:573086580797:web:cb3aa0a91d9f8164c2ea54",
  measurementId: "G-T2K8QDHFNQ"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
