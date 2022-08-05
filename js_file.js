function myFunction() {
    let person = prompt("Please enter your name");
       if (person != null) { 
        let cahr_last = person.slice(-1);
        if(cahr_last=='a' || cahr_last=='e' || cahr_last=='i' || cahr_last=='o' || cahr_last=='u') {
            document.getElementById("demo").innerHTML ="Good";
        } else{
            document.getElementById("demo").innerHTML ="Bad";
        }
       }
    }
