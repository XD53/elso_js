console.log("Hello world!");

/* változók delklarálása

var
let
const
*/

let szam1 = 2;
let szam2 = 3;
szam2 = 12
const szam = 3.14

/* constans, állandó*/
// szam= 2.79 hibaüzenet, a contans értéket nem változtathatom meg.


console.log(szam1 + szam2);


document.getElementById("cim").textContent = "Kedvenceim";

document.querySelector(".gyumolcs").textContent = document.querySelector(".gyumolcs").textContent.toUpperCase();

document.getElementsByClassName("gyumolcs")[1].textContent = "Sárga körte";

document.getElementById("uzenet").addEventListener("click", function() {
    let gyumolcs = document.getElementById("kedvenc").value;

    let ujElem = document.createElement("li");
    ujElem.className = "gyumolcs";
    ujElem.textContent = gyumolcs;

    document.querySelector("ul").appendChild(ujElem);
});
