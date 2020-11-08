function validateForm() {
    var m = document.forms["login"]["e-mail"].value;
    var p = document.forms["login"]["password"].value;
    if (m == "") {
        alert("Email address must be filled out");
    } else if (p == "") {
        alert("Password must be combination of character and digits ,@$ ,greater then 8 digit");

    }
}

function validateForm1() {

    var op = document.forms[Cpassword][old - password].value;
    if (op == "") {
        alert("old password is must be filled out");
    }

}