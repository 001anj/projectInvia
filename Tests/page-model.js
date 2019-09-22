import { Selector } from 'testcafe';

export default class Page {
    constructor () {
  
    	
    	this.addCookies = Selector('.cookiebot__button');
    	this.searchHotel = Selector('label').withText('Hotel (City)')
    	this.searchForm = Selector('#startForm');

        this.searchCity = Selector('input[type=search][name="base[searchTerm]"]');
        this.selectCity = Selector('.aiduac-response-element').withText('Madrid');

        this.openArrivalDateCalendar = Selector('#hotel > div.form > div._input-box._input-box-icon-set._input-box-size-._input-box-datePickerTwoInputs.datepicker-startpage > div > div > div.datepicker-input-wrapper.datepicker-input-wrapper-start');
        this.selectArrivalDate = Selector('#hotel > div.form > div._input-box._input-box-icon-set._input-box-size-._input-box-datePickerTwoInputs.datepicker-startpage > div > div > div.datepicker-layer.start-input > div.datepicker-wrapper > div > div > div.month.month-8.year-2019 > table > tbody > tr:nth-child(6) > td.day.day-25');

        this.selectDepartureDate = Selector('#hotel > div.form > div._input-box._input-box-icon-set._input-box-size-._input-box-datePickerTwoInputs.datepicker-startpage > div > div > div.datepicker-layer.end-input > div.datepicker-wrapper > div > div > div.month.month-8.year-2019 > table > tbody > tr:nth-child(6) > td.day.day-29.selected');
        
        this.pressSearch = Selector('#hotel > div.form > div.form-footer > div.form-submit-button > div');
        this.searchResults = Selector('.wrap');
        
        this.selectFiveStarHotel = Selector('#pageWrapper > div.row > div.small-12.xlarge-3.small-order-2.xlarge-order-1.columns.sidebar > div > div:nth-child(2) > div > div.small-order-2.xlarge-order-1 > div.js-baseFrame-filter-hotelCategory.filter-box > div.js-baseFrame-filter-content.filter-box-content > div > div:nth-child(10)');
        this.fiveStarRatings = Selector('.js-baseFrame-currentFilters-label').withText('5 Sterne');

        this.selectBestReview = Selector('#pageWrapper > div.row > div.small-12.xlarge-3.small-order-2.xlarge-order-1.columns.sidebar > div > div:nth-child(2) > div > div.small-order-2.xlarge-order-1 > div.js-baseFrame-filter-hotelRating.filter-box.rating > div.js-baseFrame-filter-content.filter-box-content.filter-icons > label.filter-label.rating-color5');
        this.bestReview = Selector('.js-baseFrame-currentFilters-label').withText('Bewertung exzellent');
        
        this.ascendingPrice = Selector('#interaction-container > div > div > div.interactElement.sort > div.selectWrapper.show-for-xlarge > ul > li:nth-child(2)');
        this.descendingPrice = Selector('#interaction-container > div > div > div.interactElement.sort > div.selectWrapper.show-for-xlarge > ul > li.js-baseFrame-sortElement.js-baseFrame-sort-icon.active.changeDirection.asc');
    
    }

}