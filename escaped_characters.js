/**
 * Escaped characters
 * 1. \+ 
 * 2. \.
 * 3. \*
 * 4. \$
 * 5. \\
 */

// ví dụ 1:
const count = 1 + 1;
/\+/g; // matches: +

// ví dụ 2:
const name = 'dev.haxuan';
/\./g; // matches: .

// ví dụ 3:
const fullName = '***M';
/\*/g; // matches: ***

// ví dụ 4: 
const money = 'dolla $200';
/\$/g; // matches: $

//ví dụ 5:
const dem = 'ha\'xuan';
/\\/g; // matches: \