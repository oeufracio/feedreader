# feedreader
Using Jasmine to write a number of tests against a pre-existing application

## Installation
You just need a web browser to open the file **index.html**

## Usage
The file `jasmine/spec/feedreader.js` implements the following tests:

- RSS Feeds
	- a test that ensure  `allFeeds` variable has been defined and that it is not empty.
	- a test that loops through each feed and ensures it has a `url` defined and not empty.
	- a test that loops through each feed and ensures it has a `name` defined and not empty.
- The menu
	- a test that ensures the `menu` element is hidden by default.
	- a test that ensures the `menu` changes visibility when the menu icon is clicked.
- Initial Entries
	- a test that ensures when the loadFeeds function is called and completes its work.
- New Feed Selection
	- a test that ensures that the content actually changes when a new feed is loaded.


## License
Copyright (c) 2016 Odin Eufracio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

