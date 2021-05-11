/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

//var declarations
var bikes = [       //weight in kg
    {
        name : "Wilier 0 SLR",
        weight : 6.5,
    },
    {
        name : "Cannondale SuperSix EVOHi-MOD Disc Dura Ace",
        weight : 8,
    },
    {
        name : "Trek Emonda 2020",
        weight : 6.81,
    },
    {
        name : "Trek Emonda SLR",
        weight : 4.65,
    },
    {
        name : "SAVA Phantom 2.0 700C",
        weight : 8.1,
    }
]
var minWght = 0;
var lightestBike;

//get lightest bike in bikes array
for (var i = 0; i < bikes.length; i++) { 

    if (minWght == 0 || bikes[i].weight < minWght) {
        minWght = bikes[i].weight;
        lightestBike = bikes[i];
    }

}

//prints lightest bike
console.log("La bici più leggera e' la", lightestBike.name, "con un peso di", lightestBike.weight, "kg");