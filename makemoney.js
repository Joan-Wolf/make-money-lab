( () => {
    const howManyInput = document.querySelector("#number");
    const coinType = document.getElementById('coinType');
    const makeMoneyButton = document.getElementById('makeMoney')
    const coinContainer = document.getElementById('coin-container');
    function makeMoney(event) {
        event.preventDefault();
        const howManyInputValue = +howManyInput.value;
        for (let i = 0; i<howManyInputValue; i++) {
        const newCoin = document.createElement('div');
        const newCoinP = document.createElement('p');
        newCoinP.innerText = coinType.value;
        newCoin.append(newCoinP);
        const coinTypeValue = coinType.value
        if (coinTypeValue === "penny") {
            newCoin.classList.add("penny");
        } else if (coinTypeValue === "nickel") {
            newCoin.classList.add("nickel");
        } else if (coinTypeValue === "quarter") {
            newCoin.classList.add("quarter")
        }
         else {
        newCoin.classList.add('coin');
        
        }
        newCoin.addEventListener('click', (event) => {
            if (event.target.classList.contains("coin")){
                event.target.remove();
            } else {
                event.target.parentNode.remove();
            }
        })
        newCoin.classList.add(coinType.value);
        coinContainer.append(newCoin);
        }   
    }
    makeMoneyButton.addEventListener('click', makeMoney);
})();
