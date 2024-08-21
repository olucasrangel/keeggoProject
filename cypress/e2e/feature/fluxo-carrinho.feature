Feature: Adicionar produto ao carrinho
  Background: 
    Given que estou logado no Advantage Online Shopping
  Scenario: Selecionar um produto e adicionar no carrinho
    And estou com meu carrinho vazio
    And status da resposta é 200
    When seleciono uma categoria
    And adiciono um produto no carrinho
    And clico no ícone do carrinho
    And o produto deve ser adicionado no carrinho com sucesso
    And clico no botão de checkout
    Then verifico o valor total
