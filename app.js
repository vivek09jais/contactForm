//Initialize Firebase
var config = {
  apiKey: "AIzaSyCfo55497NsfQf4RZv1sHsN1eb7XkARzU4",
  authDomain: "contactform-8d04c.firebaseapp.com",
  databaseURL: "https://contactform-8d04c.firebaseio.com",
  projectId: "contactform-8d04c",
  storageBucket: "contactform-8d04c.appspot.com",
  messagingSenderId: "1004993175534"
};
firebase.initializeApp(config);

// messages collection
var messagesRef = firebase.database().ref('messages');

document.getElementById('ContactForm').addEventListener('submit',submitForm)

// sumbit form
    function submitForm(e){
        e.preventDefault();

        var name = getInputVal('name');
        var company = getInputVal('company');
        var email = getInputVal('email');
        var phone = getInputVal('phone');
        var message = getInputVal('message');
        
        // save message
        saveMessage(name,company,email,phone,message);

        // show alert
        document.querySelector('.alert').style.display = 'block';

        // hide alert after 3 sec
        setTimeout(function(){
            document.querySelector('.alert').style.display = 'none';
        },3000);

        // clear form
        document.getElementById('ContactForm').reset();
    }

// function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// save message to firebase
function saveMessage(name, company,email, phone,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message

    });
}