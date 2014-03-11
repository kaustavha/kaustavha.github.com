setInterval(function() {
	$('<span>.</span>').appendTo('#loading .center');
}, 1000);
//wait for images to finish loading
$(window).load(function() {
 $('#loading').fadeOut("fast");
 $("#intro").delay(2000).fadeOut(400);
});

$("#intro").scroll(function(){
	$("#intro").fadeOut('fast');
});

$("div.biosHolder").children().click(
	function(){
		var id = $(this).attr('id');
		$("div.bio").fadeOut();
		$("div.bio").addClass("hide");
		$("#bio"+id).removeClass("hide");
		$("#bio"+id).fadeIn();
	});
$("div.card").click(
	function() {
		var id = $(this).attr('id');
		$('#artists').fadeOut();
		$('#artistBios').removeClass("hide");
		$('#artistBios').fadeIn();
		$("#bio"+id).removeClass("hide");
	});

//The following function is responsible for the navbar functionality
$("li a").click(
	function(){		

		var a=["#soundCloud","#artistBios","#artists","#bandCamp","#about","#music"];	    
	    var data = $(this).data("pointer");
	  
	    for (i=0;i<a.length;i++){
	    	$(a[i]).fadeOut("slow");
	        $(a[i]).addClass("hide");
	};	
        $(data).removeClass("hide");
        $(data).fadeIn("slow");
	});