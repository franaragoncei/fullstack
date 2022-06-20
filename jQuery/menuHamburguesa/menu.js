$(document).ready(function () {
    // PODEMOS ESCRIBIR EL CÓDIGO
    $('#slide_nav').click(function () {
        // HAGO LA ANIMACIÓN DE LAS BARRAS
        $('#slide_nav>span:nth-child(1)').toggleClass('primera')
        $('#slide_nav>span:nth-child(2)').toggleClass('segunda')
        $('#slide_nav>span:nth-child(3)').toggleClass('tercera')

        $('#slide_menu').stop()
        // DESPLIEGO EL MENU
        $('#slide_menu').animate({height: 'toggle'}, 500)
    })

    $('#slide_nav').scrollupbar()
})