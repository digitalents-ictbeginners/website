Navigation
==========

Navigation components.

src/components/nav/SideBar.js
.............................

Component that provides a navigation sidebar, primarily intended for
mobile use. Only does the rendering, state info stored in *App* component.

src/components/nav/SideBar.css
..............................

Styling for the sidebar component.

:sidebarTopBar: The bar that always appears at the top when the sidebar component is
                in use (i.e probably in mobile view).

:sidebarOpener: The button that opens the sidebar.

:sidebarTopBarLogo: The logo that appears in the top bar.

:sidebarBackground: The overlay background element that covers the rest of the page
                    when the sidebar is open.

:sidebar: The actual sidebar element itself.

:sidebarHeader: The top part of the actual sidebar. The part that doesn't contain the links.

:sidebarLangSwitch: The button that toggles between languages.

:sidebarCloser: The button in the sidebar that closes the sidebar.

:sidebarContentWrapper: A wrapper for the actual content (links) of the sidebar.
                        Implements a scrolling feature.

:sidebarContent: A container for the actual content (links). The block that is, if
                 necessary, scrolled within the wrapper.

:sidebarLink: Any link component within the sidebar.

:sidebarMainLink: The top level links only.

:sidebarSubLinkContainer: The container beneath each top level link that contains
                          all the sub level links.

:sidebarSubLink: The sub level links only.

src/components/nav/TopNavBar.js
...............................

The component that provides a navigation bar at the top of the page. Intended for use
in wide (desktop or wide tablet) views. Only does the rendering, state info stored in
*App* component.

Does not contain the code for the entire top bar nav system in this
single component. Instead, this system is split into sub-components.

src/components/nav/TopNavBar.css
................................

Styling for TopNavBar component.

:topNavBar: Wrapper element that wraps everything related to the top nav system.

:navElementWrapper: Wrapper for the topmost bar element, the one that contains the logo,
                    top level links and the language switcher.

:navElementContainer: A container for only the top level links.

:langSelector: The button that toggles between languages.

src/components/nav/TopNavBarElement.js
......................................

A component for the menu link elements.

src/components/nav/TopNavBarElement.css
.......................................

Styling for top nav bar menu link elements.

:tnbElem: Wrapper for the entire menu link element.

src/components/nav/SubNavBar.js
...............................

A component for rendering the sub menu that is associated with each top level menu link.

src/components/nav/SubNavBar.css
................................

Styling for the sub menu.

:subNavBar: Wrapper for the entire sub menu.

:snbLinks: Container element for the links.

:snbLink: The link elements themselves.