let addPerson = () => {
    let adsoyad = document.getElementById("adsoyad").value;
    let yas = document.getElementById("yas").value;

    if (adsoyad && yas) {
        let table = document.getElementById("adyasalt");
        let row = table.insertRow(1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = adsoyad;
        cell2.innerHTML = yas;
        document.getElementById("adsoyaducun").reset();
    } else {
        alert("xahis olunur melumati daxil edin");
    }
};
