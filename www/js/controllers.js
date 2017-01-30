angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('ProdutosCtrl', function($scope, $ionicModal){

    $scope.produto = 
    {
      nome: "",
      lote: "",
      valor: "",
      dataDeValidade:"",
      quantidade:""
    };

    $scope.produtos = []
    
    $scope.addProduto = function()
    {

      $scope.produtos.unshift($scope.produto);
      $scope.produto = 
      {
        nome: "",
        lote: "",
        valor: "",
        dataDeValidade:"",
        quantidade:""
      };
    };

    $ionicModal.fromTemplateUrl('templates/modal-produto.html', {
      scope: $scope}).then(function(modal)
      {
        $scope.modal = modal;
      });

      $scope.openModal = function()
      {
        $scope.modal.show();
      };

      $scope.closeModal = function()
      {
        $scope.modal.hide();
      }

})

.controller('ClientesCtrl', function($scope, $ionicModal){

  $scope.cliente = 
  {
    nome:"",
    endereco: "",
    cnpj_cpf:"",
    telefones:""
  };
  $scope.clientes = [];

  $scope.addCliente = function()
    {

      $scope.clientes.unshift($scope.cliente);
      $scope.cliente = {
        nome:"",
        endereco: "",
        cnpj_cpf:"",
        telefones:""
      };
    };

  $ionicModal.fromTemplateUrl('templates/modal-cliente.html', {
      scope: $scope}).then(function(modal)
      {
        $scope.modal = modal;
      });

      $scope.openModal = function()
      {
        $scope.modal.show();
      };

      $scope.closeModal = function()
      {
        $scope.modal.hide();
      }

})
.controller('VendasCtrl', function($scope, $ionicModal)
{
  $scope.venda = 
  {
    numero:"",
    valor:"",
    produtos: [],
    pagamento:"",
    dataDaCompra:""
  }
  $scope.vendas = [];

  $scope.addVenda = function()
  {
    $scope.vendas.unshift($scope.venda);
    $scope.venda =
    {
      numero:"",
      valor:"",
      produtos: [],
      pagamento:"",
      dataDaCompra:""
    };
  };
  $ionicModal.fromTemplateUrl('templates/modal-venda.html', {scope: $scope}).then(function(modal){
      $scope.modal = modal;
      });

      $scope.openModal = function()
      {
        $scope.modal.show();
      };

      $scope.closeModal = function()
      {
        $scope.modal.hide();
      }

});