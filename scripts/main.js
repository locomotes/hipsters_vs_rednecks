
// $('form').on('submit', function () {
  
//   var redneck = 0;
//   var hipster = 0;
  
//   $(':radio:checked').each(function(){
        
//     if ($(this).val() === 'r'){
//       redneck += 1;
//     } else {
//       hipster += 1;
//     }
    
//   });
  
//   if (redneck > hipster) {
//     alert("You're a Redneck");
//   } else {
//     alert("You're a Hipster");
//   }
 
  
// });

$('form').on('submit', function() {
	var redneck = 0;
	var hipster = 0;
	$(':radio:checked').each(function() {

			if ($(this).val() === 'r') {
				redneck += 1;
			} else {
				hipster += 1;
			}


			if (redneck > hipster) {
				alert("YOU'RE A REDNECK");
			} else {
				alert("YOU'RE A HIPSTER");
			}
	});
});