//INDEX

(function(){
    var PROYECTO = {
        init: function(){
            this.addEvents();
            console.log('this.cacheElements', this.cacheElements.$btnSubmit);
        },

        addEvents: function(){
            this.cacheElements.$btnSubmit.on('click', function(){
               
                this.sendInfo();
            }.bind(this));            
        },

        cacheElements: {
            $btnSubmit : $('#btn-submit'),
            $inputEmail : $('#email'),
            $inputContra : $('#contra'),
            $inputNombre : $('#nombre'),
            $inputApellido : $('#apellido'),
            $inputID: $('#identificacion'),
           
        },

        sendInfo : function(){
            console.log('ENTRO A SEND INFO');

            var email = this.cacheElements.$inputEmail.val();
            var contra = this.cacheElements.$inputContra.val();
            var  nombre= this.cacheElements.$inputNombre.val();
            var apellido = this.cacheElements.$inputApellido.val();
            var identificacion = this.cacheElements.$inputID.val();
            
            

            var data = {
                email : email,
                contra : contra,
                nombre : nombre,
                apellido : apellido,
                identificacion : identificacion,
               

            }

            //enviamos al servidor
            console.log('data', data);

            //ajax se usa para la comunicacion cliente - servidor
            $.ajax({
                data: data,
                type: 'post',
                url: '',
                success: function (result, status, xhr) {
                  
                }
            });
        }
    }

    PROYECTO.init();

})();

//Segundo
(function(){

    var Userdata = {
        init: function(){
            this.addEvents();
            console.log('this.cacheElements', this.cacheElements2.$btnIngreso);
        },

        addEvents: function(){
            this.cacheElements2.$btnIngreso.on('click', function(){
                this.sendInfo();
            }.bind(this));            
        },
        cacheElements2: {
            $btnIngreso: $ ('#btn-submit'),
            $inputDireccion : $('#direccion'),
            $inputFecha : $('#fecha'),
            $inputTelefono: $('#telefono'),
            $inputSexo : $('#sexo'),
            $inputLugar : $('#lugar'),
        },
sendInfo : function(){
    console.log('ENTRO A SEND INFO');

            var direccion = this.cacheElements2.$inputDireccion.val();
            var fecha = this.cacheElements2.$inputFecha.val();
            var telefono= this.cacheElements2.$inputTelefono.val();
            var sexo= this.cacheElements2.$inputSexo.val();
            var lugar = this.cacheElements2.$inputLugar.val();

            var datos = {
                direccion : direccion,
                fecha : fecha,
                telefono : telefono,
                sexo : sexo,
                lugar : lugar,

            }

            console.log('data', datos);

            //ajax se usa para la comunicacion cliente - servidor
            $.ajax({
                datos: datos,
                type: 'post',
                url: '',
                success: function (result, status, xhr) {
                  
                }
            });
        }
    }

    Userdata.init();
})();
