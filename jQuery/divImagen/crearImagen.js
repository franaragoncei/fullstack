$(document).ready(function () {
    $('#crearImagen').click(function () {
        html2canvas($('#contenido'), {
            onrendered: function (canvas) {
                $('#img-out').html(canvas)

                canvas.toBlob(function(blob){
                    saveAs(blob, 'test.png')
                })
            }
        })
    })
})