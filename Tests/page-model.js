import { Selector } from 'testcafe';

export default class Page {
    constructor () {
  
    	
    	this.addCookies = Selector('.cookiebot__button');
    	this.searchHotel = Selector('label').withText('Hotel (City)')
    	this.searchForm = Selector('#startForm');

        this.searchCity = Selector('input[type=search][name="base[searchTerm]"]');
        this.selectCity = Selector('.aiduac-response-element').withText('Madrid');

        this.openArrivalDateCalendar = Selector('#hotel .datepicker-input-wrapper');
        this.selectArrivalDate = Selector('#hotel tbody tr:nth-child(5) td.day-25');

        this.selectDepartureDate = Selector('#hotel .month-9.year-2019 table tbody tr:nth-child(6) td.day.day-29');
        
        this.pressSearch = Selector('#hotel div.form-submit-button div');
        this.searchResults = Selector('.wrap');
        
        this.selectFiveStarHotel = Selector('#pageWrapper div:nth-child(10)');
        this.fiveStarRatings = Selector('.js-baseFrame-currentFilters-label').withText('5 Sterne');

        this.selectBestReview = Selector('#pageWrapper .rating-color5');
        this.bestReview = Selector('.js-baseFrame-currentFilters-label').withText('Bewertung exzellent');
        
        this.sortPrice = Selector('#interaction-container li:nth-child(2)');
        this.SelectDescendingPrice = Selector('#interaction-container li.asc');
        this.descendingPrice = Selector('#interaction-container li.desc');
    }

}
