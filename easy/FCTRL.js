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

run = function () {

};