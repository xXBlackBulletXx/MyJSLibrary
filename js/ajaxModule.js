class ajaxModule{
  /*
    getJSON()
    Get a json and do a callback
    options: Object //Ajax object, ex: url, method, 
    callback: funtion() //Callback after get json
  */
  static getJSON(options, callback){
    jQuery.ajax(options).then((res) => callback(res)).catch((e) => {
      alert(`Attenzione, errore nella chiamata ajax. Dettagli: ${e.message}`);
    })
  }
}

export default ajaxModule;