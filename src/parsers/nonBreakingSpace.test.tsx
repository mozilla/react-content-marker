import { render } from '@testing-library/react';
import { createMarker } from '../createMarker';

import { nonBreakingSpace } from './nonBreakingSpace';

describe('nonBreakingSpace', () => {
    it('marks the right parts of a string', () => {
        const Marker = createMarker([nonBreakingSpace]);
        const content = 'hello,\u00A0world';

        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual('\u00A0');
    });
});
