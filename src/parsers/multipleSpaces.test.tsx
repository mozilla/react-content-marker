import { render } from '@testing-library/react';
import { createMarker } from '../createMarker';

import { multipleSpaces } from './multipleSpaces';

describe('multipleSpaces', () => {
    it('marks the right parts of a string', () => {
        const Marker = createMarker([multipleSpaces]);
        const content = 'hello,   world';

        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual(' \u00B7 ');
    });
});
