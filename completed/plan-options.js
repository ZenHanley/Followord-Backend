/* Javascript
const planOption = prompt("Which subscription plan are you interested in?");
const response = prompt("Would you like to complete the purchase? (Yes or No)")

switch (planOption) {
  case "Standard":
    alert("The price of that subscription is $15");
    break;

  case "Standard with Ads":
    alert("The price of that subscription is $9");
    break;

  case "Full HD":
    alert("The price of that subscription is $18");
    break;

  case "4K":
    alert("The price of that subscription is $24");
    break;

  case "4K Family":
    alert("The price of that subscription is $30");
    break;

  default:
    alert("We don't have that subscription mode, sorry");
    break;
};

let continuePurchase = response == "yes"
	? "In a few minutes the payment will be processed. Please wait…"
	: "No worries! Just refresh the page if you want to take another look"

alert(continuePurchase)
*/

/* HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css"> 
    <title>Document</title>
</head>
<body>

    <section id="hero">
        <div class="container">
            <h1 class="option">Standard</h1>
            <h1 class="option">Standard with Ads</h1>
            <h1 class="option">Full HD</h1>
            <h1 class="option">4K</h1>
            <h1 class="option">4K Family </h1>
        </div>
    </section>

<script src="scripts.js"></script>
</body>
</html>
*/

/*CSS
#hero {
    background-color:beige;
    min-height: 100dvh;
    padding: 0;
    margin: 0;

    .container {
        display: grid;
        grid-template-columns:1fr 1fr;
        grid-gap: 0.5em;
    }
    
    .option {
        min-height: 10vh;
        background-color:burlywood;
        text-transform: uppercase;
        text-align: center;
        text-decoration: none;
        font-weight: normal;
        place-content: center;
        border: 0.2em dotted grey;
    }
}
*/