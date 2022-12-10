import { render } from '@testing-library/react';
import { createMarker } from '../createMarker';

import { tabCharacter } from './tabCharacter';

describe('tabCharacter', () => {
    it('marks the right parts of a string', () => {
        const Marker = createMarker([tabCharacter]);
        const content = 'hello,\tworld';

        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual('\u2192');
    });
});
