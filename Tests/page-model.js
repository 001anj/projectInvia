import { Selector } from 'testcafe';

export default class Page {
    constructor () {
  
    	
    	this.addCookies = Selector('.cookiebot__button');
    	this.searchHotel = Selector('label').withText('Hotel (City)')
    	this.searchForm = Selector('#startForm');

        this.searchCity = Selector('input[type=search][name="base[searchTerm]"]');
        this.selectCity = Selector('.aiduac-response-element').withText('Madrid');

        this.openArrivalDateCalendar = Selector('#hotel div.form div._input-box div div div.datepicker-input-wrapper');
        this.selectArrivalDate = Selector('#hotel div.form div._input-box div div div.datepicker-layer div.datepicker-wrapper div div div.month table tbody tr:nth-child(6) td.day-25');

        this.selectDepartureDate = Selector('#hotel div.form div._input-box div div div.datepicker-layer div.datepicker-wrapper div div div.month table tbody tr:nth-child(6) td.day-29');
        
        this.pressSearch = Selector('#hotel div.form div.form-footer div.form-submit-button div');
        this.searchResults = Selector('.wrap');
        
        this.selectFiveStarHotel = Selector('#pageWrapper div.row div.small-12 div div:nth-child(2) div div.small-order-2 div.js-baseFrame-filter-hotelCategory div.js-baseFrame-filter-content div div:nth-child(10)');
        this.fiveStarRatings = Selector('.js-baseFrame-currentFilters-label').withText('5 Sterne');

        this.selectBestReview = Selector('#pageWrapper div.row div.small-12 div div:nth-child(2) div div.small-order-2 div.js-baseFrame-filter-hotelRating div.js-baseFrame-filter-content label.rating-color5');
        this.bestReview = Selector('.js-baseFrame-currentFilters-label').withText('Bewertung exzellent');
        
        this.sortPrice = Selector('#interaction-container div div div.interactElement div.selectWrapper ul li:nth-child(2)');
        this.SelectDescendingPrice = Selector('#interaction-container div div div.interactElement div.selectWrapper ul li.asc');
        this.descendingPrice = Selector('#interaction-container div div div.sort div.selectWrapper ul li.desc');
    }

}