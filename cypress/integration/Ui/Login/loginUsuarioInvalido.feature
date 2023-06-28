Feature: login

   como usuario quero realizar login no site swaglabs

   Scenario Outline: validar a mensagem de erro ao tentar fazer login com usuario invalido

    Given que o usuario acesse a url do site sauce demo
    And preencher os campo <email> e <senha> com um usuario invalido
    When clicar em login
    Then devera receber uma mensagem de erro

    Examples:
        | email | senha | 
        | "joaozinho"  | "secret_sauce" | 
        | "mariazinha"  | "secret_sauce" |
        | "a"  | "secret_sauce" |
        | "ab"  | "secret_sauce" |
        | "Ab"  | "secret_sauce" |
        | "Abc"  | "secret_sauce" |
        | "Abc123"  | "secret_sauce" |
        | "Ab123c"  | "secret_sauce" |
        | "A123bc"  | "secret_sauce" |
        | "A123"  | "secret_sauce" |