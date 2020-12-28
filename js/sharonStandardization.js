$(document).ready(function(){
    $("#header").hide();
      function myFunction(x) {
        if (x.matches) { // If media query matches
            $("#sidenav").addClass("collapse");
            $("#header").show();
            $("#sidenav").click(function(){
                $("#sidenav").removeClass("collapse in");
                $("#sidenav").addClass("collapse");
            })
            var offset = 60;

            $('#sidenav .nav li a').click(function(event) {
                event.preventDefault();
                $($(this).attr('href'))[0].scrollIntoView();
                scrollBy(0, -offset);
            });
        } else {
            $("#sidenav").removeClass("collapse in");
            $("#header").hide();
            $("#sidenav").show();
            $("#sidenav").click(function(){
                $("#sidenav").removeClass("collapse");
            })

            var offset = 10;

            $('#sidenav .nav li a').click(function(event) {
                event.preventDefault();
                $($(this).attr('href'))[0].scrollIntoView();
                scrollBy(0, -offset);
            });
        }
      }
      
      var x = window.matchMedia("(max-width: 767px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) // Attach listener function on state changes


      
    })

