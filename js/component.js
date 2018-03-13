import ajaxModule from './ajaxModule.js';

/*
  class Component
  Generic default component structure. 
  This class will be extends by your Components to initialize and render all what you need
*/
class Component{
  /*
    constructor()
    refHTML: String //Template of your HTML
    isExternalHTML: Boolean //Determinating if your html is external
    urlExternalHTML: String //Url to get external HTML file
    target: DOMObject //Element Reference to append code
    variables: Object //Data passing into HTML to be parsed with {{}} statement
    partials: Array<String> //Partials to be loaded needed by your html, called into your html with {{>name_partial}}
  */
  constructor(refHTML, urlExternalHTML, target, variables, partials){
    this._refHTML = refHTML;
    this._urlExternalHTML = urlExternalHTML;
    this._target = target;
    this._variables = variables;
    this._partials = partials;
    this._rendered = undefined;
    this.init();
  }

  /*
    init()
    Check if is an external HTML, so will load your external HTML page
  */
  init(){
    if(this._urlExternalHTML.length > 0){
        ajaxModule.getJSON({
            url: this._urlExternalHTML,
            method: 'GET'
        }, (res) => {
          this._refHTML = res;
          this.loadHTML();
          this.renderHTML(res);
        })
    }
  }

  /*
    loadHTML()
    Parse your html, will performe your rendering ~cit. Mustache
  */
  loadHTML(){
    Mustache.parse(this._refHTML);
  }

  /*
    renderHTML()
    Render your html, and your partials into a DOMObject
  */
  renderHTML(res){
    this._rendered = Mustache.render(
        res,
        this._variables,
        this._partials
    );
    jQuery(this._target).append(this._rendered);
  }
}

export default Component;