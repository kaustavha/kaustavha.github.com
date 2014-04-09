//minimalist loading animation
setInterval(function() {
	$('<span>.</span>').appendTo('#loading .center');
}, 1000);

//wait for images to finish loading
$(window).load(function() {
 $('#loading').fadeOut("fast");
 $("#intro").delay(2000).fadeOut(400);
});

$(document).ready(function() {
	$("#intro").scroll(function(){
	$("#intro").fadeOut('fast');
});

//navigation to artist profiles
$("div.card").click(
	function() {
		var id = $(this).attr('id');
		$('#artists').fadeOut();
		$('#artistBios').removeClass("hide");
		$('#artistBios').fadeIn();
		$("#bio"+id).removeClass("hide");
});

//artist navigation inside profiles
$("div.biosHolder").children().click(function(){
		var id = $(this).attr('id');
		$("div.bio").fadeOut();
		$("div.bio").addClass("hide");
		$("#bio"+id).removeClass("hide");
		$("#bio"+id).fadeIn();
});

//navbar functionality
$("li a").click(
	function(){		

		var a=["#soundCloud","#artistBios","#artists","#bandCamp","#about","#music", "#contact"];	    
	    var data = $(this).data("pointer");
	  
	    for (i=0;i<a.length;i++){
	    	$(a[i]).fadeOut("slow");
	        $(a[i]).addClass("hide");
	};	
        $(data).removeClass("hide");
        $(data).fadeIn("slow");
});

var artists = {
	1: "./img/artists/FAUXE(SG).png",
	2: "./img/artists/DIPHASIC(SG).PNG",
	3: "./img/artists/NUANCE(FI).png",
	4: "./img/artists/COSA-NOSTRA(SG).png",
	5: "./img/artists/ECHO-PRINCE(GEMA)(SG).png",
	6: "./img/artists/UNCONVENTIONAL-SCIENCE(L.A).png",
	7: "./img/artists/SKEPTIK(IN).png",
	8: "./img/artists/IYER(SG).png",
	9: "./img/artists/JAYDAH(SG).png",
	10: "./img/artists/NAZ(SG).png" ,
	11: "./img/artists/SAUCE(SG).png",
	12: "./img/artists/SCAPEL(SG).png"
};
//Lazy templating of artists
$.each(artists, function(key, value) {
	$("<div class='bio hide' id='bio" + key + "' ><img class='innerBioPic' src='" + value + "'><div class='bioInfo'>").appendTo('#artistBios');
});
//text fillings of artist profiles for demo
$("<h1>Lorem Ipsum</h1><br /><br />Mixtape officia commodo narwhal raw denim meggings. Street art Schlitz Odd Future minim Brooklyn, sartorial artisan shabby chic laborum. Tattooed in before they sold out butcher viral, gentrify stumptown cliche do kitsch scenester biodiesel drinking vinegar sriracha laborum. Hella post-ironic Wes Anderson, umami typewriter keffiyeh bitters pickled occupy. Tempor ullamco squid pickled, semiotics cardigan blog next level asymmetrical VHS 90's iPhone shabby chic. Tousled post-ironic accusamus laboris stumptown, photo booth next level ugh cliche Intelligentsia. Odd Future Godard literally, wolf twee swag hella pop-up eiusmod aute Neutra.Assumenda officia proident tattooed. Banksy meggings tattooed nulla Pinterest Carles, hoodie mlkshk chambray next level twee. High Life fugiat artisan cardigan wolf accusamus. Twee seitan PBR&B, disrupt vinyl you probably haven't heard of them single-origin coffee Austin beard meggings velit lomo retro. Quis four loko 90's, ennui YOLO Echo Park nisi before they sold out Neutra actually retro sint disrupt Godard. Single-origin coffee flexitarian narwhal cupidatat cornhole semiotics. Sint selfies Helvetica aliqua McSweeney's.</div>")
.appendTo('.bioInfo');
});