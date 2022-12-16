import { render } from '@testing-library/react';
import { createMarker } from '../createMarker';

import { newlineCharacter } from './newlineCharacter';

describe('newlineCharacter', () => {
    it('marks the right parts of a string', () => {
        const Marker = createMarker([newlineCharacter]);
        const content = `hello,
            world`;

        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual('¶\n');
    });
});
