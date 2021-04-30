angular.module('app').controller('HomeController', HomeController);
HomeController.$inject = ['$location', 'CursoService'];

    function HomeController($location, CursoService){
        vm = this;
        vm.texto = 'Home'
        vm.clientes = ''
        vm.erro = false

        vm.init = function() {
            vm.listarClientes()
        }

        vm.navegar = function(rota, id){
            $location.path(rota + '/' + id)
        }
        vm.listarClientes = function() {
            CursoService.exec_GET().then(function(resposta){
                if(resposta){
                    vm.clientes = resposta
                }else{
                    vm.erro = true
                }
            })
        }

        vm.excluir = function(id){
            CursoService.exec_DEL(id).then(function(resposta){
               if(resposta){
                    //Mensagem de REsposta
               }
           })
        }
        vm.editar = function(id){
            vm.navegar('Cadastro', id)
        }
    } 
      