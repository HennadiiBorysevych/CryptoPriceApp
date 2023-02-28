const URL =
  'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2CRipple%2Ccardano%2Cethereum%2Cdogecoin%2Ctether&vs_currencies=usd&include_24hr_change=true';
fetch(URL)
  .then(res => res.json())
  .then(data => {
    const container = document.querySelector('.container');
    const coins = Object.getOwnPropertyNames(data);
    for (const coin of coins) {
      const coinInfo = data[`${coin}`];
      const price = coinInfo.usd;
      const change = coinInfo.usd_24h_change.toFixed(2);
      container.innerHTML += `
          <div class="coin ${change < 0 ? 'falling' : 'rising'}">
          <div class="coin__logo">
          <img src="./images/${coin}.svg" alt="${coin}"/>
          </div>
          <div class="coin__name">
          <h3>${coin}</h3>
          <span>/USD</span>
          </div>
          <div class="coin__price">
          <span class="price">$${price}</span>
          <span class="change">$${change}</span>
               </div>
          </div>`;
    }
  });
