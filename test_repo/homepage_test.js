const { I, login_obj } = inject();

Feature('homepage').tag("prod","test");
Scenario('Navigate to school at home page', () => {
// launch home page
	I.amOnPage(login_obj.urls.testpageUrl);
});

//npx codeceptjs run --steps --profile prod
