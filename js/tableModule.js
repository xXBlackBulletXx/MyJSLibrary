class tableModule{
  /*
    createTable()
    Create and populate a table
    target: DOMObject //Element ref where append this code
    data: Object //Data passed into table to populate that
  */
  static createTable(target, data){
    this._table = jQuery("<table/>");
    jQuery.each(data, (index, element) => {
      let td = jQuery("<td/>");
      jQuery(td).text(element);
      jQuery(td).appendTo(this._table);
    })
    target.append(this._table)
    return this._table;
  }

}

export default tableModule;