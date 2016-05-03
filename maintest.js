/**
 * Created by pramo_000 on 03-05-2016.
 */
describe('Banking App Login', function () {

    var homePage = require('./webpages/homePage.js');
    var customerLogin = require('./webpages/customerLogin');

    beforeEach(function () {
        console.log('fdefdfsfsd');
        console.log('fdefdfsfsd');
        console.log('fdefdfsfsd');



    });


    it('LoadHome Page Validation', function () {
        homePage.loadURL();
        expect(browser.getTitle()).toEqual('Protractor practice website - Banking App');

    });


    it('Select the Drop Down and Login Button Click', function () {

        customerLogin.clickButton();
        customerLogin.selectLogin();
        //  expect(browser.getTitle().toEqual('Protractor practice website - Banking App'));


    });


    it('Verify the Correct User', function () {

        customerLogin.checkCorrectLogin();
        customerLogin.accountType();


    });


});




