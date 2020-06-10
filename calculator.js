new Vue({
    el: '#calculator',
    data() {
            return {
                previous: null,
                current: '',
                operator: null,
                operatorclicked:false,
            }
    },
    methods: {
        clear(){
                this.current = '0';
        },
        sign() {
            this.current = this.current.charAt(0) === '-'?
             this.current.slice(1): `-${this.current}`;
        },
        percent(){
            this.current = `${parseFloat(this.current)/100}`
        },
        append(number) {
            if(this.operatorclicked){
                this.current = '';
                this.operatorclicked = false;
            }
            this.current = `${this.current}${number}`;
        },
        dot() {
            if(this.current.indexOf('.') === -1) {
                this.append('.');
            }
        },
        multiply() {
            this.operator = (a,b) => a * b;
            this.previous = this.current;
            this.operatorclicked = true;
        },
        minus() {
            this.operator = (b,a) => a - b;
            this.previous = this.current;
            this.operatorclicked = true;
        },
        divide() {
            this.operator = (b,a) => a / b;
            this.previous = this.current;
            this.operatorclicked = true;
        },
        add() {
            this.operator = (a,b) => a + b;
            this.previous = this.current;
            this.operatorclicked = true;
        },
        equal() {
            this.current = `${this.operator(parseFloat(this.current),
                parseFloat(this.previous))}`;
                this.previous = null;
        },
    }
})