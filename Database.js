const firebaseConfig = {
    apiKey: "AIzaSyCDaINeIHpJuwjDf_5-XzS2I5HLqdwhA7I",
    authDomain: "dataform-c887b.firebaseapp.com",
    databaseURL: "https://dataform-c887b-default-rtdb.firebaseio.com",
    projectId: "dataform-c887b",
    storageBucket: "dataform-c887b.appspot.com",
    messagingSenderId: "654164159720",
    appId: "1:654164159720:web:ed648eff1fcbc13d8fad5d",
    measurementId: "G-2ZQM91L04T"
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