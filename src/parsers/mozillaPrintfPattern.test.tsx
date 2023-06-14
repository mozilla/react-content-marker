import { render } from '@testing-library/react';
import each from 'jest-each';
import { createMarker } from '../createMarker';

import { mozillaPrintfPattern } from './mozillaPrintfPattern';

describe('mozillaPrintfPattern', () => {
    each([
        ['%S', 'My %S is Luka.'],
        ['%1$S', 'My %1$S is Luka.'],
        ['%@', 'My %@ is Luka.'],
        ['%2$@', 'My %2$@ is Luka.'],
    ]).it('marks `%s` in `%s`', (mark, content) => {
        const Marker = createMarker([mozillaPrintfPattern]);
        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual(mark);
    });
});
