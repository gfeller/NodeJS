export function number(start, end, writer = console.log) {
    end = end || 10;
    let count = start || 0;

    function solution1b() {
        writer(count);
        count = count + 1;
        if (count > end) {
            return;
        }
        solution1b();
    }

    solution1b();
}