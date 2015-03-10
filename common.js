window.onload = function(){
	dispNone();
	showOpenBox();
	setTimeout("showCompBox();", 2000);
	changeImg();
	showWorksApp();
	showWorksBunner();
	closeOverLayer();
//End
}

function dispNone(){
	$(function(){
		$("#worksBunner").css("display","none");
	});
};
function showOpenBox(){
    $(function(){
        $("#openBox").fadeIn(800);
    });
};
function showCompBox(){
    $(function(){
        $("#openBox").fadeOut(1200, function(){
        	$("#compBox").fadeIn(2000);
        });
    });
};

//ConpBox Img Change
function changeImg(){
	$(function(){
		$("#worksWeb01Img").css("display","none");
		$("#worksWeb02Img").css("display","none");
		$("#worksWeb03Img").css("display","block");
	});
	$("#worksWeb01Link").hover( function() {
		$("#worksWeb01Img").css("display","block");
		$("#worksWeb02Img").css("display","none");
		$("#worksWeb03Img").css("display","none");		
	});
	$("#worksWeb02Link").hover( function() {
		$("#worksWeb01Img").css("display","none");
		$("#worksWeb02Img").css("display","block");
		$("#worksWeb03Img").css("display","none");
	});
	$("#worksWeb03Link").hover( function() {
		$("#worksWeb03Img").css("display","block");
		$("#worksWeb02Img").css("display","none");
		$("#worksWeb01Img").css("display","none");
	});

	$(function(){
		$(".appImg02").css("display","block");
		$(".appImg01").css("display","none");				
	});
	$("#worksApp02Link").hover( function() {
		$(".appImg02").css("display","block");
		$(".appImg01").css("display","none");
	});
	$("#worksApp01Link").hover( function() {
		$(".appImg02").css("display","none");
		$(".appImg01").css("display","block");
	});
};

function showWorksApp(){
	$(function(){
		$("#worksApp02Link").click(function(){
			$("#compBox").css("opacity","0.4"),
			$("#worksApp02").show("fast"),
			$("#worksApp01").hide("fast"),
			$("#worksBunner").hide("fast");
		});
		$("#worksApp01Link").click(function(){
			$("#compBox").css("opacity","0.4"),
			$("#worksApp01").show("fast"),
			$("#worksApp02").hide("fast"),
			$("#worksBunner").hide("fast");
		});
	});
};
function showWorksBunner(){
	$(function(){
		$("#otherBox #overBunner").click(function(){
			$("#compBox").css("opacity","0.4"),
			$("#worksApp02").hide("fast"),
			$("#worksApp01").hide("fast"),
			$("#worksBunner").show("fast");
		});
	});
};
function closeOverLayer(){
	$(function(){
		$(".close").click(function(){
			$("#compBox").css("opacity","1"),
			$("#worksApp02").hide("fast"),
			$("#worksApp01").hide("fast"),
			$("#worksBunner").hide("fast");
		});
	});
};

