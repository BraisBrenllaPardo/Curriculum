function imprimeHola() {
    console.log("hola")
}




function main() {
    console.log("starting..");
    const title = document.querySelector("h1");
    title.addEventListener("pointerenter",imprimeHola);
    const elements = Array.from(document.body.querySelectorAll("*"));
    for (let items of elements){
        items.addEventListener("pointerenter", imprimeHola)
    }
}
window.addEventListener("load",main);

