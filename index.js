// ví dụ 1
const phoneNumber = '123-123-123';

//C1: cách này không nên sử dụng
function removeH(str) {
    while (str.indexOf('-') !== -1) {
        return str.replace('-', '');
    }
}

// C2: sử dụng Regular expression (Nên sử dụng cách này)
function removeHyphens(str) {
    return  str.replace(/-/g, ''); // tham số 1 có thể là 1 string | regular expression, tham số 2 là chuỗi thay thế => return string.
}

removeHyphens(phoneNumber); // 123123123

//ví dụ 2:
const phoneNumbers = [
    '0869.000.888',
    '0969-000-111',
    '0357 888 333'
];
function sanitize(phoneNums) {
    return phoneNums.map(str => str.replace(/[- .]/g, ''));
}
sanitize(phoneNumbers); // [0869000888, 09690011, 0357888333];

//test method: 
// return boolean
const phoneNumberRegex = /^[0-9]{9}$/;
phoneNumberRegex.test('0869093135'); // return true
