const form = document.getElementById("form");

console.log("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log(form.elements);
  const firstname = document.getElementById("firstname");
  const lastname = document.getElementById("lastname");
  const country = document.getElementById("country");
  const week = document.getElementById("week");
  const pull = document.getElementById("pull");
  const deployment = document.getElementById("deployment");
  const security = document.getElementById("security");
  const range = document.getElementById("range");

  console.log("firstname", firstname.value);
  console.log("lastname", lastname.value,);
  console.log("country", country.value);
  console.log("weekly report", week.checked,);
  console.log("pull request", pull.checked,);
  console.log("Deployment Triggers", deployment.checked,);
  console.log("run security", security.checked);
  console.log(range.value);

  if (firstname.value !== "" || lastname.value !== "" || country.value !== "") {
   confirm("Are You Sure You Want To Submit?")
   firstname.value = ""
   lastname.value = ""
   country.value = ""
   week.checked = false 
   pull.checked = false
   deployment.checked = false
  }

 
});

// / const btn = document.getElementById("btn")
// // const input = document.querySelector("input")

// // function popup(){

// // }
