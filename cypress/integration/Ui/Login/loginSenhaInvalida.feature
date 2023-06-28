Feature: login

   como usuario quero realizar login no site swaglabs

   Scenario Outline: validar a mensagem de erro ao tentar fazer login com senha invalida

    Given que o usuario acesse a url do site sauce demo
    And preencher os campos <email> e <senha> com uma senha invalida
    When clicar em login
    Then devera receber uma mensagem de erro

    Examples:
        | email | senha | 
        | "standard_user"  | "sauce" | 
        | "standard_user"  | "secret" |
        | "standard_user"  | "se" |
        | "standard_user"  | "cret" |
        | "standard_user"  | "_secret" |
        | "standard_user"  | "et" |
        | "standard_user"  | "123" |
        | "standard_user"  | "secret123" |
        | "standard_user"  | "123secret" |
        | "standard_user"  | "sauce_secret" |
       