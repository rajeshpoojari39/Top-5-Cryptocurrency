var main = document.querySelector(".main");

fetch(" https://api.coincap.io/v2/assets?limit=5")
  .then((response) => response.json())
  .then((crypto) => {
    for (let i = 0; i < crypto.data.length; i++) {
      let bitcoinCard = document.createElement("div");
      bitcoinCard.setAttribute("class", "bitcoin-card");
      let firstul = document.createElement("ul");
      let secondul = document.createElement("ul");

      let liRank = document.createElement("li");
      let liName = document.createElement("li");
      liRank.innerText = `Rank#${crypto.data[i].rank}`;
      liName.innerText = crypto.data[i].name;
      firstul.append(liRank, liName);
      let liSymbol = document.createElement("li");
      let liPrice = document.createElement("li");

      liSymbol.innerText = `Symbol: ${crypto.data[i].symbol}`;
      liPrice.innerText = `Usd: $${parseInt(crypto.data[i].priceUsd).toFixed(
        1
      )}`;
      secondul.append(liSymbol, liPrice);

      bitcoinCard.append(firstul, secondul);
      main.appendChild(bitcoinCard);
    }
  });
