var stdin = process.stdin,
    stdout = process.stdout,
    input = '',
    run;

stdin.setEncoding('utf8');
stdin.resume();

process.stdin.on('data', function (chunk) {
    input += chunk;
});

process.stdin.on('end', function () {
    stdout.write(run(input) + '\n');
});

run = function (input) {
    var lines = input.split('\n'),
        n = lines[0];

    lines.forEach(function (number, index) {
        if (index === 0) {
            return;
        }
    });
};