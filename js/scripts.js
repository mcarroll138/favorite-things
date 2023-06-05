window.onload = function () {
    let form = document.querySelector("form");
    form.onsubmit = function (event) {
        const houseWifeInput = document.getElementById("houseWife").value;
        const mountainRangeInput = document.getElementById("mountainRange").value;
        event.preventDefault();

        const bothThings = [houseWifeInput, mountainRangeInput];
        console.log(bothThings);

        console.log(bothThings[0]);

        const reverse = bothThings.reverse();
        console.log(reverse)

        const ul = document.createElement("ul");
        ul.setAttribute('id', 'favs');
        document.body.appendChild(ul);

        let li1 = document.createElement('li');
        let li2 = document.createElement('li');
        li1.append(houseWifeInput);
        li2.append(mountainRangeInput);
        document.getElementById('favs').append(li1, li2);


    }


}

//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