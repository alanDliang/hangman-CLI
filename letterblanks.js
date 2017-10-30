exports.letterblanks = letterblanks;

function letter(value) {
    this.value = value;
    this.show = false;
    if (this.value === " ")
    this.show = true;
}

letterblanks.prototype.printInfo = function () {
    if (this.show) {
        return this.value;
    }
    return "_ ";
}