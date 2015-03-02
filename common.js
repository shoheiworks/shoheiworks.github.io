window.onload = function(){
	showOpenBox();
	setTimeout("showCompBox();", 3000);
	changeImg();
//End
}

function showOpenBox(){
    $(function(){
        $("#openBox").fadeIn(2000);
    });
};
function showCompBox(){
    $(function(){
        $("#openBox").fadeOut(1600, function(){
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
		$("#worksWeb01Img").css("display","none");
		$("#worksWeb02Img").css("display","none");
		$("#worksWeb03Img").css("display","block");
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

