function validateForm() {

    var p = document.forms["Cpassword"]["old-password"].value;
    var p1 = document.forms["Cpassword"]["password"].value;
    var p2 = document.forms["Cpassword"]["password1"].value;
    if (p == "") {
        alert("old password is must be filled out");
    } else if (p1 == "") {
        alert("You Forget To Enter New Password");
    } else if (p2 == "" || p2 !== p1) {

        alert("Your re and new miss match");
    }

}