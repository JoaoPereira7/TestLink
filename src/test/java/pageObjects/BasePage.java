package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class BasePage {
	@FindBy(linkText = "Access Git Repository (GitHub)")
	private WebElement botaogithub;

	@FindBy(xpath = "//label//input[@type='text']")
	public WebElement informarPesquisa;

	@FindBy(id = "jump-to-suggestion-search-scoped")
	private WebElement acionarpesquisa;

	public void acionarbotaogithub() {
		botaogithub.click();
	}

	public void informarCampoPesquisa(String pesquisa) {
		informarPesquisa.sendKeys(pesquisa);
	}

	public void acionarpesquisa() {
		acionarpesquisa.click();
	}
}
