import routingModule from './routingModule.js';
import createTag from './createTag.js';
import headerComponent from '../mustaches/header/header.js';

class indexModule{
  constructor(){
    this._routes = [
      {path: "#/task1", options: {
        ref: '/mustaches/views/task1.js'
      }}
    ]

    new routingModule(this._routes, "#/task1");
    this.renderHTMLs();
  }

  renderHTMLs(){
    new headerComponent();
  }
}


$(document).ready(() => {
  new indexModule();
})