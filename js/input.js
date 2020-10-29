newIngredianceSlot = function () {
    const template = document.createElement("template");
    template.innerHTML = `
        <li class="ingrediance"><input type="text" placeholder="ingrediance here..."></li>
    `
    //Print template
    const ingred = document.querySelector("#ingrediance_list");
    ingred.appendChild(template.content);
}