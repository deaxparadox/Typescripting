console.log("Vite with typescript")
const root = document.querySelector("#root") as HTMLDivElement;
if (root.innerText == "") {
    console.log("root is blank");
}
root.innerText = "This is from main.tsx";