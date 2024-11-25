let name = ""

function form() {
    let name = document.getElementById("name")
    let responsehtml = document.getElementById("response")
    
    let response = "Thank you " + name.value + "! We will consider your feedback!";


    responsehtml.innerHTML = response;
    
}

let button = document.getElementById("test")

button.addEventListener("click", () => {
    form();
});