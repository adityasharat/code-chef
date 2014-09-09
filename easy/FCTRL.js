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
    stdout.write(run(input));
});

run = function (input) {
    var lines = input.split('\n'),
        n = parseInt(lines[0], 10),
        index,
        output = '';

    var sum = 0,
        zeros = 0,
        power = 1,
        number;

    for (index = 1; index < n + 1; index++) {
        number = lines[index];
        sum = 0;
        zeros = 0;
        power = 1;

        while (zeros = Math.floor(parseInt(number, 10) / Math.pow(5, power))) {
            sum += zeros;
            power++;
        }

        output += sum + '\n';
    }
    return output;
};