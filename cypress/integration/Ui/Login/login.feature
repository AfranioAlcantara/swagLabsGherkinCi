Feature: Login

    Scenario: realizar login com sucesso
    
    Given que o usuario acesse a url do site sauce demo
    And preencher os campos de email e senha
    When clicar em login
    Then devera ser logado visualizando os produtos

     Scenario: validar produto mochila (Sauce Labs Backpack)
    
    Given que o usuario acesse a url do site sauce demo
    When faça login
    Then devera encontrar a mochila Sauce Labs Backpack na tela inicial

    Scenario: validar produto moleton (Sauce Labs Fleece Jacket)
    
    Given que o usuario acesse a url do site sauce demo
    When faça login
    Then devera encontrar a moleton Sauce Labs Fleece Jacket na tela inicial

     Scenario: validar produto roupa de bebe (Sauce Labs Onesie)
    
    Given que o usuario acesse a url do site sauce demo
    When faça login
    Then devera encontrar a roupa de bebe Sauce Labs Onesie na tela inicial

    Scenario: usuario banido
    
    Given que o usuario acesse a url do site sauce demo
    When o usuario banido da plataforma tentar realizar login
    Then devera receber mensagem indicando que esta banido