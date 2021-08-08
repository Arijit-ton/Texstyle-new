const counters = document.querySelectorAll('.counter');

		counters.forEach((counter) =>{
			counter.innerHTML = 0;
			const upCounter = () =>{
				const targetCount = +counter.getAttribute('data-target');
				const startCount = Number(counter.innerHTML);
				const incr = targetCount /10;
				if(startCount < targetCount ){
					counter.innerHTML =`${startCount + incr}`;
					setTimeout(upCounter,1000)
				}
			}
			upCounter();
		});


		// $(".fa-search").click(function(){
//     $(".icon").toggleClass("active");
//     $(".searchbar input[type='text']").toggleClass("active");
// });


