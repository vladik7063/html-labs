function table(rows,cols, c1, c2, z){
    var table = document.createElement('TABLE');
    document.body.appendChild(table);
    var tr = document.createElement('TR');
    var td = document.createElement('TD');
    td.style.width = z+'px';
    td.style.height = z+'px';
    for(var i=0; i<rows; i++){
      table.appendChild(tr.cloneNode(true));
      for(var j=0; j<cols; j++){
        var _tr = table.getElementsByTagName('TR')[i];
        _tr.appendChild(td.cloneNode(true));
      }
    }
    for (var i = 0; i < table.rows.length; i++){
      var row = table.rows[i];
      for (var j = 0; j < row.cells.length; j++){
        if((i%2==0 && j%2==0) || i%2==1 && j%2==1)
          row.cells[j].style.backgroundColor = c2;
        else
          row.cells[j].style.backgroundColor = c1;
      }
    }
  }

  function changeColors(c1, c2){
    const cells = [].slice.call(document.getElementsByTagName('TD'));
    cells.forEach((cell)=>{
        if (cell.style.backgroundColor === c1){
            cell.style.backgroundColor = c2;
        } else if (cell.style.backgroundColor === c2){
            cell.style.backgroundColor = c1;
        }
    })
}
 
  table(9,9,'white','black', 70);

  window.eval('setInterval(()=>{changeColors(\'white\', \'black\');}, 500)')