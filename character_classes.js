/**
 * Character classes
 * 1.   . bất kỳ ký tự nào ngoại trừ dòng mới (newline)
 * 
 * 2.   \w: == [a-zA-Z0-9_] bao gồm tất cả các ký tự là số và chữ và '_'
 *      \d: == [0-9] bao gồm tất cả các ký tự là số
 *      \s: bao gồm tất cả các ký tự là whitespace.
 * 
 * 3.   \W: not của \w 
 *      \D: not của \d
 *      \S: not của \s
 *  
 * 4.   [abc] bất kỳ a, b, or c 
 * 5.   [^abc] not a, b, or c
 * 
 * 6.   [a-g] ký tự từ a - g
 */

 const name = 'Ha Van Xuan 25';
//ví dụ 1:
/./g; // matches: bao gồm tất cả ký tự cả khoảng trắng

//ví dụ 2.1:
/\w/g;// matches: Ha Van Xuan // bao gồm tất cả ký tự là chữ và số

//ví dụ 2.2:
/\d/g; //matches: 25 // bao gồm tất cả ký tự là số

//ví dụ 2.3:
/\s/g; //matches: các khoảng trắng // bao gồm tất các khoảng trắng

//ví dụ 3.1:
/\W/g; // matches: bao gồm các khoảng trắng trong chuỗi

//ví dụ 3.2:
/\D/g; //matches: bao gồm các ký tự chuỗi và khoảng trắng

//ví dụ 3.3:
/\S/g; //matches: bao gồm các ký tự chuỗi và số

//ví dụ 4:
/[an]/g; // matches: a an an

//ví dụ 5:
/[^an]/g; // matches: H V Xu 25 cả khoảng trắng

//ví dụ 6:
/[a-z]/g; // matches: a an uan // bao gồm các ký tự trong khoản từ a-z 
