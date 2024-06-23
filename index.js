document.addEventListener('DOMContentLoaded', function() {
    const faqButtons = document.querySelectorAll('.FAQ__title');
  
    faqButtons.forEach(button => {
      button.addEventListener('click', function() {
        const faqVisible = this.nextElementSibling;
  
        // Toggle visibility of FAQ answer
        faqVisible.classList.toggle('FAQ__visible');
  
        // Toggle icon change
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');
      });
    });
  });
  