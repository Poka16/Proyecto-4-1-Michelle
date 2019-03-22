
(function(){
    // console.log('loading');
    // $('#button').on('click', function(){
    //     let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     console.log('es un correo', re.test($("#email").val()));
    // });

    $("#email").on('blur', function(){
        console.log('perdi el foco');
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!re.test($("#email").val())){
            $('.error-email').html('Ingrese un email valido');
        }
        else{ 
            $('.error-email').html('');
        }

    });
    $("#contra").on('blur', function(){
        console.log('perdi el foco');
        let re =/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        if(!re.test($("#contra").val())){
    
            $('.error_pass').html('Ingrese una contraseña válida');
        }
        else{ 
            $('.error_pass').html('');
        }

    });
    
    $("#nombre").on('blur', function(){
        console.log('perdi el foco');
        let re =/^[a-zA-Z ]{2,30}$/;

        if(!re.test($("#nombre").val())){
    
            $('.error_nombre').html('Ingrese un nombre válido');
        }
        else{ 
            $('.error_nombre').html('');
        }

    });
    $("#apellido").on('blur', function(){
        console.log('perdi el foco');
        let re =/^[a-zA-Z ]{2,30}$/;

        if(!re.test($("#apellido").val())){
    
            $('.error_apellido').html('Ingrese un apellido válido');
        }
        else{ 
            $('.error_apellido').html('');
        }
    });
        $("#direccion").on('blur', function(){
            console.log('perdi el foco');
            let re =/^[a-zA-Z ]{2,30}$/;
    
            if(!re.test($("#direccion").val())){
        
                $('.error_direccion').html('Ingrese una direccion válido');
            }
            else{ 
                $('.error_direccion').html('');
            }
    });
    
    $("#fechanacimiento").on('blur', function(){
        console.log('perdi el foco');
        let re = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
        if(!re.test($("#fechanacimiento").val())){
    
            $('.error_fecha_nacimiento').html('Ingrese una fecha de nacimiento válida');
        }
        else{ 
            $('.error_fecha_nacimiento').html('');
        }
});
  
$("#identificacion").on('blur', function(){
    console.log('perdi el foco');
    let re = /^[0-9]{2,15}$/;
  //let re = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
    if(!re.test($("#identificacion").val())){
        $('.error_identificacion').html('Ingrese una identificacion válida');
    }
    else{ 
        $('.error_identificacion').html('');
    }
});

$("#telefono").on('blur', function(){
    console.log('perdi el foco');
    let re = /^[0-9]{2,15}$/;
  //let re = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
    if(!re.test($("#telefono").val())){
        $('.error_telefono').html('Ingrese un numero de telefono válido');
    }
    else{ 
        $('.error_telefono').html('');
    }
});
$("#sexo").on('blur', function(){
    console.log('perdi el foco');
    let re =/^[a-zA-Z ]{2,30}$/;

    if(!re.test($("#sexo").val())){

        $('.error_sexo').html('Ingrese sexo válido');
    }
    else{ 
        $('.error_sexo').html('');
    }
});
$("#lugar").on('blur', function(){
    console.log('perdi el foco');
    let re =/^[a-zA-Z ]{2,30}$/;

    if(!re.test($("#lugar").val())){

        $('.error_lugar').html('Ingrese un lugar válido');
    }
    else{ 
        $('.error_lugar').html('');
    }
});

})();
