const teams = document.querySelectorAll("h2");
const team1 = document.querySelector(".team1");
const team2 = document.querySelector(".team2");
const scoreTeam1 = document.querySelector(".scoreTeam1");
const scoreTeam2 = document.querySelector(".scoreTeam2");
const buttons = document.querySelectorAll("button");
const inputs = document.querySelectorAll("input");
const inputTeam1 = document.querySelector(".inputTeam1");
const inputTeam2 = document.querySelector(".inputTeam2");

function toInt(string) {
  return parseInt(string.innerText);
}

function addScore(scoreTeam) {
  scoreTeam.innerText = toInt(scoreTeam) + 1;
}

function subScore(scoreTeam) {
  if (toInt(scoreTeam) === 0) return;

  scoreTeam.innerText = toInt(scoreTeam) - 1;
}

function editTeam(team, input, inputOpposite) {
  inputOpposite.style.zIndex = -1;
  input.style.zIndex = 1;
  input.value = team.innerText;
  input.select();
}

function updateTeam(input, team) {
  team.innerText = input.value;
  input.style.zIndex = -1;
}

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const currentClassName = button.className;

    if (currentClassName === "addTeam1") addScore(scoreTeam1);
    if (currentClassName === "subTeam1") subScore(scoreTeam1);

    if (currentClassName === "addTeam2") addScore(scoreTeam2);
    if (currentClassName === "subTeam2") subScore(scoreTeam2);
  });
});

teams.forEach((team) => {
  team.addEventListener("click", function () {
    const currentClassName = team.className;

    if (currentClassName === "team1") editTeam(team, inputTeam1, inputTeam2);
    if (currentClassName === "team2") editTeam(team, inputTeam2, inputTeam1);
  });
});

inputs.forEach((input) => {
  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const currentClassName = input.className;

      if (currentClassName === "inputTeam1") updateTeam(input, team1);
      if (currentClassName === "inputTeam2") updateTeam(input, team2);
    }
  });
});
