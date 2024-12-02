const email = document.getElementById("email");
const pass = document.getElementById("pass");
const btn = document.getElementById("submit");

btn.addEventListener("click", () => {
 
    if (email.value && pass.value) {
        
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", pass.value);  

        alert("Login success.");
    } else {
        alert("Please fill both fields!");
    }
});
