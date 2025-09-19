/* Javascript
	const adults = prompt("How many adults are going on the trip?");
	const children = prompt("How many children will be on the trip?");
	const adultAmount = Number(adults);
	const childrenAmount = Number(children);
	const ticketCost = 80;
	const suitcaseCost = 40;
	const childrenTicketCost = 50;
	const discount = 0.9
	let suitcaseAmount = 0;

	for(let i=1; i < adultAmount+childrenAmount+1; i++) {
		suitcaseAmount += Number(prompt("How many suitcases is person "+ (i) +" bringing"))
	};

	const discountCode = prompt("Do you have a discount code?");

	function totalCost() {
		let equation =
			(adultAmount*ticketCost)+
			(childrenAmount*childrenTicketCost)+
			(suitcaseAmount*suitcaseCost)

		if(discountCode=="THEOCTAGON10") {
			return(equation * discount)
		}
		else {
			return(equation) 
		}
	};

	alert(adultAmount+" adults are travelling with "
		+childrenAmount+" children with "
		+suitcaseAmount+" suitcases in total, costing a total of "
		+totalCost()+"$"); 
*/
