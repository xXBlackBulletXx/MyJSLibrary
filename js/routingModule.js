import ajaxModule from "./ajaxModule.js";

/*
  class routingModule
  This class, is used to provide single page routing
*/
class routingModule{
  /*
    constructor()
    Inizialize module
    routes: Array<string> // Paths
    startUrl: String //Url where the site starting
  */
  constructor(routes, startUrl){
    Sammy.Mustache = Mustache;

    this._routes = routes;

    this._app = new Sammy("body", ()=>{});
    this.addRoutes();
    this._app.run(startUrl);
  }
  
  /*
    addRoutes()
    Add all routes into the routes Array of Sammy js
  */
  addRoutes(){
    $.each(this._routes, (index, element) => {
      this._app.get(element.path, () => {
        import(element.options.ref).then(newModule => {
          new newModule.default;
        });
      })
    });
  }
}

export default routingModule;