const projects = 2;
const skills = 3;
let score = 10;
let visitors = 0;

const totalItems = projects + skills;
const difference = skills - projects;
const multiplied = projects * skills;
const divided = skills / projects;
const remainder = skills % projects;

score += 5;
score -= 2;
score *= 2;
score /= 2;

visitors++;
visitors++;
visitors--;

console.log("Total items:", totalItems);
console.log("Difference:", difference);
console.log("Multiplied:", multiplied);
console.log("Divided:", divided);
console.log("Remainder:", remainder);
console.log("Score:", score);
console.log("Visitors:", visitors);

const learning = true;
const practicing = true;
const student = true;
const coding = true;

console.log("Is learning:", learning);
console.log("Is practicing:", practicing);
console.log("Same number:", projects === skills);
console.log("Different number:", projects !== skills);
console.log("Can build website:", student && coding);
console.log("Either skill:", student || coding);
console.log("Not a student:", !student);

if (projects > 0) {
  console.log("You have started a project.");
}

if (skills >= 3) {
  console.log("You have three or more skills listed.");
}

if (student && coding) {
  console.log("You are learning to code.");
}

for (let i = 1; i <= 5; i++) {
  console.log("Learning step:", i);
}

let practiceCount = 1;

while (practiceCount <= 3) {
  console.log("Practice session:", practiceCount);
  practiceCount++;
}

const firstName = "Cy";
const portfolioName = "Cy's Portfolio";
const language = "JavaScript";

const greeting = `Hi, I'm ${firstName}`;
const message = `${greeting}. Welcome to my portfolio!`;

console.log(message);
console.log("Name length:", firstName.length);
console.log("Uppercase:", firstName.toUpperCase());
console.log("Lowercase:", firstName.toLowerCase());
console.log("Contains Portfolio:", portfolioName.includes("Portfolio"));

const sentence = "I am learning JavaScript";

console.log("Position:", sentence.indexOf("JavaScript"));
console.log("Extracted text:", sentence.slice(5, 15));

const skillText = "Java, HTML, Problem Solving";

console.log("Split skills:", skillText.split(", "));

const convertedNumber = Number("250");
const randomNumber = Math.floor(Math.random() * 100) + 1;
const price = 49.99;
const quantity = 3;

console.log("Converted number:", convertedNumber);
console.log("Data type:", typeof convertedNumber);
console.log("Random number:", randomNumber);
console.log("Total price:", (price * quantity).toFixed(2));
console.log("Rounded:", Math.round(85.75));
console.log("Square root:", Math.sqrt(25));
console.log("Maximum:", Math.max(10, 20, 30));
console.log("Minimum:", Math.min(10, 20, 30));

function greetUser(name) {
  return `Hi, ${name}! Welcome to my portfolio.`;
}

function addNumbers(a, b) {
  return a + b;
}

function calculateArea(width, height) {
  return width * height;
}

function calculateAverage(a, b, c) {
  return (a + b + c) / 3;
}

function checkSkill(skill) {
  if (skill === "JavaScript") {
    return "You are learning JavaScript!";
  }

  return "Keep practicing your skills!";
}

const multiply = (a, b) => a * b;

function calculateTotal(a, b) {
  return a + b;
}

console.log(greetUser("Cy"));
console.log("Sum:", addNumbers(10, 5));
console.log("Area:", calculateArea(10, 5));
console.log("Average:", calculateAverage(80, 90, 100));
console.log(checkSkill("JavaScript"));
console.log("Multiplication:", multiply(5, 4));
console.log("Total:", calculateTotal(10, 5));

const user = {
  name: "Cy",
  age: 16,
  role: "Student",
  status: "Learning",
  language: "JavaScript",
  skills: ["Java", "HTML", "JavaScript"],

  introduce() {
    return `Hi, I'm ${this.name}. I'm a ${this.role} learning to code.`;
  }
};

console.log(user.name);
console.log(user.skills);
console.log(user.introduce());

user.status = "Learning fast";
user.projects = projects;

for (const property in user) {
  console.log(property, user[property]);
}

const portfolio = {
  title: portfolioName,
  theme: "Purple",
  owner: {
    name: "Cy",
    country: "Philippines"
  }
};

console.log(portfolio.title);
console.log(portfolio.owner.name);
console.log(portfolio.owner.country);

function showPortfolio() {
  const welcomeMessage = "Welcome to my portfolio!";

  console.log(portfolioName);
  console.log(welcomeMessage);
}

showPortfolio();

function countProjects() {
  const localSkills = 3;

  console.log("Projects:", projects);
  console.log("Skills:", localSkills);
}

