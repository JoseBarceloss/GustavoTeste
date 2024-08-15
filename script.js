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

    if (value.length > 10) {
        value = `${value.slice(0, 10)}-${value.slice(10)}`;
    }

    e.target.value = value;
});

document.getElementById('name').addEventListener('input', function (e) {
    const maxLength = 10;
    if (e.target.value.length > maxLength) {
        e.target.value = e.target.value.slice(0, maxLength);
    }
});

document.getElementById('instagram').addEventListener('input', function (e) {
    const maxLength = 15;
    if (e.target.value.length > maxLength) {
        e.target.value = e.target.value.slice(0, maxLength);
    }
});

document.getElementById('profiçao').addEventListener('input', function (e) {
    const maxLength = 30;
    if (e.target.value.length > maxLength) {
        e.target.value = e.target.value.slice(0, maxLength);
    }
});

document.getElementById('instagram').addEventListener('input', function (e) {
    let value = e.target.value;

    
    if (!value.startsWith('@')) {
        value = '@' + value.replace(/@/g, '');
    }

    e.target.value = value;
});

document.getElementById('continue-button').addEventListener('click', function () {
    this.classList.add('button-grow');

    setTimeout(() => {
        this.classList.remove('button-grow');
    }, 700);
});
