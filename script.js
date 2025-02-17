
// hamburger menu
var sidemenu = document.querySelector(".nav-links");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-350px";
}


// Contact section

// adds/removes 'focus' to class name so the necessary styles can be implemented
const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent = this.parentNode;
    // only removes 'focus' class name if input area is empty
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach(input => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});


/* Sending Message */
const scriptURL =
"https://script.google.com/macros/s/AKfycbyAXLxQt18QpK1xBG5ge-QrQBAOOud2sc3b9a6VKRf2bSnuJHRdc7Q8q00ctQ07jAUBDg/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
e.preventDefault();
fetch(scriptURL, { method: "POST", body: new FormData(form) })
  .then((response) => {
    msg.innerHTML = "Message sent successfully!";
    setTimeout(function () {
      msg.innerHTML = "";
    }, 5000);
    form.reset();
  })
  .catch((error) => console.error("Error!", error.message));
});

