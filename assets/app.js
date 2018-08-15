var config = {
    apiKey: "AIzaSyBG_64BII5sulv4AhzF9kIqdW_HMBP1MnI",
    authDomain: "train-schedule-29cd7.firebaseapp.com",
    databaseURL: "https://train-schedule-29cd7.firebaseio.com",
    projectId: "train-schedule-29cd7",
    storageBucket: "",
    messagingSenderId: "184200404210"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $(document).on("click", "#submit", function(event) {
    event.preventDefault();
     
    var trainName = $("#train").val().trim();
    var desName = $("#destination").val().trim();
    var trainTime = moment($("#firstTrain").val().trim(), "HH:mm").format("X");
    var trainFreq = $("#frequency").val().trim();
    
    
    console.log(trainName);
    console.log(desName);
    console.log(trainTime);
    console.log(trainFreq);

  
    var newTrain = {
        name: trainName,
        destination: desName,
        time: trainTime,
        frequency: trainFreq,
      };
      database.ref().push(newTrain);
   
   
   console.log(trainName.name);
   console.log(desName.destination);
   console.log(trainTime.time);
   console.log(trainFreq.frequency);
   
   

   $("#train").val("");
   $("#destination").val("");
   $("#firstTrain").val("");
   $("#frequency").val("");
   });
   database.ref().on("child_added", function(childSnapshot, prevChildKey) {
   
    console.log(childSnapshot.val());
   
    var trainName = childSnapshot.val().name;
    var desName = childSnapshot.val().destination;
    var trainTime = childSnapshot.val().time;
    var trainFreq = childSnapshot.val().frequency;
   
    
    console.log(trainName);
    console.log(desName);
    console.log(trainTime);
    console.log(trainFreq);
   
 
}); 
 
    