const { I, base_obj } = inject();

Feature('launch testing environment').tag("test");
Scenario('launching testing environment', () => {
// launch home page
	I.amOnPage(base_obj.envurls.stage);
});

Feature('launch production environment').tag("prod");
Scenario('launching production environment', () => {
// launch home page
    console.log(base_obj.envurls.prod);
	I.amOnPage(base_obj.envurls.prod);
});

//npx codeceptjs run --steps --profile prod
