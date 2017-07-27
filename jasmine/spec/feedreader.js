/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    
    describe('RSS Feeds', function() {
        // a test that ensure allFeeds variable has been defined and that it is not empty.
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // a test that loops through each feed and ensures it has a url defined and not empty.
        it('all have url defined and not empty', function() {

            for(let i=0; i< allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe("");
            }
         });


        // a test that loops through each feed and ensures it has a name defined and not empty.
        it('all have name defined and not empty', function() {

            for(let i=0; i< allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe("");
            }
         });
    });


    describe('The menu', function() {
        let body;

        beforeEach(function() {
            body = $('body');
        });

        // a test that ensures the menu element is hidden by default.
        it('should be hidden by default', function() {
            expect( body.hasClass('menu-hidden') ).toBe(true);
         });

         // a test that ensures the menu changes visibility when the menu icon is clicked.
          it('should change when the menu icon is clicked', function() {
            
            let menuIcon = $('.menu-icon-link');

            //Ensure the menu is hidden, and test when click icon the menu is display;
            body.addClass('menu-hidden');
            menuIcon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(false);

            //Ensure the menu is display, and test when click icon the menu is hidden;
            body.removeClass('menu-hidden');
            menuIcon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(true);

          });
    });

    describe('Initial Entries', function() {

        beforeEach( function(done) {
            loadFeed(0,done);
        });

        // a test that ensures when the loadFeeds function is called and completes its work.
        it('should be at least a single .entry element',function(){
            expect( $('.feed').find('.entry').length ).not.toBe(0);
         });
    });

    
    describe('New Feed Selection',function() {

        var oldContent;
        var newContent;

        beforeEach( function(done) {

            loadFeed(0, function() {
                console.log('loadFeed-1 is finished');
                oldContent = $('.feed').find('.entry');
            });
            

            loadFeed(1, function() {
                console.log('loadFeed-2 is finished');
                done();
            });
        });

        // a test that ensures that the content actually changes when a new feed is loaded
        it('should actually changes its content', function() {

            newContent = $('.feed').find('.entry');

            // It suficce to check if the first entry change its content
            expect($(oldContent[0]).html()).not.toEqual($(newContent[0]).html());

         });
    });
    
}());
