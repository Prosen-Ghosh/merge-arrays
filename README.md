# merge-arrays
A JavaScript Package For Merging multiple arrays.

![npm](https://img.shields.io/npm/v/merge-arrays.svg) ![license](https://img.shields.io/npm/l/merge-arrays.svg) ![github-issues](https://img.shields.io/github/issues/Prosen-Ghosh/merge-arrays.svg) 

![nodei.co](https://nodei.co/npm/merge-arrays.png?downloads=true&downloadRank=true&stars=true)

![travis-status](https://img.shields.io/travis/Prosen-Ghosh/merge-arrays.svg)
![stars](https://img.shields.io/github/stars/Prosen-Ghosh/merge-arrays.svg)
![forks](https://img.shields.io/github/forks/Prosen-Ghosh/merge-arrays.svg)

## Features


## `npm` Install

`npm install --save merge-arrays`


## Script Tag

#### For Development
```js
<script src="https://rawgit.com/Prosen-Ghosh/merge-arrays/master/merge.js"></script>
```

#### For Production
```js
<script src="https://cdn.rawgit.com/Prosen-Ghosh/merge-arrays/20ab5a80/merge.js"></script>
```

## Usage

```js

const merge = require('merge-arrays');

merge([],[]);
//=> []

merge([1,2],[3,4]);
//=> [ 1, 2, 3, 4 ]

merge([1],[2],[3,4],[5],[6,7,8],[9],[10,11]);
//=> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]

merge(["foo","bar"],["baz","bob"]);
//=> [ 'foo', 'bar', 'baz', 'bob' ]

merge([]);
//=> Error: expect at least 2 argument

merge([],{});
//=> TypeError: expets array got object

```

## Author

Prosen Ghosh <prosenghosh25@gmail.com> (https://bd.linkedin.com/in/prosen-ghosh-baba9aa8)

## License

 - **MIT**
