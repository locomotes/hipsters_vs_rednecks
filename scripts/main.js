

$('.formone').on('submit', function(e) {
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
				$('.hero-unit').fadeOut('slow', function() {
					$('.redneck-unit').fadeIn('slow');
				});
			} else {
				alert("YOU'RE A HIPSTER");
				$('.hero-unit').fadeOut('slow', function() {
				$('.hipster-unit').fadeIn('slow');
				});
			}

	

});

$('.attack').on('click', function() {
		$('#lawnmower').toggleClass('activeone');
	});
