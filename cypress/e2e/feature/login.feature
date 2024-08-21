Feature: Login no Advantage Online Shopping

  Scenario: Realizar login com credenciais válidas
    Given que estou na página inicial do Advantage Online Shopping
    When eu clico no botão de login
    And eu preencho o campo de nome de usuário com "keeggotest"
    And eu preencho o campo de senha com "Keeggo2"
    And eu clico no botão de submeter
    Then devo estar logado com sucesso com usuário "keeggotest"