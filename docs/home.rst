Home
====

This is the front page of the application.

.. toctree::
   :maxdepth: 2
   :caption: Contents:

   home

pages/Home.js
................

Mostly just a wrapper component to hold all the front page sub-components.

Imports all of the front page text from two .json files and serves the
appropriate one based on language state to the sub-components.


src/components/Home/Home.css
.................

Styling for the *Home* component. Mostly empty and unnecessary.


src/components/Home/Landing.js
...................

The landing element that shows main logo, main front page image and a little
indicator thing to tease user to keep scrolling.

constructor(props)
------------------

**this.state**

State info of this component. Mostly maintains state of the little "Read More"
thing that instructs the user to scroll down.

    :scrollIndText: Boolean: is the "Read More" text of the indicator visible
    :scrollIndVis: Boolean: is the entire indicator visible

handleScroll()
--------------

*No params*

Triggered on scroll. Sets relevant states to show/hide parts of the scroll
indicator when certain scroll positions have been reached.

*Returns nothing*

render()
--------

*No params*

Describes and renders the component's HTML.

*Returns JSX to Home component*


src/components/Home/Landing.css
...............................

Styling for landing element. Class names should be quite self-explanatory.


src/components/Home/Intro.js
............................

Component for the small bit of introductory text at the beginning of the main
content.


src/components/Home/Intro.css
.............................


src/components/Home/InfoGrid/InfoGrid.js
........................................

Wrapper component for the alternating image/text information element.


src/components/Home/InfoGrid/InfoGrid.css
.........................................


src/components/Home/InfoGrid/InfoGridBlock.js
.............................................


src/components/Home/InfoGrid/InfoGridBlock.css
..............................................


src/components/Home/BlogPreview.js
..................................


src/components/Home/BlogPreview.css
...................................


src/components/Home/ApplyInfo.js
................................


src/components/Home/ApplyInfo.css
.................................