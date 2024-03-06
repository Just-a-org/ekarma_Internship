const num1Elem = document.getElementById("num-1");
const num2Elem = document.getElementById("num-2");
const resElem = document.getElementById("res");

const btnWrapper = document.getElementById("btn-wrapper");

btnWrapper.addEventListener( "click", function ( eve ) {
	eve.preventDefault();

	const num1Val = Number(num1Elem.value);
	const num2Val = Number( num2Elem.value )

	switch (eve.target.getAttribute("id")) {
		case "btn-sum":
				resElem.value =  num1Val + num2Val ;
			break;
		case "btn-min":
				resElem.value =  num1Val - num2Val ;
			break;
		case "btn-div":
				resElem.value =  num1Val / num2Val ;
			break;
		case "btn-mult":
				resElem.value =  num1Val * num2Val ;
			break;
	}
} )
