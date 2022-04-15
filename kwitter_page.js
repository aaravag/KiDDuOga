const config = {
    apiKey: "AIzaSyAt9qukQjPJ35WQGH-ej00KnTn_rb0fAHI",
    authDomain: "kwitter-2-64546.firebaseapp.com",
    databaseURL: "https://kwitter-2-64546-default-rtdb.firebaseio.com",
    projectId: "kwitter-2-64546",
    storageBucket: "kwitter-2-64546.appspot.com",
    messagingSenderId: "154940554593",
    appId: "1:154940554593:web:6f875e16b3b602ea4f1920"
  };
  
  
  // Initialize Firebase
  firebase.initializeApp(config);
  User_Name = localStorage.getItem("User_Name");
  room_name =localStorage.getItem("room_name");

  function send(){
        message = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
          name:User_Name,
          like:0,
          message:msg
        });
        document.getElementById("msg").value = "";
  }

  function logOUT(){
  localStorage.removeItem("User_Name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val();
     if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
