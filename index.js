const pricingLink = document.querySelector('#pricing-link');
const pricingSection = document.querySelector('#pricing');


pricingLink.addEventListener('click', (e) => {
  e.preventDefault();
  pricingSection.scrollIntoView({ behavior: 'smooth' });
});


const emailForm = document.getElementById('email-form');
const emailFormStatus = document.getElementById('email-form-status');

emailForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  try {
    const response = await fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    if (response.ok) {
      emailFormStatus.textContent = 'Thank you for subscribing!';
      emailFormStatus.classList.add('text-success');
    } else {
      emailFormStatus.textContent = 'Error sending email. Please try again.';
      emailFormStatus.classList.add('text-danger');
    }
  } catch (error) {
    console.error(error);
    emailFormStatus.textContent = 'Error sending email. Please try again.';
    emailFormStatus.classList.add('text-danger');
  }
});

