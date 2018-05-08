# MyLibJSEs6

This is my personal library similar to Angular and React. I developed this lib to understand how a library works. It's the first version but i will update with other features, any suggestion is appreciated.

## Getting Started

If you want to use that library you need to pull this project into your new project and create the index.js file into JS folder.

## Create index.js
First of all you need to import RoutingComponent, this provide to use SPA (Single Page Application):
```javascript
import routingModule from './Path/To/routingModule.js';
```

In contructor statement you will create an array of paths like this:
```javascript
//@param {string} path: URL want to catch
//@param {string} options.ref: Reference to JS component will rendered at a determined path
this._routes = [
  {path: "#/task1", options: {
    ref: '/mustaches/views/task1/task1.js'
  }},
  {path: "#/task2", options: {
    ref: '/mustaches/views/task2/task2.js'
  }}
]
```
After that declaration you need to initializate the routing into your page:
```javascript
//param {Array} this._routes: All paths specified for this Web Application
//param {String} defaultPath: Identify start point of your Web Application
new routingModule(this._routes, "#/task1");
```
Eventually you need to render some partials into your page like headerComponent or something else to render this kind of component you can import this component and do a new istance.
```javascript
import headerComponent from '../mustaches/path/to/headerComponent.js';

renderHTMLs(){
  new headerComponent();
}
```
Index class will be initialized on document.ready, this event can be binded with jquery and javascript, example:
```javascript
$(document).ready(() => {
  new indexModule();
});
```

## Authors

* **Antonio Russo** - *Initial work* - [PurpleBooth](https://github.com/xXBlackBulletXx)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.
