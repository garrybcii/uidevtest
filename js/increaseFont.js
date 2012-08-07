
$(document).ready(function() {
    $('#functionBar').find('li#type').click(function() {
		$(this).toggleClass('large');
		var current = $(this).attr('class');		
		
		if (current == 'font large'){
			$(this).css({'background-position':'0 -434px'});
			$('#story p').css({'font-size':'16px'});
			$(this).text('Smaller Font');
		}else {
			$(this).css({'background-position':'0 -389px'});
			$('#story p').css({'font-size':'14px'});
			$(this).text('Larger Font');
		}
	});
});