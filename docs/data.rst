Data
====

Most of the text and other natural language elements on the website are
placed into .json data files. Some files have two versions, one for
Finnish and another for English.

src/data/navData\_\*.json
.........................

*\* = en or fi*

Data file for everything related to navigation. Comes in Finnish and English
versions.

:logo: Filename, relative to src/imgs with no preceding slash, of the
       logo used on the site.

:navdata: Nested objects that describe the navigation structure of the site.
          Top level objects are links to different pages, while the subLinks
          are links to subsections of pages. These can be expanded freely
          although you will probably have to make adjustments to the site
          style to accommodate the extra links.

:langswitch: The text that is displayed on the language switching button.
             Is always English in the Finnish file and vice versa.

:ftMoreContacts: The text in the link in the footer that links to the contacts
                 page.

src/data/Home\_\*.json
......................

*\* = en or fi*

Data file for everything in the Home view. Comes in Finnish and English
versions.

----

landing
-------

Data related to the landing area of the home page.

:logoimg: Filename, relative to src/imgs with no preceding slash, of the large
          logo that appears on the landing area.

:slogan: The slogan text that appears in the landing area, alongside the logo.

:scrollind: The text that appears in the indicator that teases the user to
            scroll down.

----

intro
-----

Data related to the text element that contains introductory text.

:id: Id name for hash navigation. Should match the one defined in *navData*.

:title: Title of the text element.

:text: Paragraphs of text separated in an array. Can only contain one.

----

infogrid
--------

Data related to the graphical grid-like information element.

:id: Id name for hash navigation. Should match the one defined in *navData*.

:title: The title above the element.

:blocks: Data related to the individual image-text pair elements in the
         info grid. New blocks can be added freely.

:blocks.id: Unique (within this list) id for the block.

:blocks.img: Filename, relative to src/imgs/infogrid with no preceding slash,
             of the image element of the block.

:blocks.title: The title of text element in the block.

:blocks.text: The text paragraph in the text element.

:blocks.bgcolor: The background color, in any format used in CSS, of the text
                 element of the block.

----

blogpreview
-----------

Data related to the blog preview element. Does NOT contain data related to the
contents of the individual cards.

:id: Id name for hash navigation. Should match the one defined in *navData*.

:title: The title above the element.

----

applyinfo
---------

Data related to the element about applying.

:id: Id name for hash navigation. Should match the one defined in *navData*.

:applynow: The title of the main text element that should tell the user to
           apply now!

:text: The main info text about applying. Contains multiple paragraphs, that
       can be added/removed at will.

:text.id: Unique (within this list) id for the paragraph.

:text.bold: The first part of the paragraph that is rendered in bold.

:text.normal: The second part of the paragraph that is rendered normally.

:toapply: Data related to the element that contains some more text and the
          actual link to the application form.

:toapply.text: The text paragraph in the element.

:toapply.buttontext: The text on the button link to the application form.

:toapply.link: The URL of the application form.

src/data/Contact\_\*.json
.........................

Data file for everything in the Contact view.
Also used for some of the contacts in the Footer.

*\* = en or fi*

:id: Id for the entire contacts page. Probably not actually used/useful
     for anything.

----

location
--------

Data related to the location info part of the contacts page.

:id: Id name for hash navigation. Should match the one defined in *navData*.

:title: Title of the location info element.

:visitaddress/postaddress: Addresses of Digitalents Academy.

:visitaddress/postaddress.title: Descriptive title of the address element.

:visitaddress/postaddress.address: The actual address text of the address
                                   element.

directions
**********

Data related to finding one's way to Digitalents Academy.

:title: Title of the directions section.

:intro: Introductory text about the Maria 01 -area.

:intro.title: Title of the introduction.

:intro.text: Text of the introduction. Currently only supports 2 paragraphs.

:arrivalmethods: Data of the elements that render as expandable drop down
                 things. Can be added/removed freely.

:arrivalmethods.id: Unique (within this list) id of the individual arrival
                    method.

:arrivalmethods.title: Title of the individual arrival method.

:arrivalmethods.text: Paragraphs of arrival method main text. Can be freely
                      added/removed.

:map: Data related to the map element. Currently uses an openstreemap embed.

:map.embedsrc: The source link for the embed iframe element.

:map.bigmaptext: The text of link that leads to opening a big map in a new
                 tab.

:ytembedsrc: The source URL for embedding a youtube video.

people
------

:id: Id name for hash navigation. Should match the one defined in *navData*.

:title: Title of the people/staff part of the contacts page.

:peoplecards: Data for the elements that have information about people.

:peoplecards.id: Unique (within this list) id for this person.

:peoplecards.name: Name of the person.

:peoplecards.title: Job title of person.

:peoplecards.landline: A landline or landline-like phone number of the person.

:peoplecards.mobile: A mobile phone number for the person.

:peoplecards.email: Email address of the person.

:peoplecards.picture: Filename, relative to src/imgs/people/, with no
                      preceding slash, of the picture for the person.

:peoplecards.quote: A single paragraph text that is a first person quote the
                    person has given. Describes their role and how they can
                    help.

src/data/blog.json
..................

Finnish-only (mostly) data file for the individual blog post preview cards
in the Blog Preview element. The blog currently only posts on mondays,
wednesdays and fridays.

monday / wednesday / friday
---------------------------

Preview cards for blog posts that have been made in the Digitalents Academy
blog.

:date: A freely formatted short date text. Should include day of week
       and date.

:title: The title of the blog post.

:text: A short preview text for the blog post.

:link: The URL directly to the blog post.

:backgroundimage: Filename, relative to src/imgs/blogpreview/ with no
                  preceding slash, of the background image for the card.

:textcolor: The color of the text, in a format used by CSS.

----

:tipslink: The URL to the page in the Digitalents Academy blog where one
           can find various helpful links and tips.

:bloglink: The URL to the front page of the Digitalents Academy blog.