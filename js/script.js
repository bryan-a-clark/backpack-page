import Backpack from "./Backpack.js";

const pack = new Backpack("Blue", "21", 2);

const content = `
<main>
    <article>
        <h1>Backpack</h1>
        <ul>
            <li>Color: ${pack.color}</li>
            <li>Volume: ${pack.volume}</li>
            <li>Number of Pockets: ${pack.numberOfPockets}</li>
        </ul>
    </article>
    <button type="button" id="greenButton">Toggle Green</button>
</main> 
`;

document.body.innerHTML = content;

document.getElementById("greenButton").addEventListener("click", toggleGreen);

function toggleGreen() {
    document.querySelector("article li:last-child").classList.toggle("green");
}