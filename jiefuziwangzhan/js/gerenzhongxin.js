      	$(document).ready(function() {
			$('.xiaogongneng-1').hover(function() {
		 	 	$('.xiaogongneng-1').find('img').attr('src','./img/my_center_mark.png');
			 }, function() {
		 		$('.xiaogongneng-1').find('img').attr('src','./img/my_center.png');
			 });
			 $('.xiaogongneng-2').hover(function() {
		 	 	$('.xiaogongneng-2').find('img').attr('src','./img/my_setting_mark.png');
			 }, function() {
		 		$('.xiaogongneng-2').find('img').attr('src','./img/my_setting.png');
			 });
			 $('.xiaogongneng-3').hover(function() {
		 	 	$('.xiaogongneng-3').find('img').attr('src','./img/my_out_mark.png');
			 }, function() {
		 		$('.xiaogongneng-3').find('img').attr('src','./img/my_out.png');
			 });
			 $('.zhanghaoneir-shezhzi').hover(function() {
			 	$('.zhanghaoneir-shezhzi').attr('src', './img/pull_up.png');
			 	$('.zhanghushezhi-xiaogongneng').show();
			 }, function() {
			 	$('.zhanghaoneir-shezhzi').attr('src', './img/xia.png');
			 	$('.zhanghushezhi-xiaogongneng').hide();
			 });
			  $('.zhanghushezhi-xiaogongneng').hover(function() {
			 	$('.zhanghaoneir-shezhzi').attr('src', './img/pull_up.png');
			 	$('.zhanghushezhi-xiaogongneng').show();
			 }, function() {
			 	$('.zhanghaoneir-shezhzi').attr('src', './img/xia.png');
			 	$('.zhanghushezhi-xiaogongneng').hide();
			 });
			
		}); 

	
