   //hide elements and fadein
       var firstlook = [".button", ".featurette.one", ".img-circle", "p.para"];
           $(firstlook.join(', ')).hide();       
           
       $(function() {           
       var firstlook = [".button", ".img-circle", "p.para"];
          
           for (var i in firstlook) {
               $(firstlook[i]).fadeIn(1200+(400*i));
           }
           });

      !function ($) {
        $(function(){
          // carousel demo
          $('#myCarousel').carousel()
            })
         }(window.jQuery) 
         
         //make navbar pos=fixed i.e sticky when it's reached on the page
         //make the grey bar hiding featurette one hide when navbar-wrapper div is passed
        $('#road').waypoint(function() {
        $("#nav_stick").toggleClass('navbar-wrapper navbar-wrapper-stuck');   
        $(".bartwo").addClass('off'); 
        $("#nav_stick").show();  
        $("#nav_stick").fadeOut(1);  
        $("#nav_stick").fadeIn(1100);  
        });
       
        //bootstrap navbar active class changer
        $('.navbar').scrollspy();   
        
        //fade in featurette 1 when the bigass green buttons location is passed
        $('.span4.simple').waypoint(function() {
        $(".featurette.one").fadeIn(1100);
        });
        
        // code for activating stellar.js i.e parallax
        $(window).stellar();
      
        //navbar tooltips
        $('#rd').tooltip();
        $('#cntct').tooltip();
        $('#abt').tooltip();
            
            //jShuffle letters plugin
          $(function(){	              
	// container is the DOM element;
	// userText is the textbox
        $(".gtxt").each(function(index){
            $(this).delay(400*index).shuffleLetters();
            });
            $(".carousel-caption h1").shuffleLetters();
          });
          
          var angle = 0;
          $(".card").click(function(){
              angle += 90;
              $(".card").css("-webkit-transform", 'rotateX(' + angle + 'deg)');
          });
                  