


var listEl = document.querySelector('#app ul');
var inputEl = document.querySelector('#app input');
var btnEl = document.querySelector('#app button');

var todos = [
    'Fazer Café',
    'Estudar JavaScript',
    'Acessar comunidade de Devs'
];

const renderTodos = todos.map((el, inde) => {
    //console.log(el);
})

//const api = fetch('https://javascript-sdk.smartcar.com/redirect-2.1.1?app_origin=http://localhost:8000/');

const smartcar = new Smartcar({
    clientId: '9b7b1bd5-cdf1-413c-85e9-53b9cdafe538',
    redirectUri: 'http://localhost:8000/',
    scope: ['read_vehicle_info', 'read_odometer'],
    onComplete: function(err, code) {
      if (err) {
        // handle errors from the authorization flow (i.e. user denies access)
      }
      // handle the returned code by sending it to your back-end server
      sendToBackend(code);
    },
  });
