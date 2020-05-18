function getSkill()
{
    var a = 
        [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10"
        ];

    var random = Math.floor(Math.random() * (a.length - 1));
    document.getElementById("skill").innerHTML = a[random];
}

