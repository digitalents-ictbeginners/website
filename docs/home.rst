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

Styling for landing element.

:landing: Wrapper for the entire landing element.

:landingBg: The element that contains the background image.

:landingContent: The logo and text area.

:scrollIndicator: The little thing that should make the user scroll down.


src/components/Home/Intro.js
............................

Component for the small bit of introductory text at the beginning of the main
content. No dynamic elements, simply renders HTML with text data from the
*data* prop.


src/components/Home/Intro.css
.............................

Styling for the Intro element.

:introBlock: Wrapper

:introAnchor: Anchor to determine where the top of the viewport should be
              when hash navigating to this element.

:introInner: The actual text block that includes the underline.


src/components/Home/InfoGrid/InfoGrid.js
........................................

Wrapper component for the alternating image/text information element.

Takes data in from the *data* prop and maps the blocks from it to
InfoGridBlock elements, passing along the relevant data.


src/components/Home/InfoGrid/InfoGrid.css
.........................................

Styling of the InfoGrid element. NOT the individual sub-blocks.

:infoGridWrapper: Just a wrapper, wrapping everything.

:infoGridAnchor: Anchor to determine where the top of the viewport should be
                 when hash navigating to this element.

:infoGrid: The element that contains the title and the grid thing itself.

:infoBlocks: The grid thing itself.


src/components/Home/InfoGrid/InfoGridBlock.js
.............................................

Takes data in the *data* prop from the wrapper element. Renders the individual
text-image pairs. Alternates between text to image and image to text.


src/components/Home/InfoGrid/InfoGridBlock.css
..............................................

Styling for the individual InfoGrid text-image pairs.

:infoBlock: Wrapper for a text-image pair.

:infoSubBlock: Styling for all text and image blocks.

:ibText: Styling for just the text block.

:ibImg: Styling for just image block.


src/components/Home/BlogPreview.js
..................................

A component that displays a preview of the Digitalents Academy blog.

constructor()
-------------

*No params*

Loads the images used as backgrounds in the first three cards.

style(img, color)
-----------------

*img: Image, color: String*

Takes the object returned by import/require and a CSS-compatible color
and returns a style object that uses them.

*Returns style object*


src/components/Home/BlogPreview.css
...................................

Styling the blog preview element and the individual cards within.

:blogPreviewWrapper: Wrapper for everything.

:blogPreviewAnchor: Anchor to determine where the top of the viewport should
                    be when hash navigating to this element.

:blogPreviewTitle: The title of the blog preview element.

:blogPreview: The actual element that contains the cards.

:blogPreviewCard: Styling for all of the card elements.

:bpcPost: Styling for the cards that are post previews.

:bpcTips: Styling for the card that is a link to links and tips.

:bpcLink: Styling for the card that is a link to the blog front page.


src/components/Home/ApplyInfo.js
................................

A component for the part of the site that presents information about how to
apply and a button to actually apply. Takes in data from the *data* prop for
all the texts. Also implements a simple svg curve at the top of the element.


src/components/Home/ApplyInfo.css
.................................

Styling for the apply info element.

:applyInfo: Wrapper for the entire element.

:aiAnchor: Anchor to determine where the top of the viewport should be
           when hash navigating to this element.

:aiUnderlined: Used to be a wrapper for an underlined heading element. Now
               just makes the horizontal line.

:aiCurve: The curve SVG element.

:aiContentWrapper: Wrapper for the actual content of the element.

:aiContent: The container that actually has the content.

:aiTextBox: The text element of the content.

:aiApplyWrapper: A wrapper for the element that has some more text and the
                 application form link button.

:buttonWrapper: A wrapper containing everything that has to do with the link
                button element. *Should maybe be renamed to adhere to the
                naming policy of the other classes*

:aiToApply: The actual button link to the application form.