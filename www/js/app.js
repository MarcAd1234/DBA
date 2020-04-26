var $$ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

var app = new Framework7({
  root: '#app', // App root element
  name: 'DBA', // App name
  theme: theme,
  autoDarkTheme: false,

  // App routes
  routes: routes,
  // Register service worker
  serviceWorker: {
    path: '/service-worker.js',
  },
});

// Add and init View
var view = app.views.create('.view-main');


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
 

// Enable Dark Theme
function darkthemeklick() {
  
}



// Refresh Page
/* function reloadButton() {
  view.router.navigate("/", ignoreCache: true)
};
 */


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
              Name1 = document.getElementById("Name1").value;
              Name2 = document.getElementById("Name2").value;
              Name1S = String(Name1)
              Name2S = String(Name2)
            {
              if (isNaN(Name1 && Name2)){
                view.router.navigate("/together2/");
              } else {
                app.dialog.alert("Bitte gebe die Namen der Spieler an");
              }
            }
            };
 
            function BeginnGameWithTwo() {
            document.getElementById("SA").innerHTML = Name1S;
            document.getElementById("SB").innerHTML = Name2S;
            document.getElementById("GesamtA").innerHTML = ("Gesamt " + Name1S);
            document.getElementById("GesamtB").innerHTML = ("Gesamt " + Name2S);
            // Konfiguration aus Radio List: https://stackoverflow.com/questions/15839169/how-to-get-value-of-selected-radio-button
            if(document.getElementById('radio10').checked){
              konfig_value = document.getElementById('radio10').value;
            
            }else if(document.getElementById('radio8').checked){
              konfig_value = document.getElementById('radio8').value;
            
            }else if(document.getElementById('radioFREE').checked){
              konfig_value = document.getElementById('radioFREE').value;
            }
            document.getElementById("configInfo").innerHTML = ("Konfiguration: " + konfig_value);

            s = 1;
            RundeA = 1;
            RundeB = 0.5;
            document.getElementById("playerATM").innerHTML = (Name1S + " ist gerade dran");
            document.getElementById("AbgabeButton").innerHTML = ("Runde für " + Name1S + " abgeben")
            };



            function CountRoundDuell() {
              x = parseInt(document.getElementById("s1").value) + parseInt(document.getElementById("s2").value) + parseInt(document.getElementById("s3").value) + parseInt(document.getElementById("s4").value) + parseInt(document.getElementById("s5").value) + parseInt(document.getElementById("s6").value);
              if (RundeA == 1 || RundeB == 1){
                if (isNaN(x)) {
                  app.dialog.alert("Bitte fülle alle Schussfelder aus!");
                } 
                else {
                  if (RundeA == 1){
                     document.getElementById("r1SA").innerHTML = x;
                     GetRidOffA()
                  } else if (RundeB == 1){
                    document.getElementById("r1SB").innerHTML = x;
                    GetRidOffB()
                  }
                }
              } else if (RundeA == 2 || RundeB == 2){
                if (isNaN(x)) {
                  app.dialog.alert("Bitte fülle alle Schussfelder aus!");
                } 
                else {
                  if (RundeA == 2){
                     document.getElementById("r2SA").innerHTML = x;
                     GetRidOffA()
                  } else if (RundeB == 2){
                    document.getElementById("r2SB").innerHTML = x;
                    GetRidOffB()
                  }
                }
              } else if (RundeA == 3 || RundeB == 3){
                if (isNaN(x)) {
                  app.dialog.alert("Bitte fülle alle Schussfelder aus!");
                } 
                else {
                  if (RundeA == 3){
                     document.getElementById("r3SA").innerHTML = x;
                     GetRidOffA()
                  } else if (RundeB == 3){
                    document.getElementById("r3SB").innerHTML = x;
                    GetRidOffB()
                  }
                }
              } else if (RundeA == 4 || RundeB == 4){
                if (isNaN(x)) {
                  app.dialog.alert("Bitte fülle alle Schussfelder aus!");
                } 
                else {
                  if (RundeA == 4){
                     document.getElementById("r4SA").innerHTML = x;
                     GetRidOffA()
                  } else if (RundeB == 4){
                    document.getElementById("r4SB").innerHTML = x;
                    GetRidOffB()
                  }
                }
              } else if (RundeA == 5 || RundeB == 5){
                if (isNaN(x)) {
                  app.dialog.alert("Bitte fülle alle Schussfelder aus!");
                } 
                else {
                  if (RundeA == 5){
                     document.getElementById("r5SA").innerHTML = x;
                     GetRidOffA()
                  } else if (RundeB == 5){
                    document.getElementById("r5SB").innerHTML = x;
                    GetRidOffB()
                  }
                }
              } else if (RundeA == 6 || RundeB == 6){
                if (isNaN(x)) {
                  app.dialog.alert("Bitte fülle alle Schussfelder aus!");
                } 
                else {
                  if (RundeA == 6){
                     document.getElementById("r6SA").innerHTML = x;
                     GetRidOffA()
                  } else if (RundeB == 6){
                    document.getElementById("r6SB").innerHTML = x;
                    GetRidOffB()
                  }
                }
              } else if (RundeA == 7 || RundeB == 7){
                if (isNaN(x)) {
                  app.dialog.alert("Bitte fülle alle Schussfelder aus!");
                } 
                else {
                  if (RundeA == 7){
                     document.getElementById("r7SA").innerHTML = x;
                     GetRidOffA()
                  } else if (RundeB == 7){
                    document.getElementById("r7SB").innerHTML = x;
                    GetRidOffB()
                  }
                }
              } else if (RundeA == 8 || RundeB == 8){
                if (isNaN(x)) {
                  app.dialog.alert("Bitte fülle alle Schussfelder aus!");
                } 
                else {
                  if (RundeA == 8){
                     document.getElementById("r8SA").innerHTML = x;
                     GetRidOffA()
                  } else if (RundeB == 8){
                    document.getElementById("r8SB").innerHTML = x;
                    GetRidOffB()
                  }
                }
              } else if (RundeA == 9 || RundeB == 9){
                if (isNaN(x)) {
                  app.dialog.alert("Bitte fülle alle Schussfelder aus!");
                } 
                else {
                  if (RundeA == 9){
                     document.getElementById("r9SA").innerHTML = x;
                     GetRidOffA()
                  } else if (RundeB == 9){
                    document.getElementById("r9SB").innerHTML = x;
                    GetRidOffB()
                  }
                }
              } else if (RundeA == 10 || RundeB == 10){
                  if (isNaN(x)) {
                    app.dialog.alert("Bitte fülle alle Schussfelder aus!");
                  } 
                  else {
                    if (RundeA == 10){
                       document.getElementById("r10SA").innerHTML = x;
                       GetRidOffA()
                    } else if (RundeB == 10){
                      document.getElementById("r10SB").innerHTML = x;
                      GetRidOffB()
                    }
                  }  
            };
          }

            function GetRidOffA() {
              document.getElementById("s1").value = "links oben";
              document.getElementById("s2").value = "rechts oben";
              document.getElementById("s3").value = "links Mitte";
              document.getElementById("s4").value = "rechts Mitte";
              document.getElementById("s5").value = "links unten";
              document.getElementById("s6").value = "rechts unten";
              ergGesamtA = parseInt(document.getElementById("r1SA").innerHTML) + parseInt(document.getElementById("r2SA").innerHTML) + parseInt(document.getElementById("r3SA").innerHTML) + parseInt(document.getElementById("r4SA").innerHTML) + parseInt(document.getElementById("r5SA").innerHTML) + parseInt(document.getElementById("r6SA").innerHTML) + parseInt(document.getElementById("r7SA").innerHTML) + parseInt(document.getElementById("r8SA").innerHTML) + parseInt(document.getElementById("r9SA").innerHTML) + parseInt(document.getElementById("r10SA").innerHTML)
              document.getElementById("ergGesamtA").innerHTML = ergGesamtA
              s = 1
              RundeA = RundeA + 0.5
              RundeB = RundeB + 0.5
              document.getElementById("playerATM").innerHTML = (Name2S + " ist gerade dran");
              document.getElementById("AbgabeButton").innerHTML = ("Runde für " + Name2S + " abgeben")
            }

            function GetRidOffB() {
              document.getElementById("s1").value = "links oben";
              document.getElementById("s2").value = "rechts oben";
              document.getElementById("s3").value = "links Mitte";
              document.getElementById("s4").value = "rechts Mitte";
              document.getElementById("s5").value = "links unten";
              document.getElementById("s6").value = "rechts unten";
              ergGesamtB = parseInt(document.getElementById("r1SB").innerHTML) + parseInt(document.getElementById("r2SB").innerHTML) + parseInt(document.getElementById("r3SB").innerHTML) + parseInt(document.getElementById("r4SB").innerHTML) + parseInt(document.getElementById("r5SB").innerHTML) + parseInt(document.getElementById("r6SB").innerHTML) + parseInt(document.getElementById("r7SB").innerHTML) + parseInt(document.getElementById("r8SB").innerHTML) + parseInt(document.getElementById("r9SB").innerHTML) + parseInt(document.getElementById("r10SB").innerHTML)
              document.getElementById("ergGesamtB").innerHTML = ergGesamtB
              s = 1
              RundeA = RundeA + 0.5
              RundeB = RundeB + 0.5
              document.getElementById("playerATM").innerHTML = (Name1S + " ist gerade dran");
              document.getElementById("AbgabeButton").innerHTML = ("Runde für " + Name1S + " abgeben")
              if (RundeB == 10.5){
                EndeA = document.getElementById("ergGesamtA").innerHTML
                EndeB = document.getElementById("ergGesamtB").innerHTML
                if (EndeA > EndeB) {
                  app.dialog.alert("Das Spiel ist beendet! " + Name1S + " hat gewonnen")
                  document.getElementById("playerATM").innerHTML = (Name1S + " hat bereits gewonnen")
                } else {
                  app.dialog.alert("Das Spiel ist beendet! " + Name2S + " hat gewonnen")
                  document.getElementById("playerATM").innerHTML = (Name2S + " hat bereits gewonnen")
                }
                Runde = 0
                document.getElementById("AbgabeButton").innerHTML = ("...");
              }; 
            }