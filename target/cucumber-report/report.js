$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/acessarGitHub.feature");
formatter.feature({
  "name": "Acessar Git Hub",
  "description": "",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "Acessar Git Hub 2",
  "description": "",
  "keyword": "Cenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao Access Git Repository (GitHub)",
  "keyword": "Quando "
});
formatter.match({
  "location": "GitHub.acionarOBotaoAccessGitRepositoryGitHub()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe a mensagem testlink-code",
  "keyword": "Entao "
});
formatter.match({
  "location": "GitHub.oSistemaExibeAMensagemTestlinkCode()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistma exibe a mensagem  TestLinkOpenSourceTRMS",
  "keyword": "Entao "
});
formatter.match({
  "location": "GitHub.oSistmaExibeAMensagemTestLinkOpenSourceTRMS()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Pesquisar Git Hub 3",
  "description": "",
  "keyword": "Cenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao Access Git Repository (GitHub)",
  "keyword": "Quando "
});
formatter.match({
  "location": "GitHub.acionarOBotaoAccessGitRepositoryGitHub()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo Search \"TestLink\"",
  "keyword": "E "
});
formatter.match({
  "location": "GitHub.informarNoCampoSearch(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe a mensagem TestLinkOpenSourceTRMS/testlink-code",
  "keyword": "Entao "
});
formatter.match({
  "location": "GitHub.oSistemaExibeAMensagemTestLinkOpenSourceTRMSTestlinkCode()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistma exibe a mensagem  all results on GitHub",
  "keyword": "Entao "
});
formatter.match({
  "location": "GitHub.oSistmaExibeAMensagemAllResultsOnGitHub()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/teste.feature");
formatter.feature({
  "name": "Acessar Sistema",
  "description": "",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "Acessar o sistema 1",
  "description": "",
  "keyword": "Cenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe a mensagem TestLink",
  "keyword": "Entao "
});
formatter.match({
  "location": "TesteSteps.oSistemaExibeAMensagemTestLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistma exibe a mensagem TestLink Open Source Test Management",
  "keyword": "Entao "
});
formatter.match({
  "location": "TesteSteps.oSistmaExibeAMensagemTestLinkOpenSourceTestManagement()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
});