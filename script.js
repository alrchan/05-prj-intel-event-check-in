const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");
const attendeeCountEl = document.getElementById("attendeeCount");
const progressBar = document.getElementById("progressBar");
const greetingEl = document.getElementById("greeting");

let count = 0;
const maxCount = 50;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  console.log(name, teamName);

  count++;
  attendeeCountEl.textContent = count;
  console.log("Total check-ins: ", count);

  const percentageNumber = Math.round((count / maxCount) * 100);
  const percentage = percentageNumber + "%";
  console.log(`Progress: ${percentage}`);

  if (progressBar) {
    progressBar.style.width = percentage;
    progressBar.setAttribute('aria-valuenow', percentageNumber);
  }

  const teamCounter = document.getElementById(team + "Count");
  const previous = parseInt(teamCounter.textContent) || 0;
  const newTotal = previous + 1;
  teamCounter.textContent = newTotal;
  
  console.log("Previous team count: ", previous);
  console.log("New team count: ", newTotal);
  
  const message = `Welcome, ${name} from ${teamName}`;
  console.log(message);

  alert(message);
  if (greetingEl) {
    greetingEl.textContent = message;
  }

  form.reset();
});
