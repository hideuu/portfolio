const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const sendButton = document.getElementById("send-message-button");

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  sendButton.disabled = true;
  formStatus.textContent = "Sending...";

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(contactForm))),
    });
    const data = await response.json();

    if (data.success) {
      formStatus.textContent = "Message sent. I'll reply soon.";
      contactForm.reset();
    } else {
      formStatus.textContent = "Something went wrong. Please try again.";
    }
  } catch (error) {
    formStatus.textContent = "Network error. Please try again.";
  } finally {
    sendButton.disabled = false;
  }
});