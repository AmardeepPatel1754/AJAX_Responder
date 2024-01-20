const linkm = "https://csunix.mohawkcollege.ca/~adams/10259/a6_responder.php";


document.getElementById("button1").addEventListener("click", function () {
    console.log("hii");
    fetch(linkm, { credentials: 'include' })
        .then(response => response.text())
        .then(responseText => {
            let h1 = document.createElement("h1");
            h1.innerHTML = responseText + "#000892525";
            h1.style.textAlign = "center";
            h1.style.padding = "15px";
            h1.style.fontSize = "30px";
            document.getElementById("container").appendChild(h1);
        })
});

document.getElementById("sendajax").addEventListener("click", () => {
    console.log("Pressed");
    let choice = 'mario';
    if (document.getElementById("S").checked) {
        choice = 'starwars';
        let url = "https://csunix.mohawkcollege.ca/~adams/10259/a6_responder.php?choice=mario?choice=starwars";
        fetch(url, { credentials: 'include' })
        .then(response => response.json())
        .then(JsonString => {

            console.log(JsonString);

            var table = '<table><thead><tr><th>Series</th><th>Name</th><th>Link</th></tr></thead>';
                table += '<tbody>';


            for (let i = 0; i < JsonString.length; i++){
                
                table += '<tr><td>' + JsonString[i].series  + '</td><td>' + JsonString[i].name +  '</td><td>' + JsonString[i].link + '</td></tr>';
                
            }
            table += '</table>';
            document.getElementById("table").innerHTML = table;
            console.log(table);
        });
    }

    if (document.getElementById("M").checked) {
        choice = "starwars";
        let url = "https://csunix.mohawkcollege.ca/~adams/10259/a6_responder.php?choice=mario?choice=mario";
      
        fetch(url, { credentials: 'include' })
        .then(response => response.json())
        .then(JsonString => {

            console.log(JsonString);

            var table = '<table><thead><tr><th>Series</th><th>Name</th><th>Link</th></tr></thead>';
                table += '<tbody>';


            for (let i = 0; i < JsonString.length; i++){
 
                table += '<tr><td>' + JsonString[i].series  + '</td><td>' + JsonString[i].name +  '</td><td>' + JsonString[i].link + '</td></tr>';
                
            }
            table += '</table>';
            document.getElementById("table").innerHTML = table;
            console.log(table);
        });
    }

});

document.getElementById("postajax").addEventListener("click", function () {
    console.log("3");
});