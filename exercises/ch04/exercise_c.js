// Considering the following function:
//
//   const keepHighest = (x, y) => (x >= y ? x : y);
//
// Refactor `max` to not reference any arguments using the helper function `keepHighest`.

// max :: [Number] -> Number
// const max = xs => reduce((acc, x) => (x >= acc ? x : acc), -Infinity, xs);

// 1. Substitute the inline condition with `keepHighest`
// const max = reduce((acc, x) => keepHighest(x, acc), -Infinity, xs);

// `reduce` in the Appendix C is point-free.
// reduce :: (b -> a -> b) -> b -> [a] -> b
// const reduce = curry((fn, zero, xs) => xs.reduce(fn, zero));

// 2. reduce is partially applied, so we can remove the `xs`
// const max = reduce((acc, x) => keepHighest(x, acc), -Infinity);

// 3. (acc, x) => keepHighest(x, acc) can be refactored!
// Remove the useless wrapping Fn and pass keepHighest directly.
const max = reduce(keepHighest, -Infinity);
