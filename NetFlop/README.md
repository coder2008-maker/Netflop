# NetFlop 🍿 — One Episode. That's The Lie.

A sarcastic parody streaming website created for college students stuck in their late-night procrastination loop. Built purely with beginner-friendly HTML, CSS, and Vanilla JavaScript for a first-year Web Development lab project.

---

## 📌 Project Overview

**NetFlop** takes the classic streaming platform aesthetic and turns it into a comedic commentary on university life, sleep deprivation, and homework avoidance. 

The website captures that universal college feeling: telling yourself *"I'll just watch one 20-minute episode,"* only to realize it is 2:47 AM and your lecture starts in five hours.

---

## 🚀 Pages & Features

### 1. Home Page (`index.html`)
* **Live Procrastination Counter:** Displays a simulated live counter (`🔴 47,293 people are currently flopping`) that subtly shifts over time using `setInterval()`.
* **Interactive Hero Section:** Bold typography with a cinematic dark background and an *"I'm Supposed To Study"* button that calls you out.
* **The "How Cooked Are You?" Flop Meter:** An interactive productivity diagnostic gauge. Clicking *"Make It Worse"* raises the cooked percentage and shifts your status through progressive stages of academic doom (from *"We're cooked"* all the way to *"Fully charred 💀🔥"*).
* **Parody Show Cards:** 4 binge-trap titles (`JUST ONE MORE`, `ACADEMIC WEAPON`, `SLEEP SCHEDULE`, `I'LL START TOMORROW`) with custom hover animations and humorous interactive alert dialogs.
* **Continue Watching:** A satirical 11-second progress bar for *"How To Become Productive"*.
* **Final CTA:** An *"Accept Your Fate"* exit block linking directly to the registration page.

### 2. Log In Page (`login.html`)
* Centered dark-mode authentication card.
* Form validation ensuring inputs are not submitted blank.
* Interactive *"Forgot it already?"* helper alert.
* Quick escape link back to the homepage.

### 3. Sign Up Page (`signup.html`)
* *"Enter Your Flop Era"* registration form.
* Client-side JavaScript validation checking:
  - Non-empty name and email fields.
  - Password minimum length requirement (at least 6 characters).
  - Password confirmation matching.
  - Mandatory checkbox acceptance: *"I accept that my productivity is cooked."*
* Automatic alert confirmation and redirection to the login page on valid submission.

---

## 🛠️ Built With

* **HTML5:** Semantic page layouts, accessible forms, clean section tagging.
* **CSS3:** Custom flexbox & grid responsive layouts, CSS variables, linear gradients, card hover states, and mobile media queries.
* **Vanilla JavaScript:** DOM selection (`getElementById`, `querySelector`), event listeners, basic mathematical randomizers, state tracking, and alert triggers.

> **Note:** Zero external frameworks or libraries were used (No React, No Bootstrap, No Tailwind, No npm runtime packages, No external APIs). Completely standalone and self-contained.

---

## 📁 File Structure

```text
NetFlop/
│
├── index.html          # Main landing page
├── login.html          # Login card page
├── signup.html         # User registration page
├── style.css           # Global stylesheet with responsive rules
├── script.js           # Client-side DOM logic & form validation
├── README.md           # Project documentation
│
└── images/
    └── background.jpg  # Dark cinema/dorm room background asset
```

---

## 💻 How to Run

1. Clone or download this repository.
2. Ensure `images/background.jpg` is in the `images` folder alongside the HTML files.
3. Double-click `index.html` to open it directly in any modern browser (Google Chrome, Firefox, Safari, Edge).
4. No web server, node installation, or build commands required.

---

## 🎓 Viva / Lab Review Quick Explanations

Here are the key technical concepts implemented in the code for lab examinations:

1. **DOM Manipulation & State Tracking (`script.js`):**
   - The variable `cookPercent` holds the current state of the productivity meter.
   - When `increaseCooked()` is invoked via `onclick`, it increments `cookPercent`, calculates a new inline style (`meterBar.style.width`), updates `innerText`, and branches through an `if/else if` ladder to display appropriate messages.
2. **Form Validation Logic:**
   - Both `validateLogin(e)` and `validateSignup(e)` use `e.preventDefault()` to stop automatic page reload upon submission.
   - Validates user input using standard string trimming (`.trim()`), comparison operators (`!==`), and length properties.
3. **Mobile Responsiveness (`style.css`):**
   - Uses `@media (max-width: 768px)` queries.
   - Converts the 4-column card grid into a single vertical scroll column.
   - Simplifies the top navigation bar and stacks action buttons for smaller touchscreens.

---

## 📄 License & Disclaimer

Academic parody project developed for educational purposes. All show names, taglines, and brand references are satirical humor. No actual GPAs were harmed during the making of this site.
