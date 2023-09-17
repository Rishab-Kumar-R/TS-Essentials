const button = document.querySelector("button")!;

function clickHandler(message: string): void {
  console.log("Clicked! " + message);
}

button.addEventListener("click", clickHandler.bind(null, "You're welcome!"));
