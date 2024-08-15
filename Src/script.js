document.querySelector('.phone').addEventListener('input', function (e) {
    let value = e.target.value;

    value = value.replace(/\D/g, '');

    if (value.length > 11) {
        value = value.slice(0, 11);
    }
    if (value.length > 2) {
        value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
        value = `(${value}`;
    }

    e.target.value = value;
});

document.getElementById('firstname').addEventListener('input', function (e) {
    const maxLength = 10;
    if (e.target.value.length > maxLength) {
        e.target.value = e.target.value.slice(0, maxLength);
    }
});

document.getElementById('lastname').addEventListener('input', function (e) {
    const maxLength = 10;
    if (e.target.value.length > maxLength) {
        e.target.value = e.target.value.slice(0, maxLength);
    }
});

document.getElementById('email').addEventListener('input', function (e) {
    const maxLength = 30;
    if (e.target.value.length > maxLength) {
        e.target.value = e.target.value.slice(0, maxLength);
    }
});
