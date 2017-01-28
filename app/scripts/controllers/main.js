'use strict';

/**
 * @ngdoc function
 * @name appWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appWebApp
 */
angular.module('appWebApp')
  .controller('MainCtrl', function ($scope, $http) {

    // Simple GET request example:
    $http({
      method: 'GET',
      url: 'http://remirobert.com:4242/news?timestamp=150000000000'
    }).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
      console.log("success");
      console.log(response);
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log("error");
      console.log(response);
    });
    $scope.newses = [
      {
        "id": "7cb354de-0585-4d03-ba6a-dd6e4dc295e5",
        "sourceId": "587f381618c343f665d038ed",
        "categoryId": "587f381618c343f665d038d0",
        "title": "Looping, Twisting 'Number 11' May Be The Perfect Book For Our Time",
        "pubDate": "2017-01-28T07:00:28Z",
        "description": "Jonathan Coe's new novel is a black-hearted satire about the crumbling of modern Britain, and the point at which childhood gives way to a cold assessment of the world as it is, not as we dream it.",
        "link": "http://www.npr.org/2017/01/28/510816961/looping-twisting-number-11-may-be-the-perfect-book-for-our-time?utm_medium=RSS&utm_campaign=artslife",
        "guid": "http://www.npr.org/2017/01/28/510816961/looping-twisting-number-11-may-be-the-perfect-book-for-our-time?utm_medium=RSS&utm_campaign=artslife",
        "creator": "Jason Sheehan",
        "thumbnail": null
      },
      {
        "id": "ee6c460d-b2cb-42f6-98d6-6a31c0a9a500",
        "sourceId": "587f381618c343f665d038e9",
        "categoryId": "587f381618c343f665d038d5",
        "title": "Looping, Twisting 'Number 11' May Be The Perfect Book For Our Time",
        "pubDate": "2017-01-28T07:00:28Z",
        "description": "Jonathan Coe's new novel is a black-hearted satire about the crumbling of modern Britain, and the point at which childhood gives way to a cold assessment of the world as it is, not as we dream it.",
        "link": "http://www.npr.org/2017/01/28/510816961/looping-twisting-number-11-may-be-the-perfect-book-for-our-time?utm_medium=RSS&utm_campaign=artslife",
        "guid": "http://www.npr.org/2017/01/28/510816961/looping-twisting-number-11-may-be-the-perfect-book-for-our-time?utm_medium=RSS&utm_campaign=artslife",
        "creator": "Jason Sheehan",
        "thumbnail": null
      },
      {
        "id": "4d8b5651-e6ff-4a7c-aba7-9cfb4d8105ff",
        "sourceId": "587f381618c343f665d038e5",
        "categoryId": "587f381618c343f665d038d4",
        "title": "Gut wins downhill as Vonn crashes for 2nd straight day",
        "pubDate": "2017-01-28T07:04:51Z",
        "description": "CORTINA D'AMPEZZO, Italy        (AP) -- Defending overall World Cup champion Lara Gut won her first downhill of the season Saturday while Lindsey Vonn crashed for the second consecutive day....",
        "link": "http://hosted.ap.org/dynamic/stories/S/SKI_WCUP_WOMENS_DOWNHILL?SITE=VABRM&SECTION=HOME&TEMPLATE=DEFAULT",
        "guid": "http://hosted.ap.org/dynamic/stories/S/SKI_WCUP_WOMENS_DOWNHILL?SITE=VABRM&SECTION=HOME&TEMPLATE=DEFAULT",
        "creator": "",
        "thumbnail": null
      },
      {
        "id": "9ba16748-f04a-4817-ab59-f634aab5a0f7",
        "sourceId": "587f381618c343f665d038e5",
        "categoryId": "587f381618c343f665d038d4",
        "title": "The Latest: No. 23 _ choosing shoes to mark the occasion",
        "pubDate": "2017-01-28T07:06:17Z",
        "description": "MELBOURNE, Australia        (AP) -- The Latest on Saturday from the Australian Open (all times local):...",
        "link": "http://hosted.ap.org/dynamic/stories/T/TEN_AUSTRALIAN_OPEN_THE_LATEST_ASOL-?SITE=VABRM&SECTION=HOME&TEMPLATE=DEFAULT",
        "guid": "http://hosted.ap.org/dynamic/stories/T/TEN_AUSTRALIAN_OPEN_THE_LATEST_ASOL-?SITE=VABRM&SECTION=HOME&TEMPLATE=DEFAULT",
        "creator": "",
        "thumbnail": null
      },
      {
        "id": "1f1910f9-3de9-4e09-b1f0-05a6a5ae0eb3",
        "sourceId": "587f381618c343f665d038d7",
        "categoryId": "587f381618c343f665d038d2",
        "title": "Russia grounds Proton-M rocket for 3 months",
        "pubDate": "2017-01-28T07:06:45Z",
        "description": "MOSCOW        (AP) -- Deputy Russian Prime Minister Dmitry Rogozin says that Proton-M rockets will be out of service for three and a half months because of engine problems....",
        "link": "http://hosted.ap.org/dynamic/stories/E/EU_RUSSIA_SPACE?SITE=OHLIM&SECTION=HOME&TEMPLATE=DEFAULT",
        "guid": "http://hosted.ap.org/dynamic/stories/E/EU_RUSSIA_SPACE?SITE=OHLIM&SECTION=HOME&TEMPLATE=DEFAULT",
        "creator": "",
        "thumbnail": null
      },
      {
        "id": "3a519a46-bf18-40a9-83d8-4f771b7328bf",
        "sourceId": "587f381618c343f665d038e5",
        "categoryId": "587f381618c343f665d038d4",
        "title": "The Latest: Kontinen, Peers beat Bryans for Australian title",
        "pubDate": "2017-01-28T07:19:45Z",
        "description": "MELBOURNE, Australia        (AP) -- The Latest on Saturday from the Australian Open (all times local):...",
        "link": "http://hosted.ap.org/dynamic/stories/T/TEN_AUSTRALIAN_OPEN_THE_LATEST?SITE=VABRM&SECTION=HOME&TEMPLATE=DEFAULT",
        "guid": "http://hosted.ap.org/dynamic/stories/T/TEN_AUSTRALIAN_OPEN_THE_LATEST?SITE=VABRM&SECTION=HOME&TEMPLATE=DEFAULT",
        "creator": "",
        "thumbnail": null
      },
      {
        "id": "7dfd2756-4717-4b45-9425-915ddbddaaa4",
        "sourceId": "587f381618c343f665d038e5",
        "categoryId": "587f381618c343f665d038d4",
        "title": "New lawsuit against Baylor alleges 52 rapes in 4 years",
        "pubDate": "2017-01-28T07:44:52Z",
        "description": "WACO, Texas        (AP) -- A former Baylor University student who says she was raped by two football players filed a federal lawsuit Friday against the school that alleges there were dozens more assaults of women involving other players....",
        "link": "http://hosted.ap.org/dynamic/stories/U/US_BAYLOR_SEXUAL_ASSAULT_INVESTIGATION_TXOL-?SITE=VABRM&SECTION=HOME&TEMPLATE=DEFAULT",
        "guid": "http://hosted.ap.org/dynamic/stories/U/US_BAYLOR_SEXUAL_ASSAULT_INVESTIGATION_TXOL-?SITE=VABRM&SECTION=HOME&TEMPLATE=DEFAULT",
        "creator": "",
        "thumbnail": null
      },
      {
        "id": "fbc1628e-bd8e-48c6-bd29-ae2b60ec68a9",
        "sourceId": "587f381618c343f665d038ee",
        "categoryId": "587f381618c343f665d038d0",
        "title": "Refugees Detained at U.S. Airports, Prompting Legal Challenges to Trump’s Immigration Order",
        "pubDate": "2017-01-28T08:03:49Z",
        "description": "Lawyers representing two Iraqi refugees detained at Kennedy Airport filed a writ of habeas corpus seeking to have their clients released.",
        "link": "http://www.nytimes.com/2017/01/28/us/refugees-detained-at-us-airports-prompting-legal-challenges-to-trumps-immigration-order.html?partner=rss&emc=rss",
        "guid": "http://www.nytimes.com/2017/01/28/us/refugees-detained-at-us-airports-prompting-legal-challenges-to-trumps-immigration-order.html",
        "creator": "NICHOLAS KULISH and MANNY FERNANDEZ",
        "thumbnail": null
      },
      {
        "id": "4cf1cef7-5c80-42eb-a64b-1909f2b669d0",
        "sourceId": "587f381618c343f665d038ec",
        "categoryId": "587f381618c343f665d038d5",
        "title": "Remembering Actor John Hurt",
        "pubDate": "2017-01-28T08:11:00Z",
        "description": "British actor John Hurt, who had memorable roles in <em>The Elephant Man</em> and <em>Alien</em> has died at 77.",
        "link": "http://www.npr.org/2017/01/28/512139851/remembering-actor-john-hurt?utm_medium=RSS&utm_campaign=movies",
        "guid": "http://www.npr.org/2017/01/28/512139851/remembering-actor-john-hurt?utm_medium=RSS&utm_campaign=movies",
        "creator": "Scott Simon",
        "thumbnail": null
      },
      {
        "id": "4311b844-a0b2-43c1-9e8a-3a1dd309b28f",
        "sourceId": "587f381618c343f665d038ed",
        "categoryId": "587f381618c343f665d038d0",
        "title": "Cast As Brooding Leads, Rufus Sewell Says His Real Talent Is Comedy",
        "pubDate": "2017-01-28T08:11:56Z",
        "description": "Rufus Sewell is seemingly everywhere these days — on stage and on the small screen, including Amazon's alternate-history series <em>The Man in the High Castle</em>, in which he plays an American Nazi leader.",
        "link": "http://www.npr.org/2017/01/28/511886261/cast-as-brooding-leads-rufus-sewell-says-his-real-talent-is-comedy?utm_medium=RSS&utm_campaign=artslife",
        "guid": "http://www.npr.org/2017/01/28/511886261/cast-as-brooding-leads-rufus-sewell-says-his-real-talent-is-comedy?utm_medium=RSS&utm_campaign=artslife",
        "creator": "NPR Staff",
        "thumbnail": null
      },
      {
        "id": "619334be-9f44-4232-909e-be62c00bdea6",
        "sourceId": "587f381618c343f665d038ed",
        "categoryId": "587f381618c343f665d038d0",
        "title": "Renowned Biographer Patricia Bosworth Writes A Chapter From Her Own Life",
        "pubDate": "2017-01-28T08:11:56Z",
        "description": "<em>The Men in My Life </em>chronicles a 10-year period during which Bosworth married, divorced, finished college, became an actress, and worked alongside some of the biggest movie stars of the 1950s.",
        "link": "http://www.npr.org/2017/01/28/511863277/renowned-biographer-patricia-bosworth-writes-a-chapter-from-her-own-life?utm_medium=RSS&utm_campaign=artslife",
        "guid": "http://www.npr.org/2017/01/28/511863277/renowned-biographer-patricia-bosworth-writes-a-chapter-from-her-own-life?utm_medium=RSS&utm_campaign=artslife",
        "creator": "NPR Staff",
        "thumbnail": null
      },
      {
        "id": "cb6dffe1-d229-490a-b003-90453746dd95",
        "sourceId": "587f381618c343f665d038e9",
        "categoryId": "587f381618c343f665d038d5",
        "title": "Cast As Brooding Leads, Rufus Sewell Says His Real Talent Is Comedy",
        "pubDate": "2017-01-28T08:11:56Z",
        "description": "Rufus Sewell is seemingly everywhere these days — on stage and on the small screen, including Amazon's alternate-history series <em>The Man in the High Castle</em>, in which he plays an American Nazi leader.",
        "link": "http://www.npr.org/2017/01/28/511886261/cast-as-brooding-leads-rufus-sewell-says-his-real-talent-is-comedy?utm_medium=RSS&utm_campaign=artslife",
        "guid": "http://www.npr.org/2017/01/28/511886261/cast-as-brooding-leads-rufus-sewell-says-his-real-talent-is-comedy?utm_medium=RSS&utm_campaign=artslife",
        "creator": "NPR Staff",
        "thumbnail": null
      },
      {
        "id": "bf0fd50c-eb04-49ba-875f-1b94f55f1b6c",
        "sourceId": "587f381618c343f665d038e9",
        "categoryId": "587f381618c343f665d038d5",
        "title": "Renowned Biographer Patricia Bosworth Writes A Chapter From Her Own Life",
        "pubDate": "2017-01-28T08:11:56Z",
        "description": "<em>The Men in My Life </em>chronicles a 10-year period during which Bosworth married, divorced, finished college, became an actress, and worked alongside some of the biggest movie stars of the 1950s.",
        "link": "http://www.npr.org/2017/01/28/511863277/renowned-biographer-patricia-bosworth-writes-a-chapter-from-her-own-life?utm_medium=RSS&utm_campaign=artslife",
        "guid": "http://www.npr.org/2017/01/28/511863277/renowned-biographer-patricia-bosworth-writes-a-chapter-from-her-own-life?utm_medium=RSS&utm_campaign=artslife",
        "creator": "NPR Staff",
        "thumbnail": null
      },
      {
        "id": "5c25cce4-cd0c-474e-821a-6781cc53f9d6",
        "sourceId": "587f381618c343f665d038ec",
        "categoryId": "587f381618c343f665d038d5",
        "title": "Taking 'Death Of A Salesman' To Tehran",
        "pubDate": "2017-01-28T08:11:56Z",
        "description": "<em>The Salesman</em> is the latest work by celebrated Iranian filmmaker Asghar Farhadi. Based on Arthur Miller's <em>Death of a Salesman</em>, the film explores the life of a young couple in Tehran.",
        "link": "http://www.npr.org/2017/01/28/512129975/taking-death-of-a-salesman-to-tehran?utm_medium=RSS&utm_campaign=movies",
        "guid": "http://www.npr.org/2017/01/28/512129975/taking-death-of-a-salesman-to-tehran?utm_medium=RSS&utm_campaign=movies",
        "creator": "Howie Movshovitz",
        "thumbnail": null
      },
      {
        "id": "05a0ba23-0e24-44fc-8e69-3c6c9585872d",
        "sourceId": "587f381618c343f665d038ec",
        "categoryId": "587f381618c343f665d038d5",
        "title": "Oscar Nominees And Diversity",
        "pubDate": "2017-01-28T08:11:56Z",
        "description": "NPR's Scott Simon talks to film critic Bobby Rivers about this year's Oscar nominees. Rivers was one of the vocal critics about last year's lack of racial diversity among contenders.",
        "link": "http://www.npr.org/2017/01/28/512129961/oscar-nominees-and-diversity?utm_medium=RSS&utm_campaign=movies",
        "guid": "http://www.npr.org/2017/01/28/512129961/oscar-nominees-and-diversity?utm_medium=RSS&utm_campaign=movies",
        "creator": null,
        "thumbnail": null
      },
      {
        "id": "b9f7cf99-7fb4-4d60-80e6-2832359eca81",
        "sourceId": "587f381618c343f665d038ec",
        "categoryId": "587f381618c343f665d038d5",
        "title": "Renowned Biographer Patricia Bosworth Writes A Chapter From Her Own Life",
        "pubDate": "2017-01-28T08:11:56Z",
        "description": "<em>The Men in My Life </em>chronicles a 10-year period during which Bosworth married, divorced, finished college, became an actress, and worked alongside some of the biggest movie stars of the 1950s.",
        "link": "http://www.npr.org/2017/01/28/511863277/renowned-biographer-patricia-bosworth-writes-a-chapter-from-her-own-life?utm_medium=RSS&utm_campaign=movies",
        "guid": "http://www.npr.org/2017/01/28/511863277/renowned-biographer-patricia-bosworth-writes-a-chapter-from-her-own-life?utm_medium=RSS&utm_campaign=movies",
        "creator": "NPR Staff",
        "thumbnail": null
      },
      {
        "id": "3c671c29-ee98-40b9-a650-7af9d8894c30",
        "sourceId": "587f381618c343f665d038d7",
        "categoryId": "587f381618c343f665d038d2",
        "title": "Russia grounds Proton-M rocket for 3 1/2 months",
        "pubDate": "2017-01-28T08:18:30Z",
        "description": "MOSCOW        (AP) -- Russia&amp;apos;s workhorse Proton-M rockets will be out of service for three and a half months because of engine problems, Deputy Prime Minister Dmitry Rogozin said Saturday during a visit to the factory in the city of Voronezh where the engines are manufactured....",
        "link": "http://hosted.ap.org/dynamic/stories/E/EU_RUSSIA_SPACE?SITE=OHLIM&SECTION=HOME&TEMPLATE=DEFAULT",
        "guid": "http://hosted.ap.org/dynamic/stories/E/EU_RUSSIA_SPACE?SITE=OHLIM&SECTION=HOME&TEMPLATE=DEFAULT",
        "creator": "",
        "thumbnail": null
      },
      {
        "id": "0a394a06-0035-4794-a75d-b210cb109a3e",
        "sourceId": "587f381618c343f665d038ed",
        "categoryId": "587f381618c343f665d038d0",
        "title": "Mississippi Masala: How A Native Of India Became A Southern Cooking Star",
        "pubDate": "2017-01-28T08:29:00Z",
        "description": "Food has always been a big part of Southern identity. These days, one of the region's best chefs is Vish Bhatt, a man born 9,000 miles away. And his Indian-inflected cuisine reflects a changing South.",
        "link": "http://www.npr.org/sections/thesalt/2017/01/28/511884777/mississippi-masala-how-a-native-of-india-became-a-southern-cooking-star?utm_medium=RSS&utm_campaign=artslife",
        "guid": "http://www.npr.org/sections/thesalt/2017/01/28/511884777/mississippi-masala-how-a-native-of-india-became-a-southern-cooking-star?utm_medium=RSS&utm_campaign=artslife",
        "creator": "Maria Godoy",
        "thumbnail": null
      },
      {
        "id": "0108ac55-511f-4af7-a444-1f3652051c36",
        "sourceId": "587f381618c343f665d038e9",
        "categoryId": "587f381618c343f665d038d5",
        "title": "Mississippi Masala: How A Native Of India Became A Southern Cooking Star",
        "pubDate": "2017-01-28T08:29:00Z",
        "description": "Food has always been a big part of Southern identity. These days, one of the region's best chefs is Vish Bhatt, a man born 9,000 miles away. And his Indian-inflected cuisine reflects a changing South.",
        "link": "http://www.npr.org/sections/thesalt/2017/01/28/511884777/mississippi-masala-how-a-native-of-india-became-a-southern-cooking-star?utm_medium=RSS&utm_campaign=artslife",
        "guid": "http://www.npr.org/sections/thesalt/2017/01/28/511884777/mississippi-masala-how-a-native-of-india-became-a-southern-cooking-star?utm_medium=RSS&utm_campaign=artslife",
        "creator": "Maria Godoy",
        "thumbnail": null
      },
      {
        "id": "ceee278e-913a-479f-95b5-5309910d41e1",
        "sourceId": "587f381618c343f665d038e5",
        "categoryId": "587f381618c343f665d038d4",
        "title": "Venus' run to a Grand Slam final is victory in itself",
        "pubDate": "2017-01-28T08:40:13Z",
        "description": "MELBOURNE, Australia        (AP) -- More than seven years after her last Grand Slam title match, Venus Williams would be forgiven for being a little nervous when she stepped inside Rod Laver Arena to face her sister, Serena, for the Australian Open championship....",
        "link": "http://hosted.ap.org/dynamic/stories/T/TEN_AUSTRALIAN_OPEN_VENUS_RETURN_ASOL-?SITE=VABRM&SECTION=HOME&TEMPLATE=DEFAULT",
        "guid": "http://hosted.ap.org/dynamic/stories/T/TEN_AUSTRALIAN_OPEN_VENUS_RETURN_ASOL-?SITE=VABRM&SECTION=HOME&TEMPLATE=DEFAULT",
        "creator": "By JUSTIN BERGMAN",
        "thumbnail": null
      },
      {
        "id": "55a088ef-d599-4455-9aad-674ae612352a",
        "sourceId": "587f381618c343f665d038e6",
        "categoryId": "587f381618c343f665d038d4",
        "title": "How to watch Arsenal vs. Southampton: Live stream, game time, TV",
        "pubDate": "2017-01-28T08:55:07Z",
        "description": "How to watch Arsenal vs. Southampton in the FA Cup. \n",
        "link": "http://www.si.com/planet-futbol/2017/01/28/arsenal-southampton-watch-online-live-stream-tv-channel",
        "guid": "13807161",
        "creator": "SI Wire",
        "thumbnail": "http://cdn-s3.si.com/s3fs-public/2017/01/27/arsenal-southampton-watch-online-live-stream.jpg"
      }
    ];

    //Load content http://remirobert.com:4242/news?timestamp=150000000000
  });
