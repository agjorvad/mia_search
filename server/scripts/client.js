$(document).ready(function() {
  console.log('Ready');



function printDiv(divName) {
   var printContents = document.getElementById(divName).innerHTML;
   var originalContents = document.body.innerHTML;

   document.body.innerHTML = printContents;

   window.print();

   document.body.innerHTML = originalContents;
}

//Print Function
$( "#printButton" ).click(function() {
  console.log('CLICK');
  var elem;
  //PrintElem(elem);
  //printDiv('hidden-print-div');
  window.print();
});

  function PrintElem(elem){
      var mywindow = window.open('', 'PRINT', 'height=400,width=600');

      mywindow.document.write('<html><head><title>' + document.title  + '</title>');
      mywindow.document.write('</head><body>');
      mywindow.document.write('<h1>' + document.title  + '</h1>');
      mywindow.document.write(document.getElementById(elem).innerHTML);
      mywindow.document.write('</body></html>');

      mywindow.document.close(); // necessary for IE >= 10
      mywindow.focus(); // necessary for IE >= 10*/
      mywindow.print();
      mywindow.close();

      return true;
  }

});
