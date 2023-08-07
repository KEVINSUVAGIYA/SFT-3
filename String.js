function appending(){
    var given_String = document.getElementById("string").value;
    alert(given_String + " " + "Something");
    document.getElementById("ans").innerHTML = given_String + " " + "Something";
}