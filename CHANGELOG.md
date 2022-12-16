# Changelog

## 2.2.0 (December 16, 2022)

- Add library of built-in parser rules and `getRules()` as an accessor for them
- Add `wrapTag` argument to `createMarker()`
- Build a functional rather than class component from `createMarker()`
- Update dev dependencies & migrate tests from `enzyme` to `@testing-library/react`

## 2.1.0 (February 21, 2022)

- Use `tsc` rather than `babel` for the build
- Replace dependency on `shortid` with a simple counter instead
- Mark peerDependency on `react` more liberally
- Use `ts-jest` & add tests for built code
- Add CI tests with GitHub Actions
- Update dev dependencies

## 2.0.0 (April 25, 2021)

- Convert to TypeScript (#7)[https://github.com/mozilla/react-content-marker/issues/7].
- Publish `.d.ts` type definitions as part of the package.

## 1.1.3 (July 17, 2020)

- Bumps lodash from 4.17.15 to 4.17.19 (#4)[https://github.com/mozilla/react-content-marker/pull/6].

## 1.1.2 (March 31, 2020)

- Upgrade dependencies.

## 1.1.1 (November 4, 2019)

- Update vulnerable dependencies.
- Bumps lodash from 4.17.11 to 4.17.15 (#4)[https://github.com/mozilla/react-content-marker/pull/4].

## 1.1.0 (July 17, 2019)

- Expose `mark` function publicly (#2)[https://github.com/mozilla/react-content-marker/issues/2].

## 1.0.2 (June 28, 2019)

- Do not mark content out of matching context (#1)[https://github.com/mozilla/react-content-marker/issues/1].

## 1.0.1 (May 8, 2019)

- Minor README change for npm.

## 1.0.0 (May 8, 2019)

- Initial public release.
