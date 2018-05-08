class tableModule{
  /*
    createTable()
    Create and populate a table
    target: DOMObject //Element ref where append this code
    data: Object //Data passed into table to populate that
  */
  static createTable(data){
    let _table = $("<table class='white elevation-1'/>");
    let _tbody = $("<tbody/>");
    let _thead = $("<thead/>");
    $.each(data, (index, row) => {
      let _tr = $("<tr/>");
      $.each(row, (i, e) => {
        if(index == 0){
          let _th = $("<th/>");
          $(_th).text(i);
          $(_thead).append(_th);
        }
        let _td = $("<td/>");
        $(_td).text(e);
        $(_tr).append(_td);
      })
      $(_tr).appendTo(_tbody);
    })
    $(_table).append(_thead, _tbody);
    return _table;
  }

}

export default tableModule;