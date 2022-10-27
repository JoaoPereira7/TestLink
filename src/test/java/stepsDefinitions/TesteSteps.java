package stepsDefinitions;

import io.cucumber.java.pt.Entao;

import static org.junit.Assert.assertTrue;
import static utils.Utils.*;

import org.openqa.selenium.By;

public class TesteSteps {
	@Entao("o sistema exibe a mensagem TestLink")
	public void oSistemaExibeAMensagemTestLink() {
		assertTrue(driver.findElement(By.xpath("//h3[@class]")).isDisplayed());
	}

	@Entao("o sistma exibe a mensagem TestLink Open Source Test Management")
	public void oSistmaExibeAMensagemTestLinkOpenSourceTestManagement() {
		assertTrue(driver.findElement(By.xpath("//div[@class='jumbotron']")).isDisplayed());
	}

}
