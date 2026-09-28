let q1 = document.getElementById("q1");
let p1 = document.getElementById("p1");
let m1 = document.getElementById("m1");
let a1 = document.getElementById("a1");

q1.addEventListener("click", () => {
  if (a1.classList.contains("hide")) {
    a1.classList.remove("hide");
    m1.classList.remove("hide");
    p1.classList.add("hide");
  } else {
    a1.classList.add("hide");
    m1.classList.add("hide");
    p1.classList.remove("hide");
  }
});

let q2 = document.getElementById("q2");
let p2 = document.getElementById("p2");
let m2 = document.getElementById("m2");
let a2 = document.getElementById("a2");

q2.addEventListener("click", () => {
  if (a2.classList.contains("hide")) {
    a2.classList.remove("hide");
    m2.classList.remove("hide");
    p2.classList.add("hide");
  } else {
    a2.classList.add("hide");
    m2.classList.add("hide");
    p2.classList.remove("hide");
  }
});

let q3 = document.getElementById("q3");
let p3 = document.getElementById("p3");
let m3 = document.getElementById("m3");
let a3 = document.getElementById("a3");

q3.addEventListener("click", () => {
  if (a3.classList.contains("hide")) {
    a3.classList.remove("hide");
    m3.classList.remove("hide");
    p3.classList.add("hide");
  } else {
    a3.classList.add("hide");
    m3.classList.add("hide");
    p3.classList.remove("hide");
  }
});

let q4 = document.getElementById("q4");
let p4 = document.getElementById("p4");
let m4 = document.getElementById("m4");
let a4 = document.getElementById("a4");

q4.addEventListener("click", () => {
  if (a4.classList.contains("hide")) {
    a4.classList.remove("hide");
    m4.classList.remove("hide");
    p4.classList.add("hide");
  } else {
    a4.classList.add("hide");
    m4.classList.add("hide");
    p4.classList.remove("hide");
  }
});
