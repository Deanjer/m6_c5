/*  Hier komt de Javascript Code van de Game
    In de klas bouwen we klassikaal de startup code
    Aan jou de taak om de game verder uit te bouwen met:
    - bij elke crash moet de auto een andere afbeelding inladen waarin hij meer beschadigd is 
    (sla zelf nieuwe plaatjes op van de auto waarin je deze bewerkt)
    - De crash-score moet in beeld komen te staan
    Verdieping:
    Plaats een 2e auto, en bestuur deze met de W, S, A, D toetsen van je toetsenbord
    Als de 2 autos tegen elkaar rijden volgt er een explosie
*/
var crashCounter = 0; // stel de crashcounter bij begin van de game op 0 in

for (let index = 0; index < 5; index++) {  // plaats 5 bomen random op het speelvak
    var img = document.createElement('img');
    img.src = 'assets/omg/tree.jpg';  // URL van boom-afbeelding
    img.className = "tree";
    img.style.left = Math.random(80) * 80 + "%";
    img.style.top = Math.random(80) * 80 + "%";
    document.getElementById("container").appendChild(img);
}

var car = document.getElementById("car");
car.style.top = 0;  // reset de auto aan het begin van de game
car.style.left = 0;

document.body.onkeydown = function () {  //toetsenbord pijltjes-toets events
    var e = event.keyCode;
    switch (e) {
        case 40: //down
            car.style.transform = 'rotate(90deg)';
            car.style.top = (parseInt(car.style.top)) + 5 + "px";
            if (crash() == true) {
                car.style.top = (parseInt(car.style.top)) - 5 + "px";
            }
            break;
        case 37: //left
            car.style.transform = 'rotate(180deg)';
            car.style.left = (parseInt(car.style.left)) + 5 + "px";
            if (crash() == true) {
                car.style.left = (parseInt(car.style.left)) - 5 + "px";

            }
            break;
        case 39: //right
            car.style.transform = 'rotate(0deg)';
            car.style.left = (parseInt(car.style.left)) + 5 + "px";
            if (crash() == true) {
                car.style.left = (parseInt(car.style.left)) - 5 + "px";

            }
            break;
        case 37: //top
            car.style.transform = 'rotate(-90deg)';
            car.style.top = (parseInt(car.style.top)) + 5 + "px";
            if (crash() == true) {
                car.style.top = (parseInt(car.style.top)) - 5 + "px";

            }
            break;
    }
    function crash() {
        trees = document.getElementsByClassName("tree"); // haal alle bomen op
        var overlap = false;
        for (let index = 0; index < trees.length; index++) { // loop door ale bomen heen, en kijk of er raakvlak is met de car
            overlap = !(car.getBoundingClientRect().right < trees[index].getBoundingClientRect().left ||
                car.getBoundingClientRect().left > trees[index].getBoundingClientRect().right ||
                car.getBoundingClientRect().bottom < trees[index].getBoundingClientRect().top ||
                car.getBoundingClientRect().top > trees[index].getBoundingClientRect().bottom);
       if (overlap) { // er is een crash, tel de crashcounter op
                crashCounter += 1;
                return true;

            }
        }
        return overlap;
    }

}