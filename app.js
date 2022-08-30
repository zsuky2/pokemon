var input = document.getElementById("pokemon-name");
img = document.getElementById("pokemon-img");
pokemon = document.getElementById("pokemon");


document.getElementById("btn").addEventListener("click", function () {

    var url = `https://pokeapi.co/api/v2/pokemon/${input.value}`;

    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.onload = function () {

        if (xhr.status === 200) {

            var data = JSON.parse(xhr.responseText);
            console.log(data);

            img.setAttribute("src", data.sprites.front_default);
            pokemon.innerText = data.name;

            input.value = "";

        }
    }

    xhr.send();

})