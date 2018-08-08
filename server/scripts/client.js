$(document).ready(function() {
  console.log('Ready');

$( "#printButton" ).click(function() {
  window.print();
});

$( "#time-start" ).change(function() {
  //get the time value
  //update the printout
});

$( "#time-end" ).change(function() {
  //get the time value
  //update the printout
});

//Temporary object to be replaced by data from backend.
var arrayOfObj = [];
var obj1 = new Obj("https://1.api.artsmia.org/800/7505.jpg","Japanese and Korean Art", "134", "The collection of Japanese and Korean art includes more than 7,000 works ranging from ancient to contemporary and is among the top five collections in the United States. The permanent display space for Japanese art is the largest in the Western world with 15 galleries and over 10,000 square feet (930 sqm). The collection itself includes Buddhist sculpture, woodblock prints, paintings, lacquer, works of bamboo, and ceramics, and it is particularly rich in works from the Edo period (1610–1868).", "9:00am", "9:15am");
var obj2 = new Obj("https://3.api.artsmia.org/800/1704.jpg", "Contemporary Art", "342", "In 2008 Mia launched an initiative to focus on the art of our times. Through its new Department of Contemporary Art, the museum brings a fresh dynamism to its galleries by collecting and exhibiting works by living artists. This initiative emphasizes the relationships among historical art, diverse cultures, and contemporary art-making.", "09:00:00", "09:15:00");
function Obj(img, title, galleryNum, description, timeStart, timeEnd) {
    this.imgUrl = img;
    this.title = title;
    this.galleryNum = galleryNum;
    this.description = description;
    this.timeStart = timeStart;
    this.timeEnd = timeEnd;
}

arrayOfObj.push(obj1);
arrayOfObj.push(obj2);

populateDOM(arrayOfObj);

function populateDOM(arrayOfObj){
  for(var i = 0; i < arrayOfObj.length ; i++){
    var appendDiv =
      '<div class="col-3 grid-layout">' +
        '<img style="max-height: 500px;" src="' + arrayOfObj[i].imgUrl + '"/>' +
      '</div>' +
      '<div class="col-3 grid-layout" style="padding: 10px;">' +
        '<h2 style="text-align: left; margin-bottom: 10px;">' +
          arrayOfObj[i].title +
        '</h2>' +
        '<h3 style="text-align: left;">Room #' +  arrayOfObj[i].galleryNum + '</h3>' +
        '<p style="text-align: left !important;">' +
          arrayOfObj[i].description +
        '</p>' +
      '</div>' +
      '<div class="col-3 grid-layout" style="background-color: white;">' +
          '<table>' +
            '<tr>' +
              '<td>Start Time:</td><td> <input id="time-start" class="time-start-'+ [i] + '" type="time" placeholder="' + arrayOfObj[i].startTime + '" aria-label=""></td>' +
            '</tr>' +
            '<tr>' +
            '<td>End Time:</td>  <td><input id="time-end" class="time-end-'+ [i] + '" type="time" value="' + arrayOfObj[i].endTime + '" aria-label=""></td>' +
          '</tr>' +
          '</table>' +
      '</div>';

      $("#schedulePrintout").append(appendDiv);

      var appendDivPrintable =
      '<table>' +
        '<tr>' +
          '<td style="width: 500px;">' +
            '<img style="float: left; padding: 0 15px; max-height: 140px;" src="' + arrayOfObj[i].imgUrl + '"/>' +
            '<strong>' + arrayOfObj[i].title + '</strong></br>' +
            arrayOfObj[i].description +
          '</td>' +
          '<td style="width: 200px; padding: 0 20px; vertical-align: top;">' +
            '<h3>Room #'+ arrayOfObj[i].galleryNum + '</h3>' +
            '<table>' +
              '<tr>' +
                '<td style="font-weight: bold;">Start Time:</td><td class="class="time-start-'+ [i] + '">' + arrayOfObj[i].startTime + '</td>' +
              '</tr>' +
              '<tr>' +
              '<td style="font-weight: bold;">End Time:</td><td class="class="time-end-'+ [i] + '"> ' + arrayOfObj[i].endTime + '</td>' +
            '</tr>' +
            '</table>' +
        '</tr>' +
      '</table>';

      $("#hidden-print-div").append(appendDivPrintable);
  }
}




});
