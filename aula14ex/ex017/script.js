function gerar() {
    let n1 = document.getElementById('txtn')
    let res = document.getElementById('seltab')

    if (n1.value.length == '') {
        window.alert('[ERRO] digite um número! ')
    } else {
        let n = Number(n1.value)
        res.innerHTML = ''
        if (n >= 0) {
            for (let c = 1; c <= 10; c++) {
                let item = document.createElement('option')
                item.text = `${n} X ${c} = ${n * c}`
                item.value = `res${c}`
                res.appendChild(item)
            }
        } else {
            for (let c = 1; c <= 10; c++) {
                let item = document.createElement('option')
                item.text = `${n} X ${c} = ${n * c}`
                item.value = `res${c}`
                res.appendChild(item)
            }
        }
    }
}
