
var firebaseConfig = {
  apiKey: "AIzaSyCgg7aFO--8W4kMt_ZLK4ham7XYIhY-Jhk",
  authDomain: "poggamer-fe8af.firebaseapp.com",
  projectId: "poggamer-fe8af",
  storageBucket: "poggamer-fe8af.appspot.com",
  messagingSenderId: "497260719010",
  appId: "1:497260719010:web:e4c87c486931d47e6160fb",
  measurementId: "G-1ZT4DMN8GG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
var db=firebase.database().ref()

function signup(){
  
  
  var name=document.querySelector(".inp1").value
  var email=document.querySelector(".inp2").value
  
  var pas=document.querySelector(".inp3").value
  
  
  firebase.auth().createUserWithEmailAndPassword(email,pas).then(success=>{
    var user=firebase.auth().currentUser;
    
    var uid;
    if (user != null) {
              uid = user.uid; 
         }
         
         const userData = {
             name, email, pas
         }
         
         db.child(uid).set(userData)
         firebase.database().ref("users").push().set({
           "name":name,
           "countf":0
         })
         



  
         alert(user.uid)
         alert("success")
        var userk =document.getElementById("nameofgamer").innerHTML=name
        localStorage.setItem("userk", userk);
         var usern=document.getElementById("usern").value=name
         localStorage.setItem("usern", usern);
         var emailk=document.getElementById("emailofgamer").value=email
         localStorage.setItem("emailk",emailk)
         
         document.getElementById("btn").style.height="60px"
         document.getElementById("btn").style.width="60px"
         document.getElementById("btn").style.borderRadius="60px"
         document.getElementById("btn").style.color="grey"
         document.getElementById("btn").style.border="4px solid grey"
         document.getElementById("btn").innerHTML="<div class='fa fa-check'"
         
  }).catch((error)=>{
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  })
  if (typeof(Storage) !== "undefined") {
    if (localStorage.sethide) {
  
      if (localStorage.sethide === "none")
        localStorage.sethide = "flex";
      else
        localStorage.sethide = "none";
    } else {
      localStorage.sethide = "none";
    }
    document.querySelector(".full-login").style.display = localStorage.sethide;
  
  }
  
}

window.onload=function(){
  
  if (typeof(Storage) !== "undefined") {
    document.querySelector(".full-login").style.display = localStorage.sethide;
  
    document.querySelector(".full-sign").style.display = localStorage.sethide
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
  var usern = localStorage.getItem("usern");
  document.getElementById("usern").value = usern
  var userk = localStorage.getItem("userk");
  
  document.getElementById("nameofgamer").value = userk
  var emailk=localStorage.getItem("emailk")
  
  document.getElementById("emailofgamer").value=emailk
}

function signin(e){
 
    
    const email = document.querySelector(".inp22").value
    const pas = document.querySelector('.inp33').value
    
   const name = document.querySelector(".inp11").value
    firebase.auth().signInWithEmailAndPassword(email, pas).then(success => {  
         
         alert(firebase.auth().currentUser)
          firebase.database().ref("users").push().set({
            "name": name
            
          })
         var usern=document.getElementById("usern").value=name
         
         var userk=document.getElementById("nameofgamer").innerHTML=name
         var emailk=document.getElementById("emailofgamer").value=email
         localStorage.setItem("userk", userk);
         localStorage.setItem("usern", usern);
    localStorage.setItem("emailk",emailk)
    }).catch((error) => { 
         var errorCode = error.code; 
         var errorMessage = error.message; 
         alert(errorMessage)
    })
    alert("Please Wait Our AI Is Finding Account")
    if (typeof(Storage) !== "undefined") {
      if (localStorage.sethide) {
    
        if (localStorage.sethide === "none")
          localStorage.sethide = "flex";
        else
          localStorage.sethide = "none";
      } else {
        localStorage.sethide = "none";
      }
      document.querySelector(".full-sign").style.display = localStorage.sethide;
    document.querySelector(".full-login").style.display = localStorage.sethide;
    }
    
}

function logout(){
  if (typeof(Storage) !== "undefined") {
    if (localStorage.sethide) {
  
      if (localStorage.sethide === "flex")
        localStorage.sethide = "none";
      else
        localStorage.sethide = "flex";
    } else {
      localStorage.sethide = "flex";
    }
    document.querySelector(".full-login").style.display = localStorage.sethide;
  }
}


function show_log(){
  document.querySelector(".full-login").style.display = "none"
  document.querySelector(".full-sign").style.display ="flex"
}

function uploadit(){
  var input = document.createElement("input")
  input.type = "file"
  input.accept="video/*"
  input.onchange = e => {
    files = e.target.files;
    reader = new FileReader()
    reader.onload = function() {
      document.getElementById("myVid").src = reader.result;
      document.querySelector(".maincanupload").style.display="flex"
      document.getElementById("mycuteinput").value=reader.result
      waittxt.innerHTML="DONE"
      document.getElementById('upload_btn').onclick=function(){
       var sr=document.getElementById("mycuteinput").value
        document.querySelector(".maincanupload").style.display = "none"
        var name = document.querySelector(".inp1").value
        var sr = document.getElementById("mycuteinput").value
        
        firebase.database().ref("games").push().set({
          "name": name,
          "sr": sr
        })
      }
    }
    reader.readAsDataURL(files[0])
  }
  
  input.click()
 document.querySelector(".maincanupload").style.display="flex"
  alert("please click files from bottom wait till your video load")
  
  
}

firebase.database().ref("games").on("child_added", function(snapshot) {


  var html = `
            <div class="card">

        
        <h5 id="bruho">${snapshot.val().name}</h5>
 <video src=${snapshot.val().image || ""} id="card-img" style='display:' + snapshot.val().image ? "block" : "none"}/>
             
                 <source src=${snapshot.val().sr}>
               
                 </video>

        </div>
        `

  var allposts = document.getElementById("allgames")
  allposts.innerHTML = html + allposts.innerHTML;



})

function openac(){
  document.querySelector('.main-profile').style.display="flex"
  
 }


function backac(){
  document.querySelector('.main-profile').style.display="none"
}

function lagapic(){
  var input = document.createElement("input")
  input.type = "file"
  
  input.onchange = e => {
      files = e.target.files;
      reader = new FileReader()
      reader.onload=function (){
      document.getElementById("pic").src=reader.result
      
      alert(reader.result)
      }
      reader.readAsDataURL(files[0])
  }
   
   
   input.click()
}

function openst(){
  document.querySelector(".main-settings").style.display="flex"
}

function closst(){
  document.querySelector(".main-settings").style.display="none"
}

function checkit(){
 var checkbox=document.querySelector(".toggle")
 

 
   var isChecked = checkbox.checked;
 
 
   if (isChecked) {
     
       document.querySelector(".main-settings").style.background = "#222222"
       document.querySelector(".main-settings").style.color = "white"
       emailofgamer.style.color = "white"
       allgames.style.background="#222222"
       allgames.style.color="white"
       document.querySelector(".main-profile").style.background="#222222"
       document.querySelector(".main-profile").style.color="white"
       nameofgamer.style.color="white"
       txtpro.style.color="white"
       fo2.style.color="black"
     }
   else {
     
     document.querySelector(".main-settings").style.background = "white"
     document.querySelector(".main-settings").style.color = "black"
     emailofgamer.style.color="black"
     allgames.style.background = "#fff"
     allgames.style.color = "black"
     document.querySelector(".main-profile").style.background = "white"
     document.querySelector(".main-profile").style.color = "black"
      nameofgamer.style.color="black"
      txtpro.style.color="#222222"
   }
 
   

 
}

function shpog(){
  document.querySelector(".pogchat").style.display="flex"
  alert("So This Chat Feature Is Special For All Pog Gamers in this you can create or join any chat room by password and nobody can read your chat instead of you if you will close app your chat will clear by entering password again you can again send messages.you can send awesome stickers by buying vip for just $5 And Chatting Is Free😍.")
  document.querySelector(".sidenav").classList.toggle("active")
  document.querySelector(".nav-menu").classList.toggle("active")
}

function nshpog(){
  document.querySelector(".pogchat").style.display="none"
}

function create2(){
  var pogpass=document.getElementById("passofgroupinput").value
  var pogmsg="Group Created"
  var pogname=document.getElementById("nameofboi").value
  
  var db=firebase.database()
  
  db.ref("meada/"+pogpass+"/").push({




    name:pogname,
    message:pogmsg,
    
    
      
    
});
document.querySelector('.fullpogchat').style.display='none'
document.querySelector(".pogchat").style.display="none"
alert("Group Is Created Gamers Now Chat All Night")

document.querySelector(".wheretochatarea").style.display="flex"

nameofgrouppog.innerHTML=document.getElementById("nameofgroupinput").value
}

function sendmsgpog(){
  var usernamepog=document.getElementById("nameofboi").value
  var whatmess=document.getElementById("sendmsginput").value
  var pogpass2=document.getElementById("passofgroupinput").value
  
  var db=firebase.database()
  
  var msg="\n\n"+usernamepog+":"+whatmess+"\n"
 
  db.ref("meda/" + pogpass2 + "/").push({
  
  
  
  
    name: usernamepog,
    message: msg,
    
  
  
  
  });
  
  document.getElementById("sendmsginput").value=""
}

function start(){
  var pogpass2=document.getElementById("passofgroupinput").value
  document.getElementById("startbtn").style.display="none"
  
  var db=firebase.database()
  
  db.ref("meda/"+pogpass2+"/").on('child_added',function(snapshot){

        var frommsg=snapshot.val().message
        
         document.getElementById("area51").append(frommsg+"\n")
         
         })

}

function chatclose(){
  document.querySelector(".wheretochatarea").style.display="none"
}

function sh_u(){
  document.querySelector(".full-sign").style.display = "none"
  document.querySelector(".full-login").style.display = "flex"
}

function chec(){
  document.querySelector(".emoji-area").style.display="block"
  
  document.querySelector(".unlock").style.display="flex"
  
  bckemoji.onclick=function (){
    document.querySelector(".emoji-area").style.display="none"
    document.querySelector(".unlock").style.display="none"
  }
}


var random=Math.floor(Math.random()*20)
           var move=5;
           var scores=0;
           var coins=0;
            function guess(){
                
                   var input=document.getElementById("input").value
                    if(input == random){
                        var k=document.getElementById("k").innerHTML="YOU WIN"
                        coins++;
                        xpwon.innerHTML="Coins:"+coins
                    wi.style.display="block" 
                      setTimeout(function(){
                          wi.style.display="none"
                      },3000)
     if(document.getElementById("k").innerHTML=="YOU WIN"){
                            btn.onclick=function(){
                                move+=0;
                                scores+=0
                            }
                        }
                        move+=5;
                        var moves=document.getElementById("moves").innerHTML="MOVES LEFT:"+move
                        
                        scores+=1
                       document.getElementById("score").innerHTML="Score:"+scores
                    }
                    else if(input<random){
                        var input=document.getElementById("input").value
                        var k=document.getElementById("k").innerHTML="TOO LESS TRY AGAIN"
                        if(move<=0){
                            alert("U Lose")
                            scores=0
                        }
                        move-=1
                        document.getElementById("moves").innerHTML="Moves Left:"+move
                        if(move<=0){
                            alert("U Lose")
                            scores=0
                            moves=5
                            moves.innerHTML=move
                            score.innerHTML =scores
                        }
                    }
                    else if(input>random){
                        var input=document.getElementById("input").value
                        var k=document.getElementById("k").innerHTML="TOO HIGH TRY AGAIN"
                        move-=1
                        document.getElementById("moves").innerHTML="Moves Left:"+move
                    }
            }
            function rest(){
                var random=Math.floor(Math.random()*25)
                btn.onclick=function(){
                var input=document.getElementById("input").value
                    if(input == random){
                        var k=document.getElementById("k").innerHTML="YOU WIN"
                        move+=5;
                        scores+=1
                         coins++;
                        xpwon.innerHTML="Coins:"+coins
                        document.getElementById("score").innerHTML="Score"+scores
                        if(document.getElementById("k").innerHTML=="YOU WIN"){
                            btn.onclick=function(){
                                move+=0;
                                scores+=0;
                            }
                        }
                        var moves=document.getElementById("moves").innerHTML="MOVES LEFT:"+move
                    }
                    else if(input<random){
                        var input=document.getElementById("input").value
                        var k=document.getElementById("k").innerHTML="TOO LESS TRY AGAIN"
                        if(move<=0){
                            alert("U Lose")
                        }
                        move-=1
                        document.getElementById("moves").innerHTML="Moves Left:"+move
                        if(move<=0){
                            alert("U Lose")
                            scores-=scores
                            
                            document.getElementById("moves").innerHTML="Moves Left:"+move
                            score.innerHTML=scores
                            alert("Game Over")
                            setTimeout(function(){
                                move=5
                                document.getElementById("moves").innerHTML="Moves Left:"+move
                            },1300)
                        }
                    }
                    else if(input>random){
                        var input=document.getElementById("input").value
                        var k=document.getElementById("k").innerHTML="TOO HIGH TRY AGAIN"
                        move-=1
                        document.getElementById("moves").innerHTML="Moves Left:"+move
                        
                    }
                    
                    }
                    alert("Now You Have To Guess Between 1-25 bruh")
                    
                    var k=document.getElementById("k").innerHTML="Restarted"
                    var txt=document.getElementById("txt").innerHTML="You Have To Guess Number Beetwen 1-25"
            }
            
            
 
 
 function sendemo(){
   
 }
 
 function setchatpic(){
   var input = document.createElement("input")
   input.type = "file"
   
   input.onchange = e => {
     files = e.target.files;
     reader = new FileReader()
     reader.onload = function() {
       document.getElementById("chatimg").src = reader.result
   
       
     }
     reader.readAsDataURL(files[0])
   }
   
   
   input.click()
 }
 


