/*
Snack 2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate inizialmente a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

//var declaration
var teams = [
    {
        name : "Roma",
        goals : 0,
        fouls : 0
    },
    {
        name : "Napoli",
        goals : 0,
        fouls : 0
    },
    {
        name : "Inter",
        goals : 0,
        fouls : 0
    },
    {
        name : "Juventus",
        goals : 0,
        fouls : 0
    },
    {
        name : "Milan",
        goals : 0,
        fouls : 0
    }
];

var teamsCopy = [];

////fill goals and fouls with random ints, then copy teams to copy array without goals
for (var i = 0; i < teams.length; i++) {
    teams[i].goals = getRandomInt(0, 100);
    teams[i].fouls = getRandomInt(0, 200);

    //v2
    teamsCopy.push(
        {
        name : teams[i].name,
        fouls : teams[i].fouls
        }
    );

    //v1
    // var currentTeam = [];
    // currentTeam.push(teams[i].name, teams[i].fouls);
    // teamsCopy.push(currentTeam);

    console.log(teams[i].name, "ha subito", teams[i].fouls, "falli");
}

console.log(teams);
console.log(teamsCopy);

//----- FUNCTIONS -----//
//get random int, inclusive
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}