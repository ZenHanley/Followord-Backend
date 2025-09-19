/* Javascript
    const addFlipButton = document.getElementById("button");
    addFlipButton.addEventListener("click", flipCoin);

    const addCheat = document.getElementById("cheat");
    addCheat.addEventListener("click", cheat);

    const addHard = document.getElementById("hard");
    addHard.addEventListener("click", hard);

    const addText = document.getElementById("coin")

    function flipCoin() {
        const flip = Math.floor(Math.random()*2+1)
        if(flip == 1) {
            addText.innerHTML="Heads!"
        }
        if(flip == 2) {
            addText.innerHTML="Tails!"
        }
    };

    function cheat() {
        addText.innerHTML="Heads!"
    }

    function hard() {
        const flip = Math.floor(Math.random()*10+1)
        if(flip == 10) {
            addText.innerHMTL="Heads!"
        }
        else {
            addText.innerHTML="Tails!"
        }
        console.log(flip)
} 
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
        <div class="hero-container">
            <h1 class="title"> Flip a Coin </h1>
        </div> 
    </section>

    <section id="coin-box">
        <div class="coin-container">
            <div id="coin" class="coin">Waiting....</div>
        </div>
    </section>

    <section id="button-box">
        <div class="button-container">
            <button id="button" class="button">Click</button>
            <button id="cheat" class="button">Cheat Mode</button>
            <button id="hard" class="button">Hard Mode</button>
        </div>
    </section>

    <script src="index.js"></script>
    </body>
    </html> 
*/

/* CSS
    * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            background-color:#444746;
        }

    #hero {
        .title {
            font-size: clamp(1.8rem, calc(2.2vw + 1rem), 3rem);
            text-align: start;
            font-weight: normal;
            color:#fff;
            padding: 1rem 0 1rem 1.5rem;
            width: 100%;
        }
    }

    #coin-box {
        .coin-container {
            padding: 1rem;
            background-color: white;
        }
        .coin {
            text-align:center;
            align-content: center;
            min-height: 15rem;
            background-color:lightblue;
            clip-path: circle(at 50% 50%);
        }
    }

    #button-box {
        .button-container {
            padding: 2rem;
            display:flex;
            width: 50%;
            flex-direction: column;
            gap:1rem;
            justify-self: center;
        }

        .button {
            border: 0.2rem solid grey;
            justify-content: center;
            min-width: 12rem;
            display: flex;
            flex-direction: row;
            font-size: clamp(1.5rem, calc(1vw + 0.5rem), 2rem);
            background-color:#444746;
            color:#fff;
            padding: 1rem;
        }
    }
    */
