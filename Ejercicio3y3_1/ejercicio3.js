var coches = ['BMW', 'Volvo', 'Seat', 'Cupra']

for (let i = 0; i < coches.length; i++) {
    document.getElementById('resultadoFOR').innerHTML += (
        coches[i]+', '
    )

}








coches.forEach(function(elemento){
    document.getElementById('resultadoFOREACH').innerHTML += elemento + ', '
});
