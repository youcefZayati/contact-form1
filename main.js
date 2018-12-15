
  var config = {
    apiKey: "AIzaSyCfxlTQY9fqwadZJEpHBp0XONValgx4yGs",
    authDomain: "contact-form-d3a86.firebaseapp.com",
    databaseURL: "https://contact-form-d3a86.firebaseio.com",
    projectId: "contact-form-d3a86",
    storageBucket: "contact-form-d3a86.appspot.com",
    messagingSenderId: "829325617158"
  };
  firebase.initializeApp(config);


var messagesRef = firebase.database().ref('messages');


document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();
   
   var fname = getInputVal('fname');
   var lname = getInputVal('lname');
   var email = getInputVal('email');
   var subject = getInputVal('subject');
   
 
   
   saveMessage(fname, lname, email, subject,);
   document.getElementById('contactForm').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(fname,lname, email, subject,){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    fname: fname,
    lname: lname,
    email: email,
    subject: subject,
  });
}
