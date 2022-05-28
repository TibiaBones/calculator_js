let presentValue = document.getElementById('calcDisplay');

function ins(n) {
    presentValue.value += n;
};

function del() {
    presentValue.value = "";
};

function result() {
    presentValue.value = eval(presentValue.value);
};