import { Selector } from 'testcafe';
import { ClientFunction, t } from 'testcafe';
import Page from './page-model';

const page = new Page();
const getLocation = ClientFunction(() => document.location.href);

fixture('Automated UI test for hotel search')
.page('https://www.ab-in-den-urlaub.de'); //opening the webpage

test('Should check the search process of hotel for city Madrid', async t => {

    await t.maximizeWindow()
    
    // Confirming the cookies
    await t.expect(page.addCookies.visible).ok();
    await t.click(page.addCookies);

    // Select the option "hotel(city)"
    await t.click(page.searchHotel); 

    // Confirming whether form for option hotel(city) is displayed or not
    await t.expect(page.searchForm.visible).ok();

    // Search hotel in city "Madrid"
    await t.typeText(page.searchCity, "Madrid");
    await t.click(page.selectCity); // Select city from automated display list

    // Enter arrival date
    await t.click(page.openArrivalDateCalendar);
    await t.click(page.selectArrivalDate);

    // Enter departure date
    await t.click(page.selectDepartureDate);

    // click on search button after entering required fields
    await t.click(page.pressSearch);
    await t.expect(page.searchResults.visible).ok(); // Check whether searched result page is displayed or not

    // Confirming the search filters i.e. city, start and end date is same as entered before
    await t.expect(getLocation()).contains('Madrid');
    await t.expect(getLocation()).contains('2019-10-25');
    await t.expect(getLocation()).contains('2019-10-29');

    // Select five star hotel option from filter
    await t.click(page.selectFiveStarHotel);
    await t.expect(page.fiveStarRatings.visible).ok(); // Check whether five star hotels are actually shown or not

    // Select best ratings option from filter 
    await t.click(page.selectBestReview); 
    await t.expect(page.bestReview.visible).ok(); // Check whether hotels with best review are actually shown or not

    // Click on price filter
    await t.click(page.sortPrice);

    // Click again to see descending price for searched hotels
    await t.click(page.SelectDescendingPrice);
    await t.expect(page.descendingPrice.visible).ok(); // Check whether sorting of price is in descending order or not
    });
