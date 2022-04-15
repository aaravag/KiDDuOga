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
  document.getElementById("User_Name").innerHTML = "Welcome   " + User_Name + "   !!";

function getData(){
    firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey;

console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
document.getElementById("output").innerHTML += row;
});
    });
}
getData();
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location = "kwitter_page.html";
}
function add_room(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding_roomname"
    });
    localStorage.setItem("room_name" , room_name);
    console.log(room_name);
    window.location = "kwitter_page.html"
}
function log_out(){
    localStorage.removeItem("User_Name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}


   
