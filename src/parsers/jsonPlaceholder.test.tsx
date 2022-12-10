import { render } from '@testing-library/react';
import each from 'jest-each';
import { createMarker } from '../createMarker';

import { jsonPlaceholder } from './jsonPlaceholder';

describe('jsonPlaceholder', () => {
    each([
        ['$USER$', 'Hello $USER$'],
        ['$USER1$', 'Hello $USER1$'],
        ['$FIRST_NAME$', 'Hello $FIRST_NAME$'],
    ]).it('marks `%s` in `%s`', (mark, content) => {
        const Marker = createMarker([jsonPlaceholder]);
        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual(mark);
    });

    each([['$user$', 'Hello $user$'], ['Hello $USER'], ['Hello USER$']]).it(
        'does not mark anything in `%s`',
        content => {
            const Marker = createMarker([jsonPlaceholder]);
            const { container } = render(<Marker>{content}</Marker>);
            const marks = container.querySelectorAll('mark');
            expect(marks).toHaveLength(0);
        }
    );
});
