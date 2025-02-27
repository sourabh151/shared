var MaritalStatus;
(function (MaritalStatus) {
    MaritalStatus[MaritalStatus["Single"] = 0] = "Single";
    MaritalStatus[MaritalStatus["Married"] = 1] = "Married";
    MaritalStatus[MaritalStatus["Separated"] = 2] = "Separated";
    MaritalStatus[MaritalStatus["Divorced"] = 3] = "Divorced";
})(MaritalStatus || (MaritalStatus = {}));
;
var employee = [
    'Bob Jones',
    MaritalStatus.Married,
    39
];
console.log(employee);
