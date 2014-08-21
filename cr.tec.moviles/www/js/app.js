//Initialize Parse

var data_marca;
var data_codigo;
var data_descripcion;


$(document).ready(function(){
Parse.initialize("xLDpfEcs3rdyyELCIIbALY2RHmA7FVEsg2yth9mU","SGAuGwCUrYX49d10ZNgzDiUiLPhDrpNT5Byq4kdr");


  var Product = Parse.Object.extend("Producto");
  var query = new Parse.Query(Product);
  var text = "";
  query.find({
    success: function(results) {
      for (var i = 0; i < results.length; i++) { 
        var object = results[i];
        var carPhoto = object.get("Imagenes");

        text = text + '<p><h2>' + object.get('Nombre') + ' <p></h2>' +
              '<p><h3> Codigo' + object.get('Codigo') + ' <p></h3>' +
              '<p><h4> Descripcion <p></h4> <p><h5>' + object.get('Descripcion') + ' <p></h5>' +
              
              '<p><img src="' + carPhoto.url() + '" alt="Auto"></p>';
  	          $("#var_img").html(text);
      }
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });
});


    function envio() {
      data_marca = document.getElementById("txt_marca").value ;
      data_codigo = document.getElementById("txt_codigo").value;
      data_descripcion = document.getElementById("txt_descripcion").value;


      Parse.initialize("xLDpfEcs3rdyyELCIIbALY2RHmA7FVEsg2yth9mU","SGAuGwCUrYX49d10ZNgzDiUiLPhDrpNT5Byq4kdr");

      var Product = Parse.Object.extend("Producto");
      var gameScore = new Product();
      var base64 = "V29ya2luZyBhdCBQYXJzZSBpcyBncmVhdCE=";

      var fileUploadControl = $("#myFile")[0];
      if (fileUploadControl.files.length > 0) {
        var file = fileUploadControl.files[0];
        var name = "photo.jpg";
        var parseFile = new Parse.File(name, file);
      }


      gameScore.set("Nombre", data_marca);
      gameScore.set("Codigo", data_codigo);
      gameScore.set("Descripcion", data_descripcion);
      gameScore.set("Imagenes", parseFile);
       
      gameScore.save(null, {
        success: function(gameScore) {
          alert('New object created with objectId: ' + gameScore.id);
        },
        error: function(gameScore, error) {
          alert('Failed to create new object, with error code: ' + error.message);
        }
      });    

     }







 