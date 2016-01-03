// easy .pull-down class
$('.pull-down').each(function() {
	$(this).css('margin-top', $(this).parent().height()-$(this).height())
});
