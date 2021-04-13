const { I, login_obj } = inject();

Feature('login').tag("prod","test");
Scenario('Navigate to school at home page and login to the application.', () => {
// Login operation
	I.amOnPage(login_obj.urls.testpageUrl);
	I.click(login_obj.locators.loginLinkText);
    I.fillField(login_obj.locators.email, login_obj.data.emailValue);
    I.fillField(login_obj.locators.password, login_obj.data.passwordValue);
    I.fillField(login_obj.locators.email, login_obj.data.emailValue);
    I.fillField(login_obj.locators.password, login_obj.data.passwordValue);
    I.click(login_obj.locators.loginButton);
    I.saveScreenshot("Login credentials submitted.jpg");

});
//npx codeceptjs run --steps --profile prod



