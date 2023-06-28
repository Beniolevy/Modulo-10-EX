$(document).ready(function()
{

    $('#telefone').mask(' (00) 00000-0000 ')
    $('#cpf').mask(' 000.000.000-00 ')
    $('#idade').mask(' 00/00/0000 ')

    $('form').validate({
        rules: {
            nomes: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
            },
            cpf:{
                required: true,
            },
            idade:{
                required: false,
            },
            sobrenome:{
                required: true
            }

        },
        messages:
        {
            nomes: 'Por favor, insira seu nome!'
        },
        submitHandler: function(form)
        {
            console.log(form)
        },
        invalidHandler: function(evento, validador)
        {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos)
            {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})
