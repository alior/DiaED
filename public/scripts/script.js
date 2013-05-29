
$('#leftcolumn svg').click(function() {
	var copy = $(this).clone();
	copy.css('position','relative').css('left','339px').css('top','275px').css('width','132').css('height','132');
	copy.appendTo($('#rightcolumn'));
	copy.draggable({
		containment: $('#rightcolumn')
	});
});

$('#rightcolumn svg').click(function() {
	var rel = $(this);
	rel.css('position','relative');
});