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
 


// Enable Dark Theme
function darkthemeklick() {
  if (Framework7.device.ios) {
    document.getElementById("htmlpage").className = "theme-dark ios ios-translucent-bars ios-translucent-modals device-pixel-ratio-2 device-ios";
  }
  else{
    document.getElementById("htmlpage").className = "theme-dark md device-pixel-ratio-3 device-android"
  }
  var x = document.getElementById("darkbutton");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("whitebutton");
  y.style.display = "block"
}

function whitethemeklick() {
  if (Framework7.device.ios) {
    document.getElementById("htmlpage").className = "theme-white ios ios-translucent-bars ios-translucent-modals device-pixel-ratio-2 device-ios";
  }
  else{
    document.getElementById("htmlpage").className = "theme-white md device-pixel-ratio-3 device-android"
  }
  var y = document.getElementById("whitebutton");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var x = document.getElementById("darkbutton");
  x.style.display = "block"
}



// // Updates Button - #erstmal verworfen
//  function reloadButton() {
//   if ('serviceWorker' in navigator) {
//     caches.keys().then(function(cacheNames) {
//       cacheNames.forEach(function(cacheName) {
//         caches.delete(cacheName);
//       });
//     });
//   }
// };


// Play alone

function StartAlone(){
  s = 1;
  Runde = 1;
  ergGesamt = 0;
  zehner = 0 
}


function ClickButton0() {
      if (s == 1) {
        check = parseInt(document.getElementById("s1").value)
        if (isNaN(check)) {
          s = s + 1;
          document.getElementById("s1").value = "0"
        }
        else {
          s = s + 1
          ClickButton0()
        }
      } else if (s == 2) {
        check = parseInt(document.getElementById("s2").value)
        if (isNaN(check)) {
          s = s + 1;
          document.getElementById("s2").value = "0"
        }
        else {
          s = s + 1
          ClickButton0()
        }
      } else if (s == 3){
        check = parseInt(document.getElementById("s3").value)
        if (isNaN(check)) {
          s = s + 1;
          document.getElementById("s3").value = "0"
        }
        else {
          s = s + 1
          ClickButton0()
        }
      } else if (s == 4){
        check = parseInt(document.getElementById("s4").value)
        if (isNaN(check)) {
          s = s + 1;
          document.getElementById("s4").value = "0"
        }
        else {
          s = s + 1
          ClickButton0()
        }
      } else if (s == 5){
        check = parseInt(document.getElementById("s5").value)
        if (isNaN(check)) {
          s = s + 1;
          document.getElementById("s5").value = "0"
        }
        else {
          s = s + 1
          ClickButton0()
        }
      } else if (s == 6){
        check = parseInt(document.getElementById("s6").value)
        if (isNaN(check)) {
          s = s + 1;
          document.getElementById("s6").value = "0"
        }
        else {
          s = s + 1
          ClickButton0()
        }
      } 
    }



