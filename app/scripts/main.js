

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


// var health = $('#healthright');
// var attackBTN = $('.attack');
// var hipsterhealth = health.find('input').val();
// var damage = _.random(10, 40);

// $('.attack').on('click', function() {
// 		$('#lawnmower').toggleClass('activeone');
		
		
		
		

		
// });
// var newhealth = function (a) {
// 			a.hipsterhealth -= damage;
// 		};
// console.log(damage);
// console.log(hipsterhealth);
// console.log(newhealth);

//Redneck Constructor: 
// var Redneck = function () {
//   this.health = 100;
//   this.attack = function (target) {
//     var damage = _.random(1, 30);
//     console.log(damage);
//     target.health -= damage;
//     if(target.health > 0) {
//       target.monsterElem.find('input').val(target.health);
//       // Monster Needs to Attack Person
//     } else {
//       target.hipsterElem.find('input').val('DEAD');
//       target.hipsterElem.css('color', 'red');
//     }
//   };
// };

// //Hipster Constructor:
// var Hipster = function (options) {
//   var options = options || {};
//   this.health = options.health;
//   this.attack = function (target) {
//     // Attack Hipster
//   }
//   this.hipsterElem = options.hipsterElem;
// };

// //Hipster Instance:
// var cerra = new Hipster ({
//   health: 30,
//   hipsterElem: minion
// });



