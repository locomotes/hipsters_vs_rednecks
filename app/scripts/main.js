

$('form').on('submit', function(e) {
	e.preventDefault();
	var redneck = 0;
	var hipster = 0;
	$(':radio:checked').each(function() {

			if ($(this).val() === 'r') {
				redneck += 1;
			} else {
				hipster += 1;
			}
	});

			if (redneck > hipster) {
				alert("YOU'RE A REDNECK");
				$(".#surveybox").hide();
			} else {
				alert("YOU'RE A HIPSTER");
			}

});

var redgame = $(".#surveybox").hide();
