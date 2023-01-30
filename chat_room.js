function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
        //start code
        console.log("Room Name -" + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoom(thid.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
        //end code
        });
    });
}
getData();