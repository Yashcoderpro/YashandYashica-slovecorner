// Countdown logic
function updateCountdowns() {
  const today = new Date();
  const currentYear = today.getFullYear();

  // Yash's Birthday - Oct 26
  let yashBDay = new Date(currentYear, 9, 26); // October is month 9 (0-based)
  if (today > yashBDay) yashBDay.setFullYear(currentYear + 1);

  // Yashica's Birthday - Aug 15 (placeholder)
  let yashicaBDay = new Date(currentYear, 7, 15); // August is month 7
  if (today > yashicaBDay) yashicaBDay.setFullYear(currentYear + 1);

  const msInDay = 24 * 60 * 60 * 1000;
  const daysYash = Math.ceil((yashBDay - today) / msInDay);
  const daysYashica = Math.ceil((yashicaBDay - today) / msInDay);

  document.getElementById("yash-bday").textContent = `${daysYash} day(s) left`;
  document.getElementById("yashica-bday").textContent = `${daysYashica} day(s) left`;
}

// Form animation on submit
document.addEventListener("DOMContentLoaded", () => {
  updateCountdowns();

  const form = document.getElementById("qa-form");
  const popup = document.getElementById("popup");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      popup.style.display = "block";
      popup.classList.add("popup");

      setTimeout(() => {
        popup.style.display = "none";
      }, 2500);
    });
  }
});

// Private area logic
function checkPassword() {
  const input = document.getElementById("private-pass").value;
  const privateContent = document.getElementById("private-content");

  if (input === "yashicaisbest") {
    privateContent.style.display = "block";
  } else {
    alert("Wrong password! 💔 Try again.");
  }
}
