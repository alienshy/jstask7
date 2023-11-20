let addPerson = () => {
    let ad = document.getElementById("ad").value;
    let soyad = document.getElementById("soyad").value;
    let yas = document.getElementById("yas").value;

    if (ad && soyad && yas) {
        let table = document.getElementById("adyasalt");
        let row = table.insertRow(1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = ad + " " + soyad;
        cell2.innerHTML = yas;
        document.getElementById("adsoyaducun").reset();
    } else {
        alert("Xahiş olunur, məlumatları daxil edin.");
    }
};

