
$(document).ready(function() {
    $('#hiderFixer').fadeOut();
    $("body").find('.hide-show').each(function(){
    $(this).addClass('hidden');
        });
        function showPageElements(pageSelector){
        var counter=1;
        var elementCount= $(pageSelector).find('.hide-show').length;
        $(pageSelector).find('.hide-show').each(function(){
            var el=$(this);
        
            var delay=counter*120;
            counter = counter<elementCount ? counter+1 : counter;
         
         
         fadeIn(el,delay,elementCount);
           
 
        })
    }
   
    setTimeout(function() {
              
        
        $('.vcard-title').addClass('animated fadeInRight'); 
             
    }, 500);
    setTimeout(function() {
              
        
        $('.footer-holder').addClass('animated fadeInRight'); 
             
    }, 800);
    setTimeout(function() {
              
        
        showPageElements('.page-homepage');
            
             
    }, 1000);

    setTimeout(function() {
              
       // $('.current-page').find('.promo-block-1x1,.promo-block-2x1,.promo-block-2x2,.back-button-holder,.promo-block-long').addClass('transition');
       
      //  $('.slider-block').addClass('open');
         $('.slider-block i').animate({
          bottom: '15px',
    'font-size': '26px',
    right: '21px'
      });
        var slidersCounter=1;
           $('.blueberry').each(function(){
                $(this).removeClass('hidden').blueberry({
                 
            interval:((slidersCounter%6)+1)*2000,
            pager:false
        });
        slidersCounter++;
           })
       
             
    }, 3000);
   
   
   
    
    //   =====================================================   
   var horizontalScrollIsReady=false;
   var portfolioPageIsReady=false;
    var currentlyOpenPageID=$('.page-homepage').attr('id');
    
    $('.nav-link').click(function(event){
        event.preventDefault();
        var targetPageID=$(this).attr('data-opening-page-id');
       
        showPage(targetPageID,$('.current-page'));
    })
        var interestsPageIsReady=false;
    function showPage(openingPageID,closingPage){
       
        var counter=1;
        //close page
                       

        var closeElementCount= $(closingPage).find('.hide-show').length;
        $(closingPage).find('.hide-show').each(function(){
            var el=$(this);
       
            var delay=counter*100;
           
            counter = counter<closeElementCount ? counter+1 : counter;
       //  el.removeClass('transition');
         
         fadeOut(el,delay,closeElementCount);
        
 
        });
       
  
        $('body').bind('closingFinished',function() {
          $('body').unbind('closingFinished');
              var openingPage=$('#'+openingPageID);
              $(closingPage).removeClass('current-page');
              $(openingPage).addClass('current-page');
            //   console.log('closedNow',closingPage,openingPage);
            counter=1;
            
            //open page
            var openElementCount= $(openingPage).find('.hide-show').length;
            $(openingPage).find('.hide-show').each(function(){
                var el=$(this);
        
                var delay=counter*120;
                counter = counter<openElementCount ? counter+1 : counter;
         fadeIn(el,delay,openElementCount);
            

            })
           
            
             
     
 
        });
       
        
    $('body').bind('openingFinished',function(){
     
      $('body').unbind('openingFinished');
      
                 if($('.current-page').hasClass('interests-page')){ 
//console.log('Interests Setup Now');
                     setupInterestsPage();
                      
                     }
                     
                      if($('.current-page').hasClass('portfolio-page')){ 
//console.log('Portfolio Setup Now');
                     setupPortfolioPage();
                     
                     }
             
            
             
 checkTwitterModule();
 antiscrollSetup();
 
checkGoogleMap();
    })
      }
      
   
  
    
    
   var fadeOutCounter=0;
   
    function fadeOut(element,delay,maxElements){
        
         fadeOutCounter=maxElements <fadeOutCounter ? 0 : fadeOutCounter;
         var cleft=parseInt(element.css('left'));
       
       element.stop(true,true,true).delay(delay).animate({
           'left':cleft-10,
           opacity:0
       },500,'linear',function(){
          
          fadeOutCounter++;
        
          if(fadeOutCounter==maxElements){
                
              $('body').trigger('closingFinished');
               //$('body').die('closingFinished');

              fadeOutCounter=0;
          }
           // element.addClass('hidden').addClass('invisible');
       
       });
       
       
    }
    var fadeInCounter=0;
    function fadeIn(element,delay,maxElements){
        fadeInCounter=maxElements <fadeInCounter ? 0 : fadeInCounter;
     
      element.removeClass('hidden').removeClass('invisible');
        element.css('left',0).css('opacity',0);
                             var antiEl=$('.current-page').find('.antiscroll-inner');
           antiEl.scrollLeft(0);
        
        var cleft=parseInt(element.css('left'));
        element.css('left',cleft+10);
       element.stop(true,true).delay(delay).animate({
           'left':cleft,
           opacity:1
       },500,'linear',function(){
            
           fadeInCounter++;
            if(fadeInCounter==maxElements){
                fadeInCounter=0;
              $('body').trigger('openingFinished')
          }
        
           
       });
//       console.log(fadeInCounter)
    }
    
      var gmapIsActive=new Array();
   function checkGoogleMap(){
        if($('.current-page').find('.map-holder').length>0 && gmapIsActive[$('.current-page').attr('ID')]==undefined){
    
    setTimeout(function(){
     
           gmapIsActive[$('.current-page').attr('ID')]=true; 
              
$('.map-holder').gmap3({
 map:{
    options:{
     center:[latitude, longitude],
     
     zoom:6,
      mapTypeControl: false,
   
     navigationControl: false,
     scrollwheel: true,
     streetViewControl: false
    }
 },
 marker:{
    latLng:[latitude, longitude]
 }
});
      }, 500);
 
        }
   } 
    
    var antiscrollIsActive=new Array();
   function antiscrollSetup(){
   
       var el=$('.current-page').find('.antiscroll-wrap');
     el.removeClass('init');
     el.find('.init').removeClass('init');
       if(el.length>0 && antiscrollIsActive[$('.current-page').attr('ID')]==undefined){
    
   
            el.antiscroll();
           antiscrollIsActive[$('.current-page').attr('ID')]=true; 
     
    
    
    
      
 }
   }
   
   
   function setupInterestsPage(){
      if(!interestsPageIsReady){
           interestsPageIsReady=true;
       var el=$('.interest-holder');
       var widthToBe=el.length*(el.width()+parseInt(el.css('margin-left'))+parseInt(el.css('margin-right')) );
       $('.interests-page .scroll-holder').width(widthToBe);
      
 
                   horizontalScrollSetup('interest');
         
      }
       
   }
   
      function setupPortfolioPage(){
      if(!portfolioPageIsReady){
            portfolioPageIsReady=true;
            
       var el=$('.current-page .horizontal-scroll-item ');
       
       var widthToBe=el.length*(el.width()+parseInt(el.next().css('margin-left'))+parseInt(el.next().css('margin-right')) );
       $('.current-page .scroll-holder').width(widthToBe);
      

       horizontalScrollSetup('portfolio');
      }
//      console.log(portfolioPageIsReady);
   }
    //  triggers contact form validation
    var formStatus=$("#contact-form").validate();
    //   ===================================================== 

    //sending contact form
    $("#contact-form").submit(function(e){
        e.preventDefault();
        if(formStatus.errorList.length==0)
        { 
                       $("#contact-form .submit").fadeOut(function(){
                                      $('#loading').css('visibility','visible');
            $.post('submit.php',$("#contact-form").serialize(),
				
                function(){
						
                   $("#contact-form").hide('slow').after('<h1>Thank you!</h1>');
						
						
                    $('#loading').css('visibility','hidden');
                    $("#contact-form .submit").removeClass('disabled');
                }
				
                ); 
                       });     
 
				
        }
			
			
			
    })
    //   ===================================================== 

   
    function horizontalScrollSetup(id){
       
     
     
       
       
               var horizonScroll=$('.current-page .antiscroll-wrap');
        var antiEl=$('.current-page').find('.antiscroll-inner');
   var blocksWidth=new Array();
   var index=id;
  
   blocksWidth[index]=0;
  horizonScroll.find('.horizontal-scroll-item').each(function(){
     blocksWidth[index]+= $(this).width()+parseInt($(this).css('margin-left'))+parseInt($(this).css('margin-right'));
  });

    
     var initLeft=antiEl.scrollLeft();
     
      

     $('.horizontal-scroll').parent().parent().bind('mousewheel',{minLeft:initLeft,index:index},function (event, delta) {
        
        event.preventDefault();
        var minLeft=event.data.minLeft;
        var index=event.data.index;
       
     var currentLeft = new Array();
     var maxLeft=new Array();
       
       
        currentLeft[index]=antiEl.scrollLeft();
        
     
              
                currentLeft[index] -= (delta * 10);
    //  console.log(index,currentLeft[index],delta);
         
     antiEl.scrollLeft(currentLeft[index]);
       
       
              
       
          
    });
    
  
}







})


