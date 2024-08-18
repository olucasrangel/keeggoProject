Feature: Adicionar produto ao carrinho

  Scenario: Selecionar um produto e adicionar no carrinho
    Given que estou na página inicial da Advantage Online Shopping
    When seleciono uma categoria
    And adiciono um produto no carrinho
    And clico no ícone do carrinho
    Then o produto deve ser adicionado no carrinho com sucesso