countProjects();

if (true) {
  const blockMessage = "This variable belongs to this block.";
  const blockNumber = 10;

  console.log(blockMessage);
  console.log(blockNumber);
}

function outerFunction() {
  const outerMessage = "I am from the outer function.";

  function innerFunction() {
    console.log(outerMessage);
  }

  innerFunction();
}

outerFunction();

function getCurrentDate() {
  const now = new Date();

  console.log("Current date:", now.toLocaleDateString());
  console.log("Current time:", now.toLocaleTimeString());
  console.log("Full date:", now.toLocaleString());
}

getCurrentDate();

const today = new Date();

console.log("Year:", today.getFullYear());
console.log("Month:", today.getMonth() + 1);
console.log("Day:", today.getDate());
console.log("Day of week:", today.getDay());

const skillsArray = ["Java", "HTML", "CSS", "JavaScript"];

console.log("All skills:", skillsArray);
console.log("First skill:", skillsArray[0]);
console.log("Second skill:", skillsArray[1]);
console.log("Number of skills:", skillsArray.length);

const projectsArray = ["Portfolio", "Calculator"];

projectsArray.push("Quiz System");
projectsArray[0] = "Personal Portfolio";
projectsArray.pop();

console.log("Projects:", projectsArray);

skillsArray.forEach(skill => {
  console.log("Learning:", skill);
});

const doubledNumbers = [2, 4, 6, 8].map(number => number * 2);

console.log("Doubled numbers:", doubledNumbers);

const passingScores = [55, 72, 88, 43, 96].filter(
  grade => grade >= 75
);

console.log("Passing scores:", passingScores);

const totalHours = [2, 3, 4, 5].reduce(
  (total, hours) => total + hours,
  0
);

console.log("Total hours:", totalHours);

const skillsSet = new Set([
  "HTML",
  "CSS",
  "JavaScript",
  "HTML"
]);

skillsSet.add("Java");

console.log("Unique skills:", skillsSet);
console.log("Number of unique skills:", skillsSet.size);
console.log("Has CSS:", skillsSet.has("CSS"));

skillsSet.delete("HTML");

for (const skill of skillsSet) {
  console.log("Set skill:", skill);
}

const studentMap = new Map([
  ["name", "Cy"],
  ["age", 16],
  ["language", "JavaScript"]
]);

console.log("Student map:", studentMap);
console.log("Name:", studentMap.get("name"));
console.log("Age:", studentMap.get("age"));
console.log("Map size:", studentMap.size);
console.log("Has language:", studentMap.has("language"));

for (const [key, value] of studentMap) {
  console.log(key, value);
}

const gradesMap = new Map([
  ["Math", 90],
  ["Science", 85],
  ["English", 95]
]);

for (const [subject, grade] of gradesMap) {
  console.log(`${subject}:`, grade);
}

const regExpText = "I am learning JavaScript";
const regExpPattern = /JavaScript/;

console.log(regExpPattern.test(regExpText));
console.log(regExpPattern.test("I am learning Java"));

if (typeof Temporal !== "undefined") {
  const temporalDate = Temporal.Now.plainDateISO();
  const temporalTime = Temporal.Now.plainTimeISO();

  console.log("Temporal date:", temporalDate.toString());
  console.log("Temporal time:", temporalTime.toString());

  const nextWeek = temporalDate.add({ days: 7 });
  const birthdayDate = Temporal.PlainDate.from("2027-02-24");
  const meetingTime = Temporal.PlainTime.from("14:30");

  const duration = Temporal.Duration.from({
    hours: 2,
    minutes: 30
  });

  console.log("Date next week:", nextWeek.toString());
  console.log("Birthday:", birthdayDate.toString());
  console.log("Meeting time:", meetingTime.toString());
  console.log("Duration:", duration.toString());
} else {
  console.log("Temporal is not supported in this browser.");
}

