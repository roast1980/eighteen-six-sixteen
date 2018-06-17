
			$(function(){
				// Reset divs
			$("#film_list").text("");
			$("#film_content").text("");
				// the JSON file being requested can be replaced with a REST service
	$.getJSON("json/json.json",{}, function(json){
             $.each(json, function(i, value){
            $("#film_list").append("<li class="+value.filmClick+"itWorks id=>" + value.filmTitle + "</li>");
				 $(function(){
					 var $list = $("."+value.filmClick+"itWorks");
					 
					 $list.on("click", function() {
			$("[class$=itWorks]").attr("id","");
			$("#film_content").text("");
					$("#film_content").addClass("flim_ext");
			$("."+value.filmClick+"itWorks").attr("id","itCurrent");
     $("#film_content").append("<h2>" + value.filmTitle + "</h2>" + "<img src="+value.filmImage+" border=0 alt="+value.filmImage+" title="+value.filmImage+" class=filmImg />" + "<p>" + value.filmDesc + "</p>");
						 });
});	
        });
        });
        });
			
	