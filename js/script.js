document.addEventListener("DOMContentLoaded", function () {

  // Navigation functionality
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelectorAll('.nav-link')
        .forEach(l => l.classList.remove('active'));

      this.classList.add('active');

      document.querySelectorAll('.page')
        .forEach(page => page.classList.remove('active'));

      const pageId = this.getAttribute('data-page');
      document.getElementById(pageId).classList.add('active');

      window.scrollTo(0, 0);
    });
  });

  // Login modal functionality
  const loginBtn = document.getElementById('login-btn');
  const loginModal = document.getElementById('login-modal');
  const closeModalBtn = document.querySelector('.close-modal');

  loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
    setTimeout(() => {
      loginModal.classList.add('active');
    }, 10);
  });

  closeModalBtn.addEventListener('click', () => {
    loginModal.classList.remove('active');
    setTimeout(() => {
      loginModal.style.display = 'none';
    }, 300);
  });

  loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) {
      loginModal.classList.remove('active');
      setTimeout(() => {
        loginModal.style.display = 'none';
      }, 300);
    }
  });

});

    