function ClickButton6() {
    if (s == 1) {
      check = parseInt(document.getElementById("s1").value)
      if (isNaN(check)) {
        s = s + 1;
        document.getElementById("s1").value = "6"
      }
      else {
        s = s + 1
        ClickButton6()
      }
      } else if (s == 2) {
        check = parseInt(document.getElementById("s2").value)
        if (isNaN(check)) {
          s = s + 1;
          document.getElementById("s2").value = "6"
        }
        else {
          s = s + 1
          ClickButton6()
        }
      } else if (s == 3){
        check = parseInt(document.getElementById("s3").value)
        if (isNaN(check)) {
          s = s + 1;
          document.getElementById("s3").value = "6"
        }
        else {
          s = s + 1
          ClickButton6()
        }
      } else if (s == 4){
        check = parseInt(document.getElementById("s4").value)
        if (isNaN(check)) {
          s = s + 1;
          document.getElementById("s4").value = "6"
        }
        else {
          s = s + 1
          ClickButton6()
        }
      } else if (s == 5){
        check = parseInt(document.getElementById("s5").value)
        if (isNaN(check)) {
          s = s + 1;
          document.getElementById("s5").value = "6"
        }
        else {
          s = s + 1
          ClickButton6()
        }
      } else if (s == 6){
        check = parseInt(document.getElementById("s6").value)
        if (isNaN(check)) {
          s = s + 1;
          document.getElementById("s6").value = "6"
        }
        else {
          s = s + 1
          ClickButton6()
        }
      }
    }

    function ClickButton7() {
      if (s == 1) {
        check = parseInt(document.getElementById("s1").value)
        if (isNaN(check)) {
          s = s + 1;
          document.getElementById("s1").value = "7"
        }
        else {
          s = s + 1
          ClickButton7()
        }
        } else if (s == 2) {
          check = parseInt(document.getElementById("s2").value)
          if (isNaN(check)) {
            s = s + 1;
            document.getElementById("s2").value = "7"
          }
          else {
            s = s + 1
            ClickButton7()
          }
        } else if (s == 3){
          check = parseInt(document.getElementById("s3").value)
          if (isNaN(check)) {
            s = s + 1;
            document.getElementById("s3").value = "7"
          }
          else {
            s = s + 1
            ClickButton7()
          }
        } else if (s == 4){
          check = parseInt(document.getElementById("s4").value)
          if (isNaN(check)) {
            s = s + 1;
            document.getElementById("s4").value = "7"
          }
          else {
            s = s + 1
            ClickButton7()
          }
        } else if (s == 5){
          check = parseInt(document.getElementById("s5").value)
          if (isNaN(check)) {
            s = s + 1;
            document.getElementById("s5").value = "7"
          }
          else {
            s = s + 1
            ClickButton7()
          }
        } else if (s == 6){
          check = parseInt(document.getElementById("s6").value)
          if (isNaN(check)) {
            s = s + 1;
            document.getElementById("s6").value = "7"
          }
          else {
            s = s + 1
            ClickButton7()
          }
        }
      }
    

      function ClickButton8() {
        if (s == 1) {
          check = parseInt(document.getElementById("s1").value)
          if (isNaN(check)) {
            s = s + 1;
            document.getElementById("s1").value = "8"
          }
          else {
            s = s + 1
            ClickButton8()
          }
          } else if (s == 2) {
            check = parseInt(document.getElementById("s2").value)
            if (isNaN(check)) {
              s = s + 1;
              document.getElementById("s2").value = "8"
            }
            else {
              s = s + 1
              ClickButton8()
            }
          } else if (s == 3){
            check = parseInt(document.getElementById("s3").value)
            if (isNaN(check)) {
              s = s + 1;
              document.getElementById("s3").value = "8"
            }
            else {
              s = s + 1
              ClickButton8()
            }
          } else if (s == 4){
            check = parseInt(document.getElementById("s4").value)
            if (isNaN(check)) {
              s = s + 1;
              document.getElementById("s4").value = "8"
            }
            else {
              s = s + 1
              ClickButton8()
            }
          } else if (s == 5){
            check = parseInt(document.getElementById("s5").value)
            if (isNaN(check)) {
              s = s + 1;
              document.getElementById("s5").value = "8"
            }
            else {
              s = s + 1
              ClickButton8()
            }
          } else if (s == 6){
            check = parseInt(document.getElementById("s6").value)
            if (isNaN(check)) {
              s = s + 1;
              document.getElementById("s6").value = "8"
            }
            else {
              s = s + 1
              ClickButton8()
            }
          }
        }

        function ClickButton9() {
          if (s == 1) {
            check = parseInt(document.getElementById("s1").value)
            if (isNaN(check)) {
              s = s + 1;
              document.getElementById("s1").value = "9"
            }
            else {
              s = s + 1
              ClickButton9()
            }
            } else if (s == 2) {
              check = parseInt(document.getElementById("s2").value)
              if (isNaN(check)) {
                s = s + 1;
                document.getElementById("s2").value = "9"
              }
              else {
                s = s + 1
                ClickButton9()
              }
            } else if (s == 3){
              check = parseInt(document.getElementById("s3").value)
              if (isNaN(check)) {
                s = s + 1;
                document.getElementById("s3").value = "9"
              }
              else {
                s = s + 1
                ClickButton9()
              }
            } else if (s == 4){
              check = parseInt(document.getElementById("s4").value)
              if (isNaN(check)) {
                s = s + 1;
                document.getElementById("s4").value = "9"
              }
              else {
                s = s + 1
                ClickButton9()
              }
            } else if (s == 5){
              check = parseInt(document.getElementById("s5").value)
              if (isNaN(check)) {
                s = s + 1;
                document.getElementById("s5").value = "9"
              }
              else {
                s = s + 1
                ClickButton9()
              }
            } else if (s == 6){
              check = parseInt(document.getElementById("s6").value)
              if (isNaN(check)) {
                s = s + 1;
                document.getElementById("s6").value = "9"
              }
              else {
                s = s + 1
                ClickButton9()
              }
            }
          }

          function ClickButton10() {
            if (s == 1) {
              check = parseInt(document.getElementById("s1").value)
              if (isNaN(check)) {
                s = s + 1;
                document.getElementById("s1").value = "10"
              }
              else {
                s = s + 1
                ClickButton10()
              }
              } else if (s == 2) {
                check = parseInt(document.getElementById("s2").value)
                if (isNaN(check)) {
                  s = s + 1;
                  document.getElementById("s2").value = "10"
                }
                else {
                  s = s + 1
                  ClickButton10()
                }
              } else if (s == 3){
                check = parseInt(document.getElementById("s3").value)
                if (isNaN(check)) {
                  s = s + 1;
                  document.getElementById("s3").value = "10"
                }
                else {
                  s = s + 1
                  ClickButton10()
                }
              } else if (s == 4){
                check = parseInt(document.getElementById("s4").value)
                if (isNaN(check)) {
                  s = s + 1;
                  document.getElementById("s4").value = "10"
                }
                else {
                  s = s + 1
                  ClickButton10()
                }
              } else if (s == 5){
                check = parseInt(document.getElementById("s5").value)
                if (isNaN(check)) {
                  s = s + 1;
                  document.getElementById("s5").value = "10"
                }
                else {
                  s = s + 1
                  ClickButton10()
                }
              } else if (s == 6){
                check = parseInt(document.getElementById("s6").value)
                if (isNaN(check)) {
                  s = s + 1;
                  document.getElementById("s6").value = "10"
                }
                else {
                  s = s + 1
                  ClickButton10()
                }
              }
            }

            function CountRound() {
              x = parseInt(document.getElementById("s1").value) + parseInt(document.getElementById("s2").value) + parseInt(document.getElementById("s3").value) + parseInt(document.getElementById("s4").value) + parseInt(document.getElementById("s5").value) + parseInt(document.getElementById("s6").value);
              if (Runde == 1){
                if (isNaN(x)) {
                  app.dialog.alert("Bitte fülle alle Schussfelder aus!");
                } 
                else {
                  s1Count = parseInt(document.getElementById("s1").value)
                  if (s1Count === 10){
                    zehner = zehner + 1
                  }
                  s2Count = parseInt(document.getElementById("s2").value)
                  if (s2Count === 10){
                    zehner = zehner + 1
                  }
                  s3Count = parseInt(document.getElementById("s3").value)
                  if (s3Count === 10){
                    zehner = zehner + 1
                  }
                  s4Count = parseInt(document.getElementById("s4").value)
                  if (s4Count === 10){
                    zehner = zehner + 1
                  }
                  s5Count = parseInt(document.getElementById("s5").value)
                  if (s5Count === 10){
                    zehner = zehner + 1
                  }
                  s6Count = parseInt(document.getElementById("s6").value)
                  if (s6Count === 10){
                    zehner = zehner + 1
                  }
                  document.getElementById("r1").innerHTML = x;
                  document.getElementById("ten").innerHTML = zehner;
                  GetRidOff()
                }
              } else if (Runde ==2){
                if (isNaN(x)) {
                  app.dialog.alert("Bitte fülle alle Schussfelder aus!");
                } 
                else {
                  s1Count = parseInt(document.getElementById("s1").value)
                  if (s1Count === 10){
                    zehner = zehner + 1
                  }
                  s2Count = parseInt(document.getElementById("s2").value)
                  if (s2Count === 10){
                    zehner = zehner + 1
                  }
                  s3Count = parseInt(document.getElementById("s3").value)
                  if (s3Count === 10){
                    zehner = zehner + 1
                  }
                  s4Count = parseInt(document.getElementById("s4").value)
                  if (s4Count === 10){
                    zehner = zehner + 1
                  }
                  s5Count = parseInt(document.getElementById("s5").value)
                  if (s5Count === 10){
                    zehner = zehner + 1
                  }
                  s6Count = parseInt(document.getElementById("s6").value)
                  if (s6Count === 10){
                    zehner = zehner + 1
                  }
                  document.getElementById("r2").innerHTML = x;
                  document.getElementById("ten").innerHTML = zehner;
                  GetRidOff()
                }
              } else if (Runde ==3){
                if (isNaN(x)) {
                  app.dialog.alert("Bitte fülle alle Schussfelder aus!");
                } 
                else {
                  s1Count = parseInt(document.getElementById("s1").value)
                  if (s1Count === 10){
                    zehner = zehner + 1
                  }
                  s2Count = parseInt(document.getElementById("s2").value)
                  if (s2Count === 10){
                    zehner = zehner + 1
                  }
                  s3Count = parseInt(document.getElementById("s3").value)
                  if (s3Count === 10){
                    zehner = zehner + 1
                  }
                  s4Count = parseInt(document.getElementById("s4").value)
                  if (s4Count === 10){
                    zehner = zehner + 1
                  }
                  s5Count = parseInt(document.getElementById("s5").value)
                  if (s5Count === 10){
                    zehner = zehner + 1
                  }
                  s6Count = parseInt(document.getElementById("s6").value)
                  if (s6Count === 10){
                    zehner = zehner + 1
                  }
                  document.getElementById("r3").innerHTML = x;
                  document.getElementById("ten").innerHTML = zehner;
                  GetRidOff()
                }
              } else if (Runde ==4){
                if (isNaN(x)) {
                  app.dialog.alert("Bitte fülle alle Schussfelder aus!");
                } 
                else {
                  s1Count = parseInt(document.getElementById("s1").value)
                  if (s1Count === 10){
                    zehner = zehner + 1
                  }
                  s2Count = parseInt(document.getElementById("s2").value)
                  if (s2Count === 10){
                    zehner = zehner + 1
                  }
                  s3Count = parseInt(document.getElementById("s3").value)
                  if (s3Count === 10){
                    zehner = zehner + 1
                  }
                  s4Count = parseInt(document.getElementById("s4").value)
                  if (s4Count === 10){
                    zehner = zehner + 1
                  }
                  s5Count = parseInt(document.getElementById("s5").value)
                  if (s5Count === 10){
                    zehner = zehner + 1
                  }
                  s6Count = parseInt(document.getElementById("s6").value)
                  if (s6Count === 10){
                    zehner = zehner + 1
                  }
                  document.getElementById("r4").innerHTML = x;
                  document.getElementById("ten").innerHTML = zehner;
                  GetRidOff()
                }
              } else if (Runde ==5){
                if (isNaN(x)) {
                  app.dialog.alert("Bitte fülle alle Schussfelder aus!");
                } 
                else {
                  s1Count = parseInt(document.getElementById("s1").value)
                  if (s1Count === 10){
                    zehner = zehner + 1
                  }
                  s2Count = parseInt(document.getElementById("s2").value)
                  if (s2Count === 10){
                    zehner = zehner + 1
                  }
                  s3Count = parseInt(document.getElementById("s3").value)
                  if (s3Count === 10){
                    zehner = zehner + 1
                  }
                  s4Count = parseInt(document.getElementById("s4").value)
                  if (s4Count === 10){
                    zehner = zehner + 1
                  }
                  s5Count = parseInt(document.getElementById("s5").value)
                  if (s5Count === 10){
                    zehner = zehner + 1
                  }
                  s6Count = parseInt(document.getElementById("s6").value)
                  if (s6Count === 10){
                    zehner = zehner + 1
                  }
                  document.getElementById("r5").innerHTML = x;
                  document.getElementById("ten").innerHTML = zehner;
                  GetRidOff()
                }
              } else if (Runde ==6){
                if (isNaN(x)) {
                  app.dialog.alert("Bitte fülle alle Schussfelder aus!");
                } 
                else {
                  s1Count = parseInt(document.getElementById("s1").value)
                  if (s1Count === 10){
                    zehner = zehner + 1
                  }
                  s2Count = parseInt(document.getElementById("s2").value)
                  if (s2Count === 10){
                    zehner = zehner + 1
                  }
                  s3Count = parseInt(document.getElementById("s3").value)
                  if (s3Count === 10){
                    zehner = zehner + 1
                  }
                  s4Count = parseInt(document.getElementById("s4").value)
                  if (s4Count === 10){
                    zehner = zehner + 1
                  }
                  s5Count = parseInt(document.getElementById("s5").value)
                  if (s5Count === 10){
                    zehner = zehner + 1
                  }
                  s6Count = parseInt(document.getElementById("s6").value)
                  if (s6Count === 10){
                    zehner = zehner + 1
                  }
                  document.getElementById("r6").innerHTML = x;
                  document.getElementById("ten").innerHTML = zehner;
                  GetRidOff()
                }
              } else if (Runde ==7){
                if (isNaN(x)) {
                  app.dialog.alert("Bitte fülle alle Schussfelder aus!");
                } 
                else {
                  s1Count = parseInt(document.getElementById("s1").value)
                  if (s1Count === 10){
                    zehner = zehner + 1
                  }
                  s2Count = parseInt(document.getElementById("s2").value)
                  if (s2Count === 10){
                    zehner = zehner + 1
                  }
                  s3Count = parseInt(document.getElementById("s3").value)
                  if (s3Count === 10){
                    zehner = zehner + 1
                  }
                  s4Count = parseInt(document.getElementById("s4").value)
                  if (s4Count === 10){
                    zehner = zehner + 1
                  }
                  s5Count = parseInt(document.getElementById("s5").value)
                  if (s5Count === 10){
                    zehner = zehner + 1
                  }
                  s6Count = parseInt(document.getElementById("s6").value)
                  if (s6Count === 10){
                    zehner = zehner + 1
                  }
                  document.getElementById("r7").innerHTML = x;
                  document.getElementById("ten").innerHTML = zehner;
                  GetRidOff()
                }
              } else if (Runde ==8){
                if (isNaN(x)) {
                  app.dialog.alert("Bitte fülle alle Schussfelder aus!");
                } 
                else {
                  s1Count = parseInt(document.getElementById("s1").value)
                  if (s1Count === 10){
                    zehner = zehner + 1
                  }
                  s2Count = parseInt(document.getElementById("s2").value)
                  if (s2Count === 10){
                    zehner = zehner + 1
                  }
                  s3Count = parseInt(document.getElementById("s3").value)
                  if (s3Count === 10){
                    zehner = zehner + 1
                  }
                  s4Count = parseInt(document.getElementById("s4").value)
                  if (s4Count === 10){
                    zehner = zehner + 1
                  }
                  s5Count = parseInt(document.getElementById("s5").value)
                  if (s5Count === 10){
                    zehner = zehner + 1
                  }
                  s6Count = parseInt(document.getElementById("s6").value)
                  if (s6Count === 10){
                    zehner = zehner + 1
                  }
                  document.getElementById("r8").innerHTML = x;
                  document.getElementById("ten").innerHTML = zehner;
                  GetRidOff()
                }
              } else if (Runde ==9){
                if (isNaN(x)) {
                  app.dialog.alert("Bitte fülle alle Schussfelder aus!");
                } 
                else {
                  s1Count = parseInt(document.getElementById("s1").value)
                  if (s1Count === 10){
                    zehner = zehner + 1
                  }
                  s2Count = parseInt(document.getElementById("s2").value)
                  if (s2Count === 10){
                    zehner = zehner + 1
                  }
                  s3Count = parseInt(document.getElementById("s3").value)
                  if (s3Count === 10){
                    zehner = zehner + 1
                  }
                  s4Count = parseInt(document.getElementById("s4").value)
                  if (s4Count === 10){
                    zehner = zehner + 1
                  }
                  s5Count = parseInt(document.getElementById("s5").value)
                  if (s5Count === 10){
                    zehner = zehner + 1
                  }
                  s6Count = parseInt(document.getElementById("s6").value)
                  if (s6Count === 10){
                    zehner = zehner + 1
                  }
                  document.getElementById("r9").innerHTML = x;
                  document.getElementById("ten").innerHTML = zehner;
                  GetRidOff()
                }
              } else if (Runde ==10){
                if (isNaN(x)) {
                  app.dialog.alert("Bitte fülle alle Schussfelder aus!");
                } 
                else {
                  s1Count = parseInt(document.getElementById("s1").value)
                  if (s1Count === 10){
                    zehner = zehner + 1
                  }
                  s2Count = parseInt(document.getElementById("s2").value)
                  if (s2Count === 10){
                    zehner = zehner + 1
                  }
                  s3Count = parseInt(document.getElementById("s3").value)
                  if (s3Count === 10){
                    zehner = zehner + 1
                  }
                  s4Count = parseInt(document.getElementById("s4").value)
                  if (s4Count === 10){
                    zehner = zehner + 1
                  }
                  s5Count = parseInt(document.getElementById("s5").value)
                  if (s5Count === 10){
                    zehner = zehner + 1
                  }
                  s6Count = parseInt(document.getElementById("s6").value)
                  if (s6Count === 10){
                    zehner = zehner + 1
                  }
                  document.getElementById("r10").innerHTML = x;
                  document.getElementById("ten").innerHTML = zehner;
                  GetRidOff()
                }
              }
              else if (Runde < 0) {
                GetRidOff()
              }
              
            };

            function GetRidOff() {
              if (Runde >= 1) {
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
                Runde = -2
                document.getElementById("AbgabeButtonAlone").innerHTML = ("...Zurück zum Hauptmenü")
                document.getElementById("AbgabeButtonAlone").className = "mycol button button-fill color-red";
                } 
              }
              else {
                console.log(Runde)
                view.router.navigate("/")
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
            
            }else if(document.getElementById('radio7').checked){
              konfig_value = document.getElementById('radio7').value;
            
            }else if(document.getElementById('radioFREE').checked){
              konfig_value = document.getElementById('radioFREE').value;
            }
            document.getElementById("configInfo").innerHTML = ("Konfiguration: " + konfig_value);

            s = 1;
            RundeA = 1;
            RundeB = 0.5;
            zehnerA = 0;
            zehnerB = 0;
            document.getElementById("playerATM").innerHTML = (Name1S + " ist gerade dran");
            document.getElementById("AbgabeButton").innerHTML = ("Runde für " + Name1S + " abgeben")
            };


            function CountTenA() {
              s1Count = parseInt(document.getElementById("s1").value)
              if (s1Count === 10){
                zehnerA = zehnerA + 1
              }
              s2Count = parseInt(document.getElementById("s2").value)
              if (s2Count === 10){
                zehnerA = zehnerA + 1
              }
              s3Count = parseInt(document.getElementById("s3").value)
              if (s3Count === 10){
                zehnerA = zehnerA + 1
              }
              s4Count = parseInt(document.getElementById("s4").value)
              if (s4Count === 10){
                zehnerA = zehnerA + 1
              }
              s5Count = parseInt(document.getElementById("s5").value)
              if (s5Count === 10){
                zehnerA = zehnerA + 1
              }
              s6Count = parseInt(document.getElementById("s6").value)
              if (s6Count === 10){
                zehnerA = zehnerA + 1
              }
            }

            function CountTenB() {
              s1Count = parseInt(document.getElementById("s1").value)
              if (s1Count === 10){
                zehnerB = zehnerB + 1
              }
              s2Count = parseInt(document.getElementById("s2").value)
              if (s2Count === 10){
                zehnerB = zehnerB + 1
              }
              s3Count = parseInt(document.getElementById("s3").value)
              if (s3Count === 10){
                zehnerB = zehnerB + 1
              }
              s4Count = parseInt(document.getElementById("s4").value)
              if (s4Count === 10){
                zehnerB = zehnerB + 1
              }
              s5Count = parseInt(document.getElementById("s5").value)
              if (s5Count === 10){
                zehnerB = zehnerB + 1
              }
              s6Count = parseInt(document.getElementById("s6").value)
              if (s6Count === 10){
                zehnerB = zehnerB + 1
              }
            }

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
              } else if (RundeA <= 0 || RundeB <= 0) {
                view.router.navigate("/")
              }
          }

            function GetRidOffA() {
              CountTenA()
              document.getElementById("tenA").innerHTML = zehnerA
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
              if (RundeB < 10) {
                CountTenB()
                document.getElementById("tenB").innerHTML = zehnerB
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
              }else {
                CountTenB()
                document.getElementById("tenB").innerHTML = zehnerB

                ergGesamtB = parseInt(document.getElementById("r1SB").innerHTML) + parseInt(document.getElementById("r2SB").innerHTML) + parseInt(document.getElementById("r3SB").innerHTML) + parseInt(document.getElementById("r4SB").innerHTML) + parseInt(document.getElementById("r5SB").innerHTML) + parseInt(document.getElementById("r6SB").innerHTML) + parseInt(document.getElementById("r7SB").innerHTML) + parseInt(document.getElementById("r8SB").innerHTML) + parseInt(document.getElementById("r9SB").innerHTML) + parseInt(document.getElementById("r10SB").innerHTML)
                document.getElementById("ergGesamtB").innerHTML = ergGesamtB

                EndeA = document.getElementById("ergGesamtA").innerHTML
                EndeB = document.getElementById("ergGesamtB").innerHTML
                EndeTenA = document.getElementById("tenA").innerHTML
                EndeTenB = document.getElementById("tenB").innerHTML
                if (EndeA > EndeB) {
                  app.dialog.alert("Das Spiel ist beendet! " + Name1S + " hat gewonnen")
                  document.getElementById("playerATM").innerHTML = (Name1S + " hat bereits gewonnen")
                } else if (EndeB > EndeA) {
                  app.dialog.alert("Das Spiel ist beendet! " + Name2S + " hat gewonnen")
                  document.getElementById("playerATM").innerHTML = (Name2S + " hat bereits gewonnen")
                } else {
                  if (EndeTenA > EndeTenB ){
                    app.dialog.alert("Das Spiel ist beendet! " + Name1S + " hat gewonnen (mehr Zehner)")
                    document.getElementById("playerATM").innerHTML = (Name1S + " hat bereits gewonnen")
                  } else if (EndeTenB > EndeTenA ){
                    app.dialog.alert("Das Spiel ist beendet! " + Name2S + " hat gewonnen (mehr Zehner)")
                    document.getElementById("playerATM").innerHTML = (Name2S + " hat bereits gewonnen")
                  } else {
                    app.dialog.alert("Es gabe ein Unentschieden zwischen "+Name2S+" und "+Name1S+".")
                    document.getElementById("playerATM").innerHTML = ("Es gabe ein Unentschieden")
                  }
                }
                RundeA = -2
                RundeB = -2
                document.getElementById("AbgabeButton").innerHTML = ("...Zurück zum Hauptmenü")
                document.getElementById("AbgabeButton").className = "mycol button button-fill color-red"
              }; 
            }