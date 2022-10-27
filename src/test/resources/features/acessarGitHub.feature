#language: pt
#enconding: UTF-8
Funcionalidade: Acessar Git Hub

  Cenario: Acessar Git Hub
    Quando acionar o botao Access Git Repository (GitHub)
    Entao o sistema exibe a mensagem testlink-code
    Entao o sistma exibe a mensagem  TestLinkOpenSourceTRMS

  Cenario: Pesquisar Git Hub
    Quando acionar o botao Access Git Repository (GitHub)
    E informar no campo Search "TestLink"
    Entao o sistema exibe a mensagem TestLinkOpenSourceTRMS/testlink-code
    Entao o sistma exibe a mensagem  all results on GitHub
