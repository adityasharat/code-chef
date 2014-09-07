process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
    var data = chunk.toString().split(' '),
        toWithdraw = parseInt(data[0], 10),
        balance = parseFloat(data[1], 10);

    if (toWithdraw % 5 === 0 && 0.5 <= balance - toWithdraw) {
        process.stdout.write((balance - toWithdraw - 0.5).toFixed(2));
    } else {
        process.stdout.write(balance.toFixed(2));
    }
    process.exit();
});
