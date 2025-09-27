const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

let count = 0;
const maxCount = 50;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  console.log(name, teamName);

  count++;
  console.log("Total check-ins: ", count);

  const percentage = Math.round((count / maxCount) * 100) + "%";
  console.log(`Progress: ${percentage}`);

  const teamCounter = document.getElementById(team + "Count");
  const previous = parseInt(teamCounter.textContent) || 0;
  const newTotal = previous + 1;
  teamCounter.textContent = newTotal;
  
  console.log("Previous team count: ", previous);
  console.log("New team count: ", newTotal);
  
  const message = `Welcome, ${name} from ${teamName}`;
  console.log(message);

  alert(message);

  form.reset();
});
