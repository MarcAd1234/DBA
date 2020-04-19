var $$ = Dom7;

var app = new Framework7({
  root: '#app', // App root element


  name: 'DBA', // App name
  theme: 'auto', // Automatic theme detection

  // App routes
  routes: routes,
  // Register service worker
  serviceWorker: {
    path: '/service-worker.js',
  },
});

// Add to homescreen -- https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Add_to_home_screen
let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
});


// Play alone

function StartAlone(){
  s = 1;
  Runde = 1;
  ergGesamt = 0; 
}


function ClickButton0() {
      if (s == 1) {
        s = s + 1;
        return document.getElementById("s1").value = "0";
        console.log(s);
      } else if (s == 2) {
        s = s + 1;
        return document.getElementById("s2").value = "0";
        console.log(s);
      } else if (s == 3){
        s = s + 1
        document.getElementById("s3").value = "0"
      } else if (s == 4){
        s = s + 1
        document.getElementById("s4").value = "0"
      } else if (s == 5){
        s = s + 1
        document.getElementById("s5").value = "0"
      } else if (s == 6){
        s = 0
        document.getElementById("s6").value = "0"
      } 
    }



function ClickButton6() {
    if (s == 1) {
        s = s + 1;
        return document.getElementById("s1").value = "6";
      } else if (s == 2) {
        s = s + 1;
        return document.getElementById("s2").value = "6";
      } else if (s == 3){
        s = s + 1
        document.getElementById("s3").value = "6"
      } else if (s == 4){
        s = s + 1
        document.getElementById("s4").value = "6"
      } else if (s == 5){
        s = s + 1
        document.getElementById("s5").value = "6"
      } else if (s == 6){
        s = 0
        document.getElementById("s6").value = "6"
      }
    }

    function ClickButton7() {
      if (s == 1) {
          s = s + 1;
          return document.getElementById("s1").value = "7";
        } else if (s == 2) {
          s = s + 1;
          return document.getElementById("s2").value = "7";
        } else if (s == 3){
          s = s + 1
          document.getElementById("s3").value = "7"
        } else if (s == 4){
          s = s + 1
          document.getElementById("s4").value = "7"
        } else if (s == 5){
          s = s + 1
          document.getElementById("s5").value = "7"
        } else if (s == 6){
          s = 0
          document.getElementById("s6").value = "7"
        }
      }

      function ClickButton8() {
        if (s == 1) {
            s = s + 1;
            return document.getElementById("s1").value = "8";
          } else if (s == 2) {
            s = s + 1;
            return document.getElementById("s2").value = "8";
          } else if (s == 3){
            s = s + 1
            document.getElementById("s3").value = "8"
          } else if (s == 4){
            s = s + 1
            document.getElementById("s4").value = "8"
          } else if (s == 5){
            s = s + 1
            document.getElementById("s5").value = "8"
          } else if (s == 6){
            s = 0
            document.getElementById("s6").value = "8"
          }
        }

        function ClickButton9() {
          if (s == 1) {
              s = s + 1;
              return document.getElementById("s1").value = "9";
            } else if (s == 2) {
              s = s + 1;
              return document.getElementById("s2").value = "9";
            } else if (s == 3){
              s = s + 1
              document.getElementById("s3").value = "9"
            } else if (s == 4){
              s = s + 1
              document.getElementById("s4").value = "9"
            } else if (s == 5){
              s = s + 1
              document.getElementById("s5").value = "9"
            } else if (s == 6){
              s = 0
              document.getElementById("s6").value = "9"
            }
          }

          function ClickButton10() {
            if (s == 1) {
                s = s + 1;
                return document.getElementById("s1").value = "10";
              } else if (s == 2) {
                s = s + 1;
                return document.getElementById("s2").value = "10";
              } else if (s == 3){
                s = s + 1
                document.getElementById("s3").value = "10"
              } else if (s == 4){
                s = s + 1
                document.getElementById("s4").value = "10"
              } else if (s == 5){
                s = s + 1
                document.getElementById("s5").value = "10"
              } else if (s == 6){
                s = 0
                document.getElementById("s6").value = "10"
              }
            }

            function CountRound() {
              x = parseInt(document.getElementById("s1").value) + parseInt(document.getElementById("s2").value) + parseInt(document.getElementById("s3").value) + parseInt(document.getElementById("s4").value) + parseInt(document.getElementById("s5").value) + parseInt(document.getElementById("s6").value);
              if (Runde == 1){
                if (isNaN(x)) {
                  app.dialog.alert("Bitte fülle alle Schussfelder aus!");
                } 
                else {
                  document.getElementById("r1").innerHTML = x;
                  GetRidOff()
                }
              } else if (Runde ==2){
                if (isNaN(x)) {
                  app.dialog.alert("Bitte fülle alle Schussfelder aus!");
                } 
                else {
                  document.getElementById("r2").innerHTML = x;
                  GetRidOff()
                }
              } else if (Runde ==3){
                if (isNaN(x)) {
                  app.dialog.alert("Bitte fülle alle Schussfelder aus!");
                } 
                else {
                  document.getElementById("r3").innerHTML = x;
                  GetRidOff()
                }
              } else if (Runde ==4){
                if (isNaN(x)) {
                  app.dialog.alert("Bitte fülle alle Schussfelder aus!");
                } 
                else {
                  document.getElementById("r4").innerHTML = x;
                  GetRidOff()
                }
              } else if (Runde ==5){
                if (isNaN(x)) {
                  app.dialog.alert("Bitte fülle alle Schussfelder aus!");
                } 
                else {
                  document.getElementById("r5").innerHTML = x;
                  GetRidOff()
                }
              } else if (Runde ==6){
                if (isNaN(x)) {
                  app.dialog.alert("Bitte fülle alle Schussfelder aus!");
                } 
                else {
                  document.getElementById("r6").innerHTML = x;
                  GetRidOff()
                }
              } else if (Runde ==7){
                if (isNaN(x)) {
                  app.dialog.alert("Bitte fülle alle Schussfelder aus!");
                } 
                else {
                  document.getElementById("r7").innerHTML = x;
                  GetRidOff()
                }
              } else if (Runde ==8){
                if (isNaN(x)) {
                  app.dialog.alert("Bitte fülle alle Schussfelder aus!");
                } 
                else {
                  document.getElementById("r8").innerHTML = x;
                  GetRidOff()
                }
              } else if (Runde ==9){
                if (isNaN(x)) {
                  app.dialog.alert("Bitte fülle alle Schussfelder aus!");
                } 
                else {
                  document.getElementById("r9").innerHTML = x;
                  GetRidOff()
                }
              } else if (Runde ==10){
                if (isNaN(x)) {
                  app.dialog.alert("Bitte fülle alle Schussfelder aus!");
                } 
                else {
                  document.getElementById("r10").innerHTML = x;
                  GetRidOff()
                }
              }
              
            };

            function GetRidOff() {
              document.getElementById("s1").value = "links oben";
              document.getElementById("s2").value = "rechts oben";
              document.getElementById("s3").value = "links Mitte";
              document.getElementById("s4").value = "rechts Mitte";
              document.getElementById("s5").value = "links unten";
              document.getElementById("s6").value = "rechts unten";
              Runde = Runde + 1
              ergGesamt = parseInt(document.getElementById("r1").innerHTML) + parseInt(document.getElementById("r2").innerHTML) + parseInt(document.getElementById("r3").innerHTML) + parseInt(document.getElementById("r4").innerHTML) + parseInt(document.getElementById("r5").innerHTML) + parseInt(document.getElementById("r6").innerHTML) + parseInt(document.getElementById("r7").innerHTML) + parseInt(document.getElementById("r8").innerHTML) + parseInt(document.getElementById("r9").innerHTML) + parseInt(document.getElementById("r10").innerHTML)
              document.getElementById("ergGesamt").innerHTML = ergGesamt
              s = 1

              if (Runde == 11){
                app.dialog.alert('Du hast in dieser Partie '+ ergGesamt + " Punkte erzielt");
                Runde = 1
              } 

            }


            // Zu Zweit

            function StartTwo() {
              Name1 = document.getElementById("Name1").value
              Name2 = document.getElementById("Name2").value
              
              if (isNaN(Name1 && Name2)){
                //router.navigate({ name: "together2" });
              } else {
                app.dialog.alert("Bitte gebe die Namen der Spieler an");
              }
            }


             










