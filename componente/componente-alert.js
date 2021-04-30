angular.module('app').component('alertParaUsuario', {
    templateUrl: 'componente/alert.html',
    bindings: {
        msg: '=',
        tipo: '='
    },
    controllerAs: 'vm',
    controller: function(){
        vm = this;
        vm.tipoClasse = undefined

        vm.$onInit = function(){
            console.log(vm.tipo)
            if(vm.tipo == 'sucesso'){
                vm.tipoClasse = 'alert alert-success'
            }else if(vm.tipo == 'erro'){
                vm.tipoClasse = 'alert alert-danger'
            }
        }

    }
})