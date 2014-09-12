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
    process.exit();
});

run = function (input) {
    var lines = input.split('\n'),
        line0 = lines[0].split(' '),
        n = parseInt(line0[0], 10),
        k = parseInt(line0[1], 10),
        index,
        i = 0,
        number;

    for (index = 1; index < n + 1; index++) {
        number = parseInt(lines[index], 10);

        if (parseInt(number, 10) % k === 0) {
            i++;
        }
    }
    return i;
};