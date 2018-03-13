import routingModule from './routingModule.js';
import createTag from './createTag.js';

class indexModule{
  constructor(){
    this._routes = [
      {path: "#/home", options: {
        ref: 'mustaches/home.js'
      }}
    ]

    new routingModule(this._routes, "#/home");
  }
}


jQuery(document).ready(() => {
  new indexModule();
})