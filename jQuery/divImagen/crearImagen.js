$(document).ready(function () {
    $('#crearImagen').click(function () {
        html2canvas($('#contenido'), {
            onrendered: function (canvas) {
                // theCanvas = canvas
                $('#img-out').html('<p>Descargando....</p>')

                canvas.toBlob(function(blob){
                    saveAs(blob, 'test.png')
                })
            }
        })
    })
})