document.getElementById('purchase-form').addEventListener('submit', function(event) {
    const phoneNumber = document.getElementById('phone-number').value;
    const phoneRegex = /^(07|06|05)\d{8}$/;

    if (!phoneRegex.test(phoneNumber)) {
        alert('الرجاء إدخال رقم هاتف صحيح يحتوي على 10 أرقام ويبدأ ب 07 أو 06 أو 05.');
        event.preventDefault();
    }
});

document.getElementById('decrease').addEventListener('click', function() {
    let quantity = parseInt(document.getElementById('quantity').value);
    if (quantity > 1) {
        document.getElementById('quantity').value = quantity - 1;
    }
});

document.getElementById('increase').addEventListener('click', function() {
    let quantity = parseInt(document.getElementById('quantity').value);
    document.getElementById('quantity').value = quantity + 1;
});







let counters = [0, 0, 0, 0, 0, 0];  // To keep track of the counts

function toggleSelection(id) {
    const container = document.getElementById(id);
    const counterId = `counter${id.replace('image', '')}`;
    const counterElement = document.getElementById(counterId);

    if (container.classList.contains('selected')) {
        container.classList.remove('selected');  // Remove selection
        counters[parseInt(id.replace('image', '')) - 1]--;
    } else {
        container.classList.add('selected');  // Add selection
        counters[parseInt(id.replace('image', '')) - 1]++;
    }

    counterElement.textContent = counters[parseInt(id.replace('image', '')) - 1];
}





