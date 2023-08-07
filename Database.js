const firebaseConfig = {
    // Your API Comes here
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

var DataformDB = firebase.database().ref("Dataform");

document.getElementById("Dataform").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var fname = getElementVal("fname");
  var lname = getElementVal("lname");
  var email = getElementVal("email");
  var password = getElementVal("password");

  saveMessages(fname,lname,email,password);
  alert("Message Saved Successfully.");

  document.getElementById("Dataform").reset();
}

const saveMessages = (fname,lname,email,password) => {
  var newDataform = DataformDB.push();

  newDataform.set({
    fname: fname,
    lname:lname,
    email: email,
    password: password
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
