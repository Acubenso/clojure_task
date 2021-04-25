class Freq {
    constructor(props = {
        number: 1,
        string: ''
    }) {
        this.props = props;
        this.number = this.props.number;
        this.string = this.props.string;

        this.init();
    }

    init() {
        let obj = {},
            newStr = '',
            result = {},
            splitStr = this.string.toLowerCase().split('');

        splitStr.forEach((el, index) => {
            if (!obj[this.string.indexOf(el)]) {
                obj[this.string.indexOf(el)] = { string: el, repeat: 1, position: this.string.indexOf(el) };
                newStr += el;
            } else {
                obj[this.string.indexOf(el)].repeat++;
            }
        });

        Array.from(newStr.split('')).map((el, index) => {
            if (newStr.substr(index, this.number).split('').length >= this.number) {
                obj[this.string.indexOf(el)].string = newStr.substr(index, this.number);
            } else {
                delete obj[this.string.indexOf(el)];
            }
        })

        console.table(obj);
    }
}

new Freq({ number: 1, string: 'qwertyqwert' });
new Freq({ number: 2, string: 'abrakadabra' });
new Freq({ number: 3, string: 'hello' });