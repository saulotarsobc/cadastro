$(document).ready(function () {

    $("#cep").focusout(function() {

        function limpa_formulário_cep() {
            // Limpa valores do formulário de cep.
            //$("#cep").val("");
            $("#rua").val("");
            $("#bairro").val("");
            $("#cidade").val("");
            $("#estado").val("");
        }
    
      
    
            //Nova variável "cep" somente com dígitos.
            var cep = $(this).val().replace(/\D/g, '');
    
            //Verifica se campo cep possui valor informado.
            if (cep != "") {
    
                //Expressão regular para validar o CEP.
                var validacep = /^[0-9]{8}$/;
    
                //Valida o formato do CEP.
                if (validacep.test(cep)) {
    
                    //Preenche os campos com "Buscando..." enquanto consulta webservice.
                    $("#rua").val("Buscando...");
                    $("#bairro").val("Buscando...");
                    $("#cidade").val("Buscando...");
                    $("#estado").val("Buscando...");
    
                    //Consulta o webservice viacep.com.br/
                    $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {
    
                        if (!("erro" in dados)) {
                            //Atualiza os campos com os valores da consulta.
                            $("#rua").val(dados.logradouro);
                            $("#bairro").val(dados.bairro);
                            $("#cidade").val(dados.localidade);
                            $("#estado").val(dados.uf);
    
                        } //end if.
                        else {
                            //CEP pesquisado não foi encontrado.
                            limpa_formulário_cep();
                            alert("CEP não encontrado.");
                        }
                    });
                } //end if.
                else {
                    //cep é inválido.
                    limpa_formulário_cep();
                    alert("Formato de CEP inválido.");
                }
            } //end if.
            else {
                //cep sem valor, limpa formulário.
                //limpa_formulário_cep();
            }

    })

    
});