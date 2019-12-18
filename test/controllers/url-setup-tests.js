const assert = require('chai').assert;
const expect = require('chai').expect;
const chalk = require('chalk');
const urlSetup = require('../../api/controllers/url-setup');


describe('getWebUrl', function(){

    it('can set url to default urls when website is not given', function (){
        //arrange
        var website = {}

        //act
        var websites = urlSetup.getWebUrl(website);
        var result = websites.websites1;
        var actual =  "www.hotel-internet-marketing.com/";

        //assert
        assert.equal(result,actual)
    });

    it('can return single url when one website is given', function (){
        //arrange
        var website = {
            website1: 'www.google.com'
          }

        //act
        var websites = urlSetup.getWebUrl(website);
        console.log(websites['website1']);
        var result = websites['website1'];

        var actual = 'www.google.com';

        //assert
        assert.equal(result,actual)
    });

    it('can return three urls when three websits are given', function (){
        //arrange
        var website = {
            website1: 'www.google.com',
            website2: 'www.facebook.com',
            website3: 'www.youtube.com'
          }

        //act
        var websites = urlSetup.getWebUrl(website);

        //assert
        expect(websites).to.have.property('website1')
        expect(websites).to.have.property('website2')
        expect(websites).to.have.property('website3')
    });
})

describe('setUpQuery', function(){
    it('can add api endpoint and https:// to url', function (){
        //arrange
        var website = {
            website1: 'www.google.com',
            website2: undefined,
            website3: undefined
          }

        //act
        var websites = urlSetup.setUpQuery(website);
        var result = websites['website1'];

        var actual = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://www.google.com';

        //assert
        assert.equal(result,actual)
    });
})