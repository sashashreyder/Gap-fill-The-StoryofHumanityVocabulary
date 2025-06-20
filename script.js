const checkBtn   = document.getElementById('check');
const blanks     = document.querySelectorAll('.blank');
const scoreEl    = document.getElementById('score');
const modal      = document.getElementById('modal');
const modalText  = document.getElementById('modal-text');
const closeModal = document.getElementById('close-modal');

checkBtn.addEventListener('click', () => {
  let correct = 0;
  const mistakes = [];

  blanks.forEach((b, idx) => {
    const input  = b.querySelector('input');
    const answer = b.dataset.answer.trim().toLowerCase();
    const value  = input.value.trim().toLowerCase();

    if (value === answer) {
      b.classList.add('correct');
      b.classList.remove('wrong');
      correct++;
    } else {
      b.classList.add('wrong');
      b.classList.remove('correct');
      mistakes.push(
        `<strong>Blank ${idx + 1}</strong>: “<em>${value || '—'}</em>” → <strong>${answer}</strong>`
      );
    }
  });

 
  let msg = `<p>You scored <strong>${correct} / ${blanks.length}</strong>.</p>`;
  if (mistakes.length) {
    msg += `<p>Mistakes:</p><ul><li>${mistakes.join('</li><li>')}</li></ul>`;
  } else {
    msg += `<p>Perfect! 🎉</p>`;
  }

  modalText.innerHTML = msg;
  modal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

