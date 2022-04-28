for (let i = 5; i <= 200; i++) {
    if (i == 50) {
        document.getElementById('misNumeros').innerHTML += '<p>ES 50</p>'
    } else {
        document.getElementById('misNumeros').innerHTML += '<p>' + i + '</p>'
    }
}