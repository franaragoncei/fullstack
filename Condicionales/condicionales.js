var elTiempo = 'Nublado'

if(elTiempo == 'Nublado'){
    console.log('ESTÁ NUBLADO');
}else if(elTiempo == 'Nublado'){
    console.log('ESTÁ SOLEADO');
}else if(elTiempo == 'Lluvioso'){
    console.log('ESTÁ LLUVIOSO');
}else{
    console.log('NO SE QUE TIEMPO HACE');
}

// if (elTiempo == 'Lluvioso' && elTiempo == 'Nevando') {
//     console.log('ESTÁ LLOVIENDO Y NEVANDO');
// }

// if (elTiempo == 'Lluvioso' || elTiempo == 'Nevando') {
//     console.log('ESTÁ LLOVIENDO O NEVANDO');
// }

// if (elTiempo != 'Lluvioso') {
//     console.log('NO ESTÁ LLOVIENDO');
// }

// if ((elTiempo == 'Lluvioso' || elTiempo == 'Nevando')) {
//     console.log('ESTÁ LLOVIENDO O NEVANDO');
// }

switch (elTiempo) {
    case 'Soleado':
        console.log('Está soleado');
        break;
    case 'Nublado':
        console.log('está nublado')
        break;
    case 'LLuvioso':
        console.log('está lloviendo')
        break;
    case 'Nevando':
        console.log('está nevando')
        break;
    default:
        console.log('No sé el tiempo que hace');
}

document.getElementById('boton').addEventListener('click', function(){
    alert('NO PUEDE SER CEI')
})