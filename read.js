function getdata() {
    var User=document.getElementById("User").value;
    //firebase data retrieval function
    //path of your data
    //.once will get all your data in one time
    firebase.database().ref('User/'+User).once('value').then(function (snapshot) {
        //here we will get data
        //enter your field name
        var name=snapshot.val().userName;
        var Time=snapshot.val().Time;
        var Record=snapshot.val().Record;
        
        var Photo=snapshot.val().Photo;
        var Datee=snapshot.val().Date;

        //now we have data in variables
        //now show them in our html

        document.getElementById("name").innerHTML=name;
        document.getElementById("Time").innerHTML=Time;
        document.getElementById("Record").innerHTML=Record;
        document.getElementById("Photo").innerHTML=Photo;
        document.getElementById("Date").innerHTML=Datee;
    })
}

