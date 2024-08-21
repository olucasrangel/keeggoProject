Feature: Verificação de produtos na API

  Scenario: Buscar por produto específico
    Given que eu busco por "Beats Studio 2 Over-Ear Matte Black Headphones"
    When a resposta da API é recebida
    Then todos os produtos na resposta devem ter o nome "Beats Studio 2 Over-Ear Matte Black Headphones"