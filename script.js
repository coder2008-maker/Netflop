// NetFlop: Client-side logic & interactions
// College lab project

// 1. Live counter that shifts slightly every few seconds
let currentFlopCount = 47293;

setInterval(function () {
  const counterSpan = document.getElementById("liveCounter");
  if (counterSpan) {
    // Add a random number between -2 and +4
    const change = Math.floor(Math.random() * 7) - 2;
    currentFlopCount += change;
    counterSpan.innerText = currentFlopCount.toLocaleString();
  }
}, 3500);

// 2. Study button handler
function handleStudyClick() {
  alert("LMAO nice joke. 💀\n\nWe both know you're not opening that textbook tonight.\nPick a show below.");
  const target = document.getElementById("shows");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

// 3. Flop meter stages
let cookPercent = 13;

function increaseCooked() {
  const percentText = document.getElementById("meterPercent");
  const meterBar = document.getElementById("meterBar");
  const statusBox = document.getElementById("meterStatus");

  cookPercent += 18;

  if (cookPercent > 100) {
    alert("⚠️ OVERHEAT WARNING:\nYou broke the meter! Close the laptop and get some sleep.");
    cookPercent = 13;
  }

  percentText.innerText = cookPercent + "%";
  meterBar.style.width = cookPercent + "%";

  // Update status message
  if (cookPercent < 25) {
    statusBox.innerText = "STATUS: WE’RE COOKED.";
  } else if (cookPercent < 50) {
    statusBox.innerText = "STATUS: ACADEMIC PROBATION IS CALLING 📞";
  } else if (cookPercent < 75) {
    statusBox.innerText = "STATUS: FORGOT WHAT A SYLLABUS LOOKS LIKE 📖";
  } else if (cookPercent < 95) {
    statusBox.innerText = "STATUS: PROFESSOR IS IN TEARS DURING OFFICE HOURS 😭";
  } else {
    statusBox.innerText = "STATUS: BEYOND COOKED. YOU ARE FULLY CHARRED 💀🔥";
  }
}

// 4. Show card resume alerts
function resumeCard(showName) {
  if (showName === "JUST ONE MORE") {
    alert("🍿 Playing Episode 14...\nYou told yourself 'just one more' 4 hours ago!");
  } else if (showName === "ACADEMIC WEAPON") {
    alert("💻 Opened 35 Wikipedia tabs and zero lecture notes.\nElite procrastination.");
  } else if (showName === "SLEEP SCHEDULE") {
    alert("⏰ Your 8:00 AM alarm is already preparing to be snoozed 6 times.");
  } else if (showName === "I’LL START TOMORROW") {
    alert("📅 Tomorrow called: 'Please stop making promises you won't keep.'");
  } else {
    alert("▶ Resuming show. Rip your morning productivity.");
  }
}

// 5. Continue watching resume button
function resumeProductiveGuide() {
  alert("⚠️ Error 404: Motivation not found.\n\nResuming procrastination instead. Enjoy!");
}

// 6. Forgot password text
function showForgotMsg() {
  alert("💀 Too bad. We forgot it too.\nWrite it on a sticky note next time.");
}

// 7. Login form validation
function validateLogin(e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const pass = document.getElementById("loginPassword").value.trim();

  if (!email || !pass) {
    alert("Bro... at least type in an email and password. 💀");
    return;
  }

  alert("Welcome back! Your unfinished assignments missed you.\nRedirecting to NetFlop...");
  window.location.href = "index.html";
}

// 8. Sign up form validation
function validateSignup(e) {
  e.preventDefault();

  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const pass = document.getElementById("signupPass").value;
  const confirm = document.getElementById("signupConfirm").value;
  const terms = document.getElementById("signupTerms");

  if (!name || !email || !pass || !confirm) {
    alert("Please fill out all the fields before entering your flop era.");
    return;
  }

  if (pass.length < 6) {
    alert("Password too short! Must be at least 6 characters.");
    return;
  }

  if (pass !== confirm) {
    alert("Passwords do not match! Did you lose focus already?");
    return;
  }

  if (!terms.checked) {
    alert("⚠️ You must check the box accepting that your productivity is cooked.");
    return;
  }

  alert("🎉 Account created!\nWelcome to your official flop era, " + name + ".\nRedirecting to login...");
  window.location.href = "login.html";
}
