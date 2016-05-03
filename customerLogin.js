/**
 * Created by pramo_000 on 03-05-2016.
 */
var customerLogin = function () {

    var loginButton = element(by.buttonText('Customer Login'));


    this.clickButton = function () {

        loginButton.click();
        browser.sleep(1000);


    };


    this.selectLogin = function () {

        element.all(by.repeater('cust in Customers')).then(function (item) {

            item[2].click();

        })
        browser.sleep(2000);
        element(by.buttonText('Login')).click();


    };


    this.checkCorrectLogin = function () {


        element(by.xpath('/html/body/div[3]/div/div[2]/div/div[1]/strong/span')).getText().then(function (text) {
            console.log('====' + text);
            console.log('====' + text);
            console.log('====' + text);


        })

    };


    this.accountType = function () {

        element.all(by.model('accountNo')).getText().then(function (item) {

            //  item[3].click();


        })


    };


};


module.exports = new customerLogin();