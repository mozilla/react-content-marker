import { render } from '@testing-library/react';
import each from 'jest-each';
import { createMarker } from '../createMarker';

import { uriPattern } from './uriPattern';

describe('uriPattern', () => {
    each([
        ['http://example.org/'],
        ['https://example.org/'],
        ['ftp://example.org/'],
        ['nttp://example.org/'],
        ['file://example.org/'],
        ['irc://example.org/'],
        ['www.example.org/'],
        ['ftp.example.org/'],
        ['http://example.org:8888'],
        ['http://example.org:8888/?'],
        ['http://example.org/path/to/resource?var1=$@3!?%=iwdu8'],
        ['http://example.org/path/to/resource?var1=$@3!?%=iwdu8&var2=bar'],
        ['HTTP://EXAMPLE.org/'],
    ]).it('correctly marks URI `%s`', uri => {
        const Marker = createMarker([uriPattern]);
        const { container } = render(<Marker>{uri}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual(uri);
    });
});
