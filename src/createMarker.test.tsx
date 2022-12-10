import { render, screen } from '@testing-library/react';

import createMarker from './index';

describe('createMarker', () => {
    it('returns a correct component', () => {
        const content = 'A horse, a horse, my kingdom for a horse.';
        const parsers = [
            { rule: 'horse', tag: (x: string) => <i>{x}</i> },
            { rule: /(a)/gi, tag: (x: string) => <b>{x}</b> },
            { rule: /king\w+/, tag: (x: string) => <u>{x}</u> },
        ];
        const ContentMarker = createMarker(parsers);

        render(<ContentMarker>{content}</ContentMarker>);
        expect(screen.getAllByText('horse')).toMatchObject([
            { tagName: 'I' },
            { tagName: 'I' },
            { tagName: 'I' },
        ]);
        expect(screen.getAllByText(/^[aA]$/)).toMatchObject([
            { tagName: 'B' },
            { tagName: 'B' },
            { tagName: 'B' },
        ]);
        expect(screen.getAllByText('kingdom')).toHaveLength(1);
    });
});
