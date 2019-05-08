========================
Content Marker for React
========================

``react-content-marker`` is a tool to replace content in strings with HTML tags.
It can match simple text, or use the full power of regex.

**Key features:**

* Can replace text with anything (other text, any React node).
* Supports any number of parsers (so you can mark several patterns
  in the same text easily).
* Works on strings and arrays of strings (it ignores non-string items),
  meaning you can combine it with other parsing tools.

:Code:          https://github.com/mozilla/react-content-marker
:Issues:        https://github.com/mozilla/react-content-marker/issues
:License:       3-Clause BSD
:Documentation: https://github.com/mozilla/react-content-marker#content-marker-for-react


Install
=======

``npm i -P react-content-marker`` or ``yarn add react-content-marker``


Basic usage
===========

.. code-block:: js
    import createMarker from 'react-content-marker';

    const parsers = [
        {
            rule: 'world',
            tag: x => <mark title='Target of the greeting'>{ x }</mark>,
        },
        {
            rule: /(hello)/i,
            tag: x => <mark title='Greeting'>{ x }</mark>,
        },
    ];

    const MyMarker = createMarker(parsers);

    render(<MyMarker>Hello, world!</MyMarker>);

    // Renders:
    <mark title='Greeting'>Hello</mark>, <mark title='Greeting'>world</mark>!


Advanced usage
==============

``react-content-marker`` exposes only one function: ``createMarker``. It takes
a list of parsers and returns a React component. That component only accepts
a string or an array of strings — if you pass it a React Component, nothing will
happen.

Parsers are simple objects. They must define two attributes: ``rule`` and
``tag``. ``rule`` is either a string or a regex expressing what is to be matched
in the content. ``tag`` is a function that takes the matched content and returns
a React Node (a string, null, a React Component, etc. ).

When using regex, you will need to have at least one pair of capturing
parentheses, as that is what is used to extract the matched content. If your
regex is complex and uses several capturing parentheses, by default this library
will choose the last non-null match available. If you want to match a different
group, you can define a ``matchIndex`` attribute in your parser. That integer
will be used to choose the captured group to return. Here's an example:

.. code-block:: js
    const parsers = [
        {
            rule: /(hello (world|folks))/i,
            tag: x => <mark>{ x }</mark>,
        },
    ];
    const MyMarker = createMarker(parsers);
    render(<MyMarker>Hello, world!</MyMarker>);
    // Renders:
    Hello, <mark>world</mark>!

.. code-block:: js
    const parsers = [
        {
            rule: /(hello (world|folks))/i,
            tag: x => <mark>{ x }</mark>,
            matchIndex: 0,
        },
    ];
    const MyMarker = createMarker(parsers);
    render(<MyMarker>Hello, world!</MyMarker>);
    // Renders:
    <mark>Hello, world</mark>!


Contributing
============

This code relies on unit tests (with Jest) and type checking (with Flow).

Running tests
-------------

``npm test``

Running Flow checks
-------------------

``npm run flow``

Building
--------

``npm run build``
