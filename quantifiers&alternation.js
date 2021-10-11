/**
 * 1.   + : matches 1 hoặc nhiều mã trước đó.
 * 2.   * : matches 0 hoặc nhiều mã trước đó.
 * 3.   {m,n} : matches trong khoảng từ m-> n
 * 4.   {m} : matches chính xác m
 * 5.   {m,} : matches m hoặc nhiều hơn.
 * 6.   ? : tùy chọn
 * 7.   | : or
 */

 const name = 'b be bee beer beers';
//ví dụ 1:
/b\w+/g; // be  bee beer beers

// ví dụ 2:
/b\w*/g; // b be bee beer beers

//ví dụ 3:
/b\w{2,3}/g; // bee beer beer

//ví dụ 6:
const color = 'color colour';
/colou?r/g;// color colour

// ví dụ 7:
const color = 'bad bud bod bed bid';
/b(a|e|i)/g; // bad bed bid
