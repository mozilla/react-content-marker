import { render } from '@testing-library/react';
import { createMarker } from '../createMarker';

import { thinSpace } from './thinSpace';

describe('thinSpace', () => {
    it('marks the right parts of a string', () => {
        const Marker = createMarker([thinSpace]);
        const content = 'hello,\u2009world';

        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual('\u2009');
    });
});
