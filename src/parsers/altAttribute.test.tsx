import { render } from '@testing-library/react';
import { createMarker } from '../createMarker';

import { altAttribute } from './altAttribute';

describe('altAttribute', () => {
    it('marks the right parts of a string', () => {
        const Marker = createMarker([altAttribute]);
        const content = 'alt="hello"';

        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual('alt="hello"');
    });
});
