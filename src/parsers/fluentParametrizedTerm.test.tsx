import { render } from '@testing-library/react';
import each from 'jest-each';
import { createMarker } from '../createMarker';

import { fluentParametrizedTerm } from './fluentParametrizedTerm';

describe('fluentParametrizedTerm', () => {
    each([
        ['{-brand(case: "test")}', 'Hello {-brand(case: "test")}'],
        [
            '{ -brand(case: "what ever") }',
            'Hello { -brand(case: "what ever") }',
        ],
        [
            '{ -brand-name(foo-bar: "now that\'s a value!") }',
            'Hello { -brand-name(foo-bar: "now that\'s a value!") }',
        ],
    ]).it('marks `%s` in `%s`', (mark, content) => {
        const Marker = createMarker([fluentParametrizedTerm]);
        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(1);
        expect(marks[0].textContent).toEqual(mark);
    });

    each([
        [
            '{-brand(case: "test")}',
            '{-vendor(case: "right")}',
            'Hello {-brand(case: "test")} and {-vendor(case: "right")}',
        ],
    ]).it('marks `%s` and `%s` in `%s`', (mark1, mark2, content) => {
        const Marker = createMarker([fluentParametrizedTerm]);
        const { container } = render(<Marker>{content}</Marker>);
        const marks = container.querySelectorAll('mark');
        expect(marks).toHaveLength(2);
        expect(marks[0].textContent).toEqual(mark1);
        expect(marks[1].textContent).toEqual(mark2);
    });
});
