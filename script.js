// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  
  /* --------------------
     Mobile Navigation Toggle
  --------------------- */
  const menuBtn = document.querySelector("#menu-btn");
  const navLinks = document.querySelector(".navbar ul");

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuBtn.classList.toggle("open");
    });
  }

  /* --------------------
     Form Validation
  --------------------- */
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstname = document.querySelector("#firstname").value.trim();
    const lastname = document.querySelector("#lastname").value.trim();
    const gender = document.querySelector("input[name='gender']:checked");
    const country = document.querySelector("#country").value;

    if (firstname === "") {
      alert("⚠️ Please enter your first name.");
      return;
    }

    if (lastname === "") {
      alert("⚠️ Please enter your last name.");
      return;
    }

    if (!gender) {
      alert("⚠️ Please select your gender.");
      return;
    }

    if (!country) {
      alert("⚠️ Please select your country.");
      return;
    }

    // ✅ Success
    alert(`🎉 Thank you, ${firstname} ${lastname}! Your form has been submitted go to the next step.`);
    form.reset();
  });

});
