package stepsDefinitions;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.BasePage;

import static org.junit.Assert.assertTrue;
import static utils.Utils.*;

import org.openqa.selenium.By;

public class GitHub {

	@Quando("acionar o botao Access Git Repository \\(GitHub)")
	public void acionarOBotaoAccessGitRepositoryGitHub() {
		Na(BasePage.class).acionarbotaogithub();
	}

	@Entao("o sistema exibe a mensagem testlink-code")
	public void oSistemaExibeAMensagemTestlinkCode() {
		assertTrue(driver.findElement(By.xpath("//strong//a[text()='testlink-code']")).isDisplayed());
	}

	@Entao("o sistma exibe a mensagem  TestLinkOpenSourceTRMS")
	public void oSistmaExibeAMensagemTestLinkOpenSourceTRMS() {
		assertTrue(driver.findElement(By.xpath("//span//a[@class='url fn']")).isDisplayed());
	}

	@Entao("informar no campo Search {string}")
	public void informarNoCampoSearch(String pesquisa) {
		Na(BasePage.class).informarCampoPesquisa(pesquisa);
		Na(BasePage.class).acionarpesquisa();
	}

	@Entao("o sistema exibe a mensagem TestLinkOpenSourceTRMS\\/testlink-code")
	public void oSistemaExibeAMensagemTestLinkOpenSourceTRMSTestlinkCode() {
		assertTrue(
				driver.findElement(By.xpath("//h3//a[text()='TestLinkOpenSourceTRMS/testlink-code']")).isDisplayed());
	}

	@Entao("o sistma exibe a mensagem  all results on GitHub")
	public void oSistmaExibeAMensagemAllResultsOnGitHub() {
		assertTrue(driver.findElement(By.xpath("//h3//small//a[text()='all results on GitHub']")).isDisplayed());
	}

}