function waitForTask(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function runAsyncPractice() {
  console.log("Async practice started.");

  await waitForTask(2000);
  console.log("Two seconds have passed.");

  await waitForTask(1000);
  console.log("Async practice completed.");
}

runAsyncPractice();

Promise.resolve("Task completed!").then(result => {
  console.log(result);
});

Promise.reject("Example error").catch(error => {
  console.log(error);
});

Promise.all([
  Promise.resolve("HTML"),
  Promise.resolve("CSS")
]).then(results => {
  console.log("Promise results:", results);
});

function createElement(tag, text, className) {
  const element = document.createElement(tag);

  if (text !== undefined) {
    element.textContent = text;
  }

  if (className) {
    element.className = className;
  }

  return element;
}

function createSection(id, title, description) {
  const section = createElement("section");
  section.id = id;
  section.className = "lesson-section";

  const heading = createElement("h2", title);
  const intro = createElement("p", description);
  const grid = createElement("div");

  grid.className = "lesson-grid";

  section.append(heading, intro, grid);

  return { section, grid };
}

function createCard(titleText, descriptionText, codeText) {
  const card = createElement("article");
  card.className = "lesson-card";

  const title = createElement("h3", titleText);
  const description = createElement("p", descriptionText);

  card.appendChild(title);

  if (codeText !== undefined) {
    const code = createElement("pre", codeText);
    code.className = "lesson-code";
    card.appendChild(code);
  }

  card.appendChild(description);

  return card;
}

function addLessonSection(id, title, description, examples) {
  if (document.getElementById(id)) {
    return;
  }

  const { section, grid } = createSection(
    id,
    title,
    description
  );

  examples.forEach(example => {
    const card = createCard(
      example.name,
      example.description,
      example.code
    );

    if (example.file) {
      const fileName = createElement(
        "p",
        `File: ${example.file}`
      );

      fileName.className = "lesson-file";
      card.insertBefore(fileName, card.children[1]);
    }

    grid.appendChild(card);
  });

  const main = document.querySelector("main");

  (main || document.body).appendChild(section);
}

const dataTypeExamples = [
  { name: "String", code: '"Cy"', description: "Stores text and characters." },
  { name: "Number", code: "100", description: "Stores numbers with or without decimals." },
  { name: "Boolean", code: "true", description: "Stores true or false values." },
  { name: "Undefined", code: "undefined", description: "Represents an unassigned value." },
  { name: "Null", code: "null", description: "Represents an intentionally empty value." },
  { name: "BigInt", code: "12345678901234567890n", description: "Stores very large whole numbers." },
  { name: "Symbol", code: "Symbol('id')", description: "Creates a unique primitive value." },
  { name: "Object", code: "{ name: 'Cy' }", description: "Groups properties and values." },
  { name: "Array", code: '["HTML", "CSS"]', description: "Stores an ordered list of values." },
  { name: "Function", code: "() => {}", description: "Defines reusable behavior." }
];

addLessonSection(
  "data-types",
  "JavaScript Data Types",
  "Explore the different types of values used in JavaScript.",
  dataTypeExamples
);

addLessonSection(
  "javascript-functions",
  "JavaScript Functions",
  "Functions are reusable blocks of code that perform specific tasks.",
  [
    {
      name: "Function Declaration",
      code: 'function greet(name) {\n  return "Hello, " + name;\n}',
      description: "Accepts a name and returns a greeting."
    },
    {
      name: "Parameters",
      code: "function add(a, b) {\n  return a + b;\n}",
      description: "Parameters receive values supplied to a function."
    },
    {
      name: "Arrow Function",
      code: "const multiply = (a, b) => a * b;",
      description: "Defines a function with concise syntax."
    },
    {
      name: "Default Parameter",
      code: 'function welcome(name = "Guest") {\n  return "Welcome, " + name;\n}',
      description: "Uses a fallback value when no argument is supplied."
    },
    {
      name: "Function Expression",
      code: "const square = function(number) {\n  return number * number;\n};",
      description: "Stores a function in a variable."
    },
    {
      name: "Callback",
      code: "[1, 2, 3].forEach(number => {\n  console.log(number);\n});",
      description: "Passes a function to another function."
    }
  ]
);

addLessonSection(
  "javascript-objects",
  "JavaScript Objects",
  "Objects store related data using key-value pairs.",
  [
    {
      name: "Create an Object",
      code: 'const student = {\n  name: "Cy",\n  age: 16,\n  role: "Student"\n};',
      description: "Groups related information."
    },
    {
      name: "Access Properties",
      code: 'student.name;\nstudent["age"];',
      description: "Reads values using dot or bracket notation."
    },
    {
      name: "Update Properties",
      code: 'student.role = "Programmer";',
      description: "Changes an existing property."
    },
    {
      name: "Add Properties",
      code: 'student.language = "JavaScript";',
      description: "Adds a new property."
    },
    {
      name: "Object Method",
      code: 'const user = {\n  name: "Cy",\n  greet() {\n    return "Hello, " + this.name;\n  }\n};',
      description: "Defines a function inside an object."
    },
    {
      name: "Nested Object",
      code: 'const portfolio = {\n  owner: {\n    name: "Cy"\n  }\n};',
      description: "Stores an object inside another object."
    },
    {
      name: "Object Keys",
      code: "Object.keys(student);",
      description: "Returns property names."
    },
    {
      name: "Object Values",
      code: "Object.values(student);",
      description: "Returns property values."
    },
    {
      name: "Object Entries",
      code: "Object.entries(student);",
      description: "Returns key-value pairs."
    }
  ]
);

addLessonSection(
  "javascript-asynchronous",
  "JavaScript Asynchronous Programming",
  "Learn how JavaScript handles tasks that finish later.",
  [
    {
      name: "setTimeout()",
      code: 'setTimeout(() => {\n  console.log("Hello!");\n}, 2000);',
      description: "Schedules a callback after a delay."
    },
    {
      name: "Promise",
      code: 'const task = Promise.resolve("Completed");\ntask.then(console.log);',
      description: "Represents an asynchronous result."
    },
    {
      name: "Error Handling",
      code: 'Promise.reject("Error").catch(error => {\n  console.log(error);\n});',
      description: "Handles a rejected Promise."
    },
    {
      name: "async and await",
      code: 'async function start() {\n  await waitForTask(1000);\n  console.log("Finished!");\n}',
      description: "Makes asynchronous code easier to read."
    },
    {
      name: "Promise.all()",
      code: 'Promise.all([\n  Promise.resolve("HTML"),\n  Promise.resolve("CSS")\n]).then(console.log);',
      description: "Waits for all supplied Promises to fulfill."
    }
  ]
);

addLessonSection(
  "javascript-modules",
  "JavaScript Modules",
  "Separate code into files and share reusable features.",
  [
    {
      name: "Named Export",
      file: "math.js",
      code: "export function add(a, b) {\n  return a + b;\n}",
      description: "Makes a function available to other modules."
    },
    {
      name: "Named Import",
      file: "script.js",
      code: 'import { add } from "./math.js";\n\nconsole.log(add(5, 3));',
      description: "Imports a named export."
    },
    {
      name: "Export Variables",
      file: "settings.js",
      code: 'export const theme = "purple";\nexport const language = "JavaScript";',
      description: "Shares variables with other modules."
    },
    {
      name: "Import Multiple Values",
      file: "script.js",
      code: 'import { theme, language } from "./settings.js";',
      description: "Imports multiple named exports."
    },
    {
      name: "Default Export",
      file: "greeting.js",
      code: 'export default function greet() {\n  return "Hello, Cy!";\n}',
      description: "Defines the default export."
    },
    {
      name: "Default Import",
      file: "script.js",
      code: 'import greet from "./greeting.js";\n\nconsole.log(greet());',
      description: "Imports the default export."
    }
  ]
);

const portfolioData = {
  name: "Cy",
  status: "Learning fast",
  skillLevel: "Beginner"
};

const handler = {
  get(target, property, receiver) {
    console.info(`Read property: ${String(property)}`);
    return Reflect.get(target, property, receiver);
  },

  set(target, property, value, receiver) {
    console.info(`Changed ${String(property)} to ${String(value)}`);
    return Reflect.set(target, property, value, receiver);
  }
};

const trackedPortfolio = new Proxy(portfolioData, handler);

console.log(trackedPortfolio.name);
trackedPortfolio.skillLevel = "Intermediate";

const typedArrayExamples = [
  {
    name: "Int8Array",
    code: "const numbers = new Int8Array([10, 20, 30]);\n\nconsole.log(numbers);\nconsole.log(numbers[0]);",
    description: "Stores signed 8-bit integers from -128 to 127."
  },
  {
    name: "Uint8Array",
    code: "const numbers = new Uint8Array([10, 20, 30]);\n\nnumbers[0] = 255;\nconsole.log(numbers[0]);",
    description: "Stores unsigned 8-bit integers from 0 to 255."
  },
  {
    name: "Int16Array",
    code: "const numbers = new Int16Array([1000, 2000, 3000]);\n\nconsole.log(numbers);",
    description: "Stores signed 16-bit integers."
  },
  {
    name: "Float32Array",
    code: "const prices = new Float32Array([10.5, 20.75, 30.25]);\n\nconsole.log(prices);\nconsole.log(prices[1]);",
    description: "Stores 32-bit floating-point numbers."
  },
  {
    name: "Creating an Array",
    code: "const numbers = new Uint8Array(5);\n\nnumbers[0] = 10;\nnumbers[1] = 20;\nnumbers[2] = 30;\n\nconsole.log(numbers);",
    description: "Creates five elements initialized to zero."
  },
  {
    name: "Looping Through Typed Arrays",
    code: "const scores = new Int16Array([80, 90, 75]);\n\nfor (const score of scores) {\n  console.log(score);\n}",
    description: "Uses for...of to read every value."
  }
];

addLessonSection(
  "typed-arrays",
  "JavaScript Typed Arrays",
  "Learn how typed arrays store numbers in fixed binary formats.",
  typedArrayExamples
);

const domNavigationExamples = [
  {
    name: "Selecting an Element",
    code: 'const heading = document.querySelector("h1");\n\nconsole.log(heading);',
    description: "Selects the first h1 element."
  },
  {
    name: "Selecting Multiple Elements",
    code: 'const paragraphs = document.querySelectorAll("p");\n\nconsole.log(paragraphs);\nconsole.log(paragraphs.length);',
    description: "Selects all paragraphs and returns a NodeList."
  },
  {
    name: "Parent Element",
    code: 'const heading = document.querySelector("h1");\n\nconsole.log(heading?.parentElement);',
    description: "Finds the direct parent element."
  },
  {
    name: "Child Elements",
    code: 'const main = document.querySelector("main");\n\nif (main) {\n  console.log(main.children);\n  console.log(main.children.length);\n}',
    description: "Accesses the direct child elements."
  },
  {
    name: "Next and Previous Siblings",
    code: 'const heading = document.querySelector("h1");\n\nif (heading) {\n  console.log(heading.nextElementSibling);\n  console.log(heading.previousElementSibling);\n}',
    description: "Finds neighboring elements."
  },
  {
    name: "Finding an Element by ID",
    code: 'const themeButton = document.getElementById("themeBtn");\n\nconsole.log(themeButton);',
    description: "Finds the element with the specified ID."
  },
  {
    name: "Moving Through Elements",
    code: 'const paragraph = document.querySelector("p");\n\nif (paragraph) {\n  console.log(paragraph.parentElement?.children);\n}',
    description: "Moves from a child to its parent and siblings."
  },
  {
    name: "Checking Element Relationships",
    code: 'const heading = document.querySelector("h1");\n\nconsole.log(document.body.contains(heading));',
    description: "Checks whether body contains the heading."
  }
];

addLessonSection(
  "dom-navigation",
  "DOM Navigation",
  "Select HTML elements and move between parents, children, and siblings.",
  domNavigationExamples
);

function initLiveClock() {
  const header = document.querySelector("header");

  if (!header || document.getElementById("liveDateTime")) {
    return;
  }

  const display = createElement("div");
  display.id = "liveDateTime";
  display.className = "live-clock";

  header.appendChild(display);

  function updateClock() {
    display.textContent = new Date().toLocaleString("en-PH", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    });
  }

  updateClock();
  setInterval(updateClock, 1000);
}

