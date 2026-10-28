// 1. DATE
let data1 = new Date();

let month = ["jan", "feb", "mar", "apr", "may", "june",
             "july", "aug", "sep", "oct", "nov", "dec"];

let day = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

// GET METHODS
console.log("Year:", data1.getFullYear());
console.log("Month:", month[data1.getMonth()]);
console.log("Date:", data1.getDate());
console.log("Day:", day[data1.getDay()]);
console.log("Hour:", data1.getHours());
console.log("Minutes:", data1.getMinutes());
console.log("Seconds:", data1.getSeconds());

// SET METHODS
data1.setFullYear(2030);
data1.setMonth(5);
data1.setDate(15);
data1.setHours(10);
data1.setMinutes(30);
data1.setSeconds(45);

console.log("Updated Date:", data1);

// 2. TASK PLANNER
let tasks = [
    { id: 1, name: "HTML", day: "mon", status: "pending" },
    { id: 2, name: "CSS", day: "tue", status: "completed" },
    { id: 3, name: "JavaScript", day: "fri", status: "pending" }
];

// forEach()
tasks.forEach(task => console.log(task.name, task.day));

// map()
console.log("Names:", tasks.map(task => task.name));

// filter()
console.log("Pending:", tasks.filter(task => task.status === "pending"));

// find()
console.log("Find:", tasks.find(task => task.id === 2));

// reduce()
console.log("Total:", tasks.reduce((total, task) => total + 1, 0));

// sort()
console.log("Sorted:", [...tasks].sort((a, b) =>
    day.indexOf(a.day) - day.indexOf(b.day)));

// every()
console.log("All Completed:", tasks.every(task => task.status === "completed"));

// push()
tasks.push({ id: 4, name: "Date Methods", day: "sun", status: "pending" });

// Update using map()
tasks = tasks.map(task =>
    task.id === 1 ? { ...task, status: "completed" } : task
);

// Delete using filter()
tasks = tasks.filter(task => task.id !== 2);

// Final report
console.log("Final Tasks:", tasks);
console.log("Completed:", tasks.filter(task => task.status === "completed").length);
console.log("Pending:", tasks.filter(task => task.status === "pending").length);