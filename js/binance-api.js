ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@depth@100ms");

app = new Vue({
  el: '#app',
  data: {
    ask: ['Cargando!'],
    bid: [''],
    askAcc: 0,
    bidAcc: 0,
    color: "verde",
  }
})

ws.onmessage = function (event) {

  const d = JSON.parse(event.data);



  if (d.a.length)
    app.askAcc = d.a.map(a => { return a[0] * a[1] }).reduce((acc, curr) => acc + curr);

  if (d.b.length)
    app.bidAcc = d.b.map(b => { return b[0] * b[1] }).reduce((acc, curr) => acc + curr);

  app.ask = d.a;
  app.bid = d.b;

  if (app.askAcc > app.bidAcc)
    return app.color = "verde"

  return app.color = "rojo"
}
