$("#cpfcnpj").mask("999.999.999-99");
document.getElementById("cpfcnpjbutton").addEventListener("click", function () {

    var btn = $(this).val();

    if (btn == "CPF") {
        document.getElementById("cpfcnpjbutton").innerHTML = "CNPJ";
        document.getElementById("cpfcnpjbutton").value = "CNPJ";
        $("#cpfcnpj").mask("99.999.999/9999-99");
        document.getElementById("cpfcnpj").placeholder = "00.000.000/0000-00";
        document.getElementById("cpfcnpj").value = "";
    }

    else {
        document.getElementById("cpfcnpjbutton").innerHTML = "CPF";
        document.getElementById("cpfcnpjbutton").value = "CPF";
        $("#cpfcnpj").mask("999.999.99-99");
        document.getElementById("cpfcnpj").placeholder = "000.000.000-00";
        document.getElementById("cpfcnpj").value = "";
    }    

});