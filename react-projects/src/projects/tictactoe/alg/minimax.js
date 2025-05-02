var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var states = {
    X: 1,
    O: -1,
    D: 0,
    C: 100
};
var wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function analyseBoard(pos) {
    for (var i = 0; i < wins.length; i++) {
        var e = wins[i];
        if (pos[e[0]]) {
            if (pos[e[0]] === pos[e[1]] && pos[e[1]] === pos[e[2]]) {
                return pos[e[0]] === "X" ? states.X : states.O;
            }
        }
    }
    return !pos.some(function (v) { return v === ""; }) ? states.D : states.C;
}
/*
 * TODO: WHAT SHOULD BE THE RETURN VALUE OF MINIMAX FUNCTION
 */
function minimax(pos, turn) {
    var analysis = analyseBoard(pos);
    if ((analysis <= 1)) {
        return [analysis, -1];
    }
    var empty = [];
    pos.forEach(function (v, i) {
        if (v === "")
            empty.push(i);
    });
    // console.log(analysis,empty,turn);
    if (turn === states.X) {
        var max = -Infinity;
        var maxPos = -1;
        for (var _i = 0, empty_1 = empty; _i < empty_1.length; _i++) {
            var e = empty_1[_i];
            var newPos = __spreadArray([], pos, true);
            newPos[e] = "X";
            // console.log(newPos);
            var r = minimax(newPos, states.O);
            if (r[0] > max) {
                max = r[0];
                maxPos = e;
            }
        }
        return [max, maxPos];
    }
    else {
        var min = Infinity;
        var minPos = -1;
        for (var _a = 0, empty_2 = empty; _a < empty_2.length; _a++) {
            var e = empty_2[_a];
            var newPos = __spreadArray([], pos, true);
            newPos[e] = "X";
            var r = minimax(newPos, states.X);
            if (r[0] < min) {
                min = r[0];
                minPos = e;
            }
        }
        return [min, minPos];
    }
}
var pos = [
    "X", "", "",
    "O", "X", "O",
    "X", "O", "O"
];
console.log(minimax(pos, states.O));
