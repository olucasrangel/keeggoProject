Feature: Teste de API - Carrinho de Compras

  Scenario: Verificar os detalhes do carrinho de compras de um usuário autenticado
    Given que eu sou um usuário autenticado com o ID "823251701"
    When eu fizer uma requisição para ver meu carrinho de compras
    Then a resposta deve conter o status "200"
    And o ID do usuário deve ser "823251701"
    And deve haver produtos no carrinho
    And o produto deve ter o nome "Bose Soundlink Bluetooth Speaker III"
    And o preço deve ser "269.99"
    And a quantidade deve ser "1"