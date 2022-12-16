export { createMarker as default } from './createMarker';
export { getRules } from './getRules';
export { mark } from './mark';

export type TagFunction = (input: string) => React.ReactElement<any>;

export type Parser = {
    rule: string | RegExp;
    tag: TagFunction;
    matchIndex?: number;
};
