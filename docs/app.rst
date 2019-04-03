src/App.js
==========

Main component of the application.

constructor()
-------------

**this.VIEW_THRESHOLD**

    Sets the threshold at which the view changes between compact ("mobile") or
    wide ("desktop").

----

**this.state**

    Holds all the main state information of the app.

    :mobile: Boolean: is mobile mode active
    :english: Boolean: true = english, false = finnish
    :sidebarOpen: Boolean: in mobile mode, is sidebar open
    :navTab: Boolean: in non-mobile mode, which navbar item is displayed
    :overlayOpen: Boolean: is the image overlay visible
    :overlayImg: Image: the image object that the overlay should show


setView()
---------

*No params*

This method sets the *mobile* state based on the size of the viewport compared
to *this.VIEW_THRESHOLD*.

It is triggered by a "resize" event listener and is run once when the
App is mounted.

*Returns nothing*


toggleSidebar()
---------------

*No params*

Simply toggles the *sidebarOpen* state. Effect is to open and close the
navigation sidebar when in mobile mode.

*Returns nothing*


setSubNav(index)
----------------

*index: number*

Simply sets the *navTab* state to the provided *index* number. Effect is to
open the appropriate SubNavBar. When *0* is provided, no SubNavBar is shown.

*Returns nothing*


toggleLanguage()
----------------

*No params*

Simple toggles the *english* state. Effect is to decide which .json data
file is used as the source for the text of various elements.

*Returns nothing*


setOverlay(img)
---------------

*img: Image*

Sets the image on the overlay and displays the overlay. The img parameter
should be the object you get from an import or require.

*Returns nothing*


closeOverlay()
--------------

*No params*

Closes the overlay by setting the *overlayOpen* state to *false*

*Returns nothing*


updateURL()
-----------

*No params*

Update the page URL the maintain the english language setting thing and
appropriate hashes.

*Returns nothing*

render()
--------

*No params*

The main render function of the entire application. Is called by the framework
itself.

*Returns JSX to insert into html*


App.css
=======

Everything in the App render JSX is split into components so styling here is
only for "App" div element.