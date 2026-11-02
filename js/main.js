const favSingers = [
    {
    name: "Kendrick Lamar",
    dob: "06/17/1987",
    bestSong: "Euphoria"
    },
    {
    name: "Eminem",
    dob: "10/17/1972",
    bestSong: "Role Model"
    },
    {
    name: "Layne Staley (Alice in Chains)",
    dob: "8/22/1967",
    bestSong: "Would?"
    },
    {
    name: "Amy Winehouse",
    dob: "9/14/1983",
    bestSong: "Valerie"
    },
];


const singerTable = document.getElementById("singerTable");


favSingers.forEach((singer) => {
    singerTable.innerHTML += `
    <tr>
        <td>${singer.name}</td>
        <td>${singer.dob}</td>
        <td>${singer.bestSong}</td>
    </tr>
    `
});