const counter = document.querySelector(".counter-number");

async function updateCounter() {
    let response = await fetch("https://qxjuwrdy25xwesgibewnk4beiu0zkhim.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `${data}`;
}

updateCounter();