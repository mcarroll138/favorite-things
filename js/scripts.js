window.onload = function () {
    let form = document.querySelector("form");
    form.onsubmit = function (event) {
        const houseWifeInput = document.getElementById("houseWife").value;
        const mountainRangeInput = document.getElementById("mountainRange").value;
        console.log("houseWifeInput" + houseWifeInput)
        event.preventDefault();

        const bothThings = [houseWifeInput, mountainRangeInput];
        console.log(bothThings);
    }


}