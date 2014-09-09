process.stdin.resume();
process.stdin.setEncoding('utf8');
var i = 0;
process.stdin.on('data', function (chunk) {
    var lines = chunk.toString().split('\n'),
        input = lines[0].split(' '),
        n = parseInt(input[0], 10),
        k = parseInt(input[1], 10);

    lines.forEach(function (num, index) {
        if (index === 0) {
            return;
        }
        if (parseInt(num, 10) % k === 0) {
            i++;
        }
    });
    process.stdout.write(i + "\n");
    process.exit();
});

process.stdin.on('end', function () {
    process.stdout.write(i + "\n");
    process.exit();
})