// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyA5D2fGN2-MMhvJcnvJfD0ezUr73Wl1KiA",
    authDomain: "contact-form-c1071.firebaseapp.com",
    databaseURL: "https://contact-form-c1071.firebaseio.com",
    projectId: "contact-form-c1071",
    storageBucket: "contact-form-c1071.appspot.com",
    messagingSenderId: "246860078451",
    appId: "1:246860078451:web:498507caa046bc499fb906",
    measurementId: "G-CL0HRTCY5G"
  };
  firebase.initializeApp(config);

  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var fname = getInputVal('fname');
    var lname = getInputVal('lname');
    var gender = getInputVal('gender');
    var email= getInputVal('email');
    var subject = getInputVal('subject');
  
    // Save message
    saveMessage(fname, lname, gender, email, subject);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(fname, lname, gender, email, subject){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      fname: fname,
      lname:lname,
      gender:gender,
      email:email,
      subject:subject
    });
  }