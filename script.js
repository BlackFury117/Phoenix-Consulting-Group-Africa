let countElement = document.getElementById("count");
  let count = 0;

  setInterval(function() {
    if (count < 150) {
      count++;
      countElement.textContent = count;
      if (count === 150) {
        countElement.classList.add("success");
      }
    }
}, 10);

let countElement2 = document.getElementById("count2");
  let count2 = 0;

  setInterval(function() {
    if (count2 < 100) {
      count2++;
      countElement2.textContent = count2;
      if (count === 100) {
        countElement2.classList.add("success");
      }
    }
}, 10);

let countElement3 = document.getElementById("count3");
  let count3 = 0;

  setInterval(function() {
    if (count3 < 25) {
      count3++;
      countElement3.textContent = count3;
      if (count === 25) {
        countElement3.classList.add("success");
      }
    }
}, 10);

let countElement4 = document.getElementById("count4");
  let count4 = 0;

  setInterval(function() {
    if (count4 < 8) {
      count4++;
      countElement4.textContent = count4;
      if (count === 8) {
        countElement4.classList.add("success");
      }
    }
}, 10);

const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
