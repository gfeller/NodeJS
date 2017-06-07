module.exports = function(start, end, writer) {
    writer = writer || console.log;
    start = start || 0;
    end = end || 10;

    let count = start;
    function solution1b() {
        writer(count);
        count = count + 1;
        if (count > end) { return; }
        solution1b();
    }
    solution1b();
};