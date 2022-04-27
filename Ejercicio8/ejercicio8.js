document.getElementById('btn').addEventListener('click', function () {
    function opcionesSeleccionadas(select) {
        let numeroSeleccionadas = 0
        for (let i = 0; i < select.options.length; i++) {
            if (select.options[i].selected) {
                numeroSeleccionadas++
            }
        }
        return numeroSeleccionadas
    }

    alert('Numero de opciones seleccionadas: ' + opcionesSeleccionadas(document.pepe.musicTypes))
})