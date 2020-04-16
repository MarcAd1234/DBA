var $$ = Dom7;

var app = new Framework7({
  root: '#app', // App root element


  name: 'DBA', // App name
  theme: 'auto', // Automatic theme detection

  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },

    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
  // Register service worker
  serviceWorker: {
    path: '/service-worker.js',
  },
});

// Play alone

function StartAlone(){
  s = 1;
  Runde = 1;
  erg = 0; 
}


function ClickButton0() {
      if (s == 1) {
        erg = erg + 0;
        s = s + 1;
        return document.getElementById("s1").value = "Kein Treffer";
        console.log(s);
      } else if (s == 2) {
        erg = erg + 0;
        s = s + 1;
        return document.getElementById("s2").value = "Kein Treffer";
        console.log(s);
      } else if (s == 3){
        erg = erg + 0
        s = s + 1
        document.getElementById("s3").value = "Kein Treffer"
      } else if (s == 4){
        erg = erg + 0
        s = s + 1
        document.getElementById("s4").value = "Kein Treffer"
      } else if (s == 5){
        erg = erg + 0
        s = s + 1
        document.getElementById("s5").value = "Kein Treffer"
      } else if (s == 6){
        erg = erg + 0
        s = 0
        document.getElementById("s6").value = "Kein Treffer"
      } 
    }



function ClickButton6() {
    if (s == 1) {
        erg = erg + 6;
        s = s + 1;
        return document.getElementById("s1").value = "6";
      } else if (s == 2) {
        erg = erg + 6;
        s = s + 1;
        return document.getElementById("s2").value = "6";
      } else if (s == 3){
        erg = erg + 6
        s = s + 1
        document.getElementById("s3").value = "6"
      } else if (s == 4){
        erg = erg + 6
        s = s + 1
        document.getElementById("s4").value = "6"
      } else if (s == 5){
        erg = erg + 6
        s = s + 1
        document.getElementById("s5").value = "6"
      } else if (s == 6){
        erg = erg + 6
        s = 0
        document.getElementById("s6").value = "6"
      }
    }

    function ClickButton7() {
      if (s == 1) {
          erg = erg + 7;
          s = s + 1;
          return document.getElementById("s1").value = "7";
        } else if (s == 2) {
          erg = erg + 7;
          s = s + 1;
          return document.getElementById("s2").value = "7";
        } else if (s == 3){
          erg = erg + 7
          s = s + 1
          document.getElementById("s3").value = "7"
        } else if (s == 4){
          erg = erg + 7
          s = s + 1
          document.getElementById("s4").value = "7"
        } else if (s == 5){
          erg = erg + 7
          s = s + 1
          document.getElementById("s5").value = "7"
        } else if (s == 6){
          erg = erg + 7
          s = 0
          document.getElementById("s6").value = "7"
        }
      }

      function ClickButton8() {
        if (s == 1) {
            erg = erg + 8;
            s = s + 1;
            return document.getElementById("s1").value = "8";
          } else if (s == 2) {
            erg = erg + 8;
            s = s + 1;
            return document.getElementById("s2").value = "8";
          } else if (s == 3){
            erg = erg + 8
            s = s + 1
            document.getElementById("s3").value = "8"
          } else if (s == 4){
            erg = erg + 8
            s = s + 1
            document.getElementById("s4").value = "8"
          } else if (s == 5){
            erg = erg + 8
            s = s + 1
            document.getElementById("s5").value = "8"
          } else if (s == 6){
            erg = erg + 8
            s = 0
            document.getElementById("s6").value = "8"
          }
        }

        function ClickButton9() {
          if (s == 1) {
              erg = erg + 9;
              s = s + 1;
              return document.getElementById("s1").value = "9";
            } else if (s == 2) {
              erg = erg + 9;
              s = s + 1;
              return document.getElementById("s2").value = "9";
            } else if (s == 3){
              erg = erg + 9
              s = s + 1
              document.getElementById("s3").value = "9"
            } else if (s == 4){
              erg = erg + 9
              s = s + 1
              document.getElementById("s4").value = "9"
            } else if (s == 5){
              erg = erg + 9
              s = s + 1
              document.getElementById("s5").value = "9"
            } else if (s == 6){
              erg = erg + 9
              s = 0
              document.getElementById("s6").value = "9"
            }
          }

          function ClickButton10() {
            if (s == 1) {
                erg = erg + 10;
                s = s + 1;
                return document.getElementById("s1").value = "10";
              } else if (s == 2) {
                erg = erg + 10;
                s = s + 1;
                return document.getElementById("s2").value = "10";
              } else if (s == 3){
                erg = erg + 10
                s = s + 1
                document.getElementById("s3").value = "10"
              } else if (s == 4){
                erg = erg + 10
                s = s + 1
                document.getElementById("s4").value = "10"
              } else if (s == 5){
                erg = erg + 10
                s = s + 1
                document.getElementById("s5").value = "10"
              } else if (s == 6){
                erg = erg + 10
                s = 0
                document.getElementById("s6").value = "10"
              }
            }

            function CountRound() {
              if (Runde == 1){
                document.getElementById("r1").innerHTML = erg;
              } else if (Runde ==2){
                document.getElementById("r2").innerHTML = erg;
              } else if (Runde ==3){
                document.getElementById("r3").innerHTML = erg;
              } else if (Runde ==4){
                document.getElementById("r4").innerHTML = erg;
              } else if (Runde ==5){
                document.getElementById("r5").innerHTML = erg;
              } else if (Runde ==6){
                document.getElementById("r6").innerHTML = erg;
              } else if (Runde ==7){
                document.getElementById("r7").innerHTML = erg;
              } else if (Runde ==8){
                document.getElementById("r8").innerHTML = erg;
              } else if (Runde ==9){
                document.getElementById("r9").innerHTML = erg;
              } else if (Runde ==10){
                document.getElementById("r10").innerHTML = erg;
              }
              
              document.getElementById("s1").value = "links oben";
              document.getElementById("s2").value = "rechts oben";
              document.getElementById("s3").value = "links Mitte";
              document.getElementById("s4").value = "rechts Mitte";
              document.getElementById("s5").value = "links unten";
              document.getElementById("s6").value = "rechts unten";
              Runde = Runde + 1
              erg = 0
              s = 1

              };


