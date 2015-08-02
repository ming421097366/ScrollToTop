
requirejs.config({
	// baseUrl : "lib",//baseUrl的默认值是入口模块所处目录，所以并不必要显示声明
	// paths : {
	// 	jquery : "jquery"//为路径声明一个别名
	// }
	shim : {

	}
});

requirejs(["jquery","backtop"], function($,backtop) {

	// var a =new backtop.BackTop($("#scrollToTop"),{

	// });
	$("#scrollToTop").backtop({});

	// var scrollTo = new scroll.Scroll({
	// 	des : 0,
	// 	duration : 800

	// });

	// $("#scrollToTop").on("click",$.proxy(scrollTo.move,scrollTo));
	// $(window).on("scroll",function(){
	// 	checkPostion($(window).height());
	// });
	// checkPostion($(window).height());

	// function checkPostion(pos) {		
		
	// 	if($(window).scrollTop() > pos) {	
	// 		$("#scrollToTop").fadeIn();
		
	// 	} else {
	// 		$("#scrollToTop").fadeOut();
		
	// 	}
	// }

	// function move() {		
	// 	$("html,body").animate({
	// 		scrollTop : 0
	// 	},800);
	// }
	// function go() {
	// 	$("html,body").scrollTop(0);
	// }

});