function initBirthdayCountdown() {
  const aboutSection = document.querySelector("#about");

  if (!aboutSection || document.getElementById("birthdayCountdown")) {
    return;
  }

  const display = createElement("p");
  display.id = "birthdayCountdown";
  display.className = "birthday-countdown";

  aboutSection.appendChild(display);

  function updateCountdown() {
    const now = new Date();

    const today = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );

    let birthday = new Date(today.getFullYear(), 1, 24);

    if (today.getTime() > birthday.getTime()) {
      birthday = new Date(today.getFullYear() + 1, 1, 24);
    }

    const days = Math.round(
      (birthday.getTime() - today.getTime()) / 86400000
    );

    display.textContent = `Days until February 24: ${days}`;
  }

  updateCountdown();
  setInterval(updateCountdown, 3600000);
}

function initThemeToggle() {
  const button = document.getElementById("themeBtn");

  if (!button) {
    return;
  }

  function updateLabel() {
    const dark = document.body.classList.contains("dark");
    button.textContent = dark ? "Light Theme" : "Dark Theme";
    button.setAttribute("aria-pressed", String(dark));
  }

  updateLabel();

  button.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    updateLabel();
  });
}

function initContactButtons() {
  const emailButton = document.getElementById("emailBtn");
  const callButton = document.getElementById("callBtn");

  if (emailButton) {
    emailButton.addEventListener("click", () => {
      window.location.href = "mailto:haynescornell0224@gmail.com";
    });
  }

  if (callButton) {
    callButton.addEventListener("click", () => {
      window.location.href = "tel:+639000000000";
    });
  }
}

function initPortfolio() {
  initLiveClock();
  initBirthdayCountdown();
  initThemeToggle();
  initContactButtons();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPortfolio, {
    once: true
  });
} else {
  initPortfolio();
}

