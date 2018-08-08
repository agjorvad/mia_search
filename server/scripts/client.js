$(document).ready(function() {
  console.log('Ready');

//Temporary object to be replaced by data from backend.
var arrayOfObj = [];
var obj1 = new Obj("https://1.api.artsmia.org/800/7505.jpg","Japanese and Korean Art", "134", "The collection of Japanese and Korean art includes more than 7,000 works ranging from ancient to contemporary and is among the top five collections in the United States. The permanent display space for Japanese art is the largest in the Western world with 15 galleries and over 10,000 square feet (930 sqm). The collection itself includes Buddhist sculpture, woodblock prints, paintings, lacquer, works of bamboo, and ceramics, and it is particularly rich in works from the Edo period (1610–1868).", "09:00:00", "09:15:00");
var obj2 = new Obj("https://3.api.artsmia.org/800/1704.jpg", "Contemporary Art", "342", "In 2008 Mia launched an initiative to focus on the art of our times. Through its new Department of Contemporary Art, the museum brings a fresh dynamism to its galleries by collecting and exhibiting works by living artists. This initiative emphasizes the relationships among historical art, diverse cultures, and contemporary art-making.", "09:15:00", "09:30:00");
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

  $( "#printButton" ).click(function() {
    window.print();
  });
  $('body').on('blur', '.time-start', function(e) {
    var inputVal = e.target.value;
    var timeClass = '#hidden-print-div .' + $(event.target).attr('class').split(" ")[1];
    console.log($(timeClass).text( ));
    $(timeClass).text( inputVal );
  });

  $('body').on('blur', '.time-end', function(e) {
    var inputVal = e.target.value;
    var timeClass = '#hidden-print-div .' + $(event.target).attr('class').split(" ")[1];
    console.log($(timeClass).text( ));
    $(timeClass).text( inputVal );
  });

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
              '<td>Start Time:</td><td> <input class="time-start time-start-'+ [i] + '" type="time" value="' + arrayOfObj[i].timeStart + '" aria-label=""></td>' +
            '</tr>' +
            '<tr>' +
            '<td>End Time:</td>  <td><input class="time-end time-end-'+ [i] + '" type="time" value="' + arrayOfObj[i].timeEnd + '" aria-label=""></td>' +
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
                '<td style="font-weight: bold;">Start Time:</td><td class="time-start-'+ [i] + '"> ' + arrayOfObj[i].timeStart + '</td>' +
              '</tr>' +
              '<tr>' +
              '<td style="font-weight: bold;">End Time:</td><td class="time-end-'+ [i] + '"> ' + arrayOfObj[i].timeEnd + '</td>' +
            '</tr>' +
            '</table>' +
        '</tr>' +
      '</table>';

      $("#hidden-print-div").append(appendDivPrintable);
  }
}




});
