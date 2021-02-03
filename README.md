# strong-password-checker
[![NPM](https://img.shields.io/npm/v/strong-password-checker.svg)](https://github.com/d8corp/strong-password-checker/blob/master/CHANGELOG.md)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/strong-password-checker)](https://bundlephobia.com/result?p=strong-password-checker)
[![downloads](https://img.shields.io/npm/dm/strong-password-checker.svg)](https://www.npmjs.com/package/strong-password-checker)
[![license](https://img.shields.io/npm/l/strong-password-checker)](https://github.com/d8corp/strong-password-checker/blob/master/LICENSE)  
The Password Checker returns a count of steps to pass the validation.  
This is a solution for [the challenge](https://leetcode.com/problems/strong-password-checker/).
### Installation
npm
```bash
npm i strong-password-checker
```
yarn
```bash
yarn add strong-password-checker
```

Also, you can download a minified js file
[here](https://github.com/d8corp/strong-password-checker/blob/master/lib/strong-password-checker.min.js).  
*It adds only `strongPasswordChecker` to global scope.*  

### Using
This is a pure function, just provide a password and get the result.
```typescript
import strongPasswordChecker from 'strong-password-checker'

strongPasswordChecker('a') // 5
```
You may use optional arguments, they have default values
```typescript
function strongPasswordChecker (
  pass: string,
  minLength = 6,
  maxLength = 20,
  maxRepeat = 3,
  charConditions = [/[0-9]/, /[a-z]/, /[A-Z]/]
): number {}
```
### Issues
If you find a bug or have a suggestion, please file an issue on [GitHub](https://github.com/d8corp/innet/issues).  
[![issues](https://img.shields.io/github/issues-raw/d8corp/innet)](https://github.com/d8corp/innet/issues)  
> ---
[![stars](https://img.shields.io/github/stars/d8corp/innet?style=social)](https://github.com/d8corp/innet/stargazers)
[![watchers](https://img.shields.io/github/watchers/d8corp/innet?style=social)](https://github.com/d8corp/innet/watchers)
