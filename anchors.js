/**
 * Anchors
 * 1. ^ :bắt đầu
 * 2. $ : end
 * 3. ^abc$ :bắt đầu và kết thúc của 1 chuỗi
 * 4. \b : khớp vị trí ranh giới từ giữa ký tự và ký tự không phải từ hoặc vị  trí (start/end của chuỗi)
 * 5. \B : khớp với bất kỳ vị trí nào không phải là ranh giới từ. Điều này khớp với 1 vị trí, không phải 1 ký tự
 */

 const begin = 'she sells seashells';
//ví dụ 1:
/^\w/g; // matches: s (từ s là của she)
/^\w+/g;  // matches: she

//ví dụ 2:
/\w+$/g; // matches: seashells

//ví dụ 3:
/s\b/g; // matches: s s (s1 là của sells của cuối từ, s2 là của seashells của cuối từ)

//ví dụ 4:
/s\B/g; // matches: s s s s (s1 từ she, s2 là đầu của sells, s3 ở đầu của seashells và s4 là giữa của seashells)