Contacts
========

Documentation about the contacts page.

pages/Contact.js
................

Wrapper component for the entire contacts page.

pages/Contact.css
.................

Styling for the contacts page wrapper.

:contact: Contacts page wrapper.

src/components/Contacts/Location.js
...................................

The component for rendering the location information part of the contacts page.

src/components/Contacts/Location.css
....................................

:location: Wrapper for the entire location info part.

:locationAnchor: Anchor to determine where the top of the
                 viewport should be when hash navigating to this element.

:locationInfo: Wrapper for the part that contains the addresses and the directions.

:locationAddressContainer: Container for the addresses.

:locationAddress: Wrapper for each individual address.

:locationAddressTitle: The title of the each address element.

:locationDirectionsTitle: The title of the directions section.

:locationDirections: The container for the actual directions content.

:locationDirIntro: The text that introduces the location.

:locationMapsContainer: Container/wrapper for all of the helpful graphical elements
                        like the map and other graphics.

:locationMapWrapper: The wrapper element for the actual map iframe thing.

:locationMap: The embed iframe map.

:locationBigMapLink: The link to a bigger version of the map.

:locationDirectionsVideo: Youtube arrival help video embed iframe.

:locationDirectionsGraphic: Wrapper for the helpful directions graphic.
                            **Probably deprecated.**

:locationDirGrZoomOverlay: The overlay on the graphic that indicates it can be
                           clicked to zoom. **Probably deprecated.**


src/components/Contacts/LocationDropdown.js
...........................................

A component to implement a drop down text box.

constructor()
-------------

**this.state**

:open: Is the dropdown open?

handleClick()
-------------

*No params*

Triggered on click. Toggles the *open* state.

*Returns nothing*

src/components/Contacts/LocationDropdown.css
............................................

Styling for the text drop down box.

:locationDropdown: Wrapper for the entire dropdown.

:locationDropdownHeader: The header part that reacts to clicks and has the title
                         and arrow icon.

:locationDropdownContent: Container for the dynamically visible text content.


src/components/Contacts/People/People.js
........................................

The component for the part of the contacts page that has information about
the staff.

src/components/Contacts/People/People.css
.........................................

Styling for the People element.

:people: Wrapper for the entire people part of the contacts page.

:peopleAnchor: Anchor to determine where the top of the
               viewport should be when hash navigating to this element.

:peopleTitle: Title of the people section.

:peopleGrid: Container for all the individual person elements.

src/components/Contacts/People/Person.js
........................................

A component to render info about individual people.

src/components/Contacts/People/Person.css
.........................................

Styling for the Person component.

:person: Wrapper for the entire Person element.

:personText: The text information part of the Person element.

:personEmail: Email address styling.

:personImg: The image or image placeholder of the Person element.

:personQuote: The quote box in the Person element.