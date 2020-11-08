function validateForm() {
    var name = document.forms["signup"]["name"].value;
    var m = document.forms["signup"]["e-mail"].value;
    var p = document.forms["signup"]["password"].value;
    if (name == "") {
        alert("Name must be filled out");
    } else if (m == "") {
        alert("Email address must be filled out");
    } else if (p.length < 8) {
        alert("Password must be combination of character and digits ,@$ ,greater then 8 digit");

    }
}