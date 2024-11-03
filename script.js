function showText() {
    var select = document.getElementById("info-select");
    var value = select.value;

    var texts = document.getElementsByClassName("hidden-text");
    for (var i = 0; i < texts.length; i++) {
        texts[i].style.display = "none";
    }

    if (value) {
        var text = document.getElementById(value);
        text.style.display = "block";
    }
}

function toggleTable() {
    var table = document.getElementById("comparisonTable");
    if (table.style.display === "none" || table.style.display === "") {
        table.style.display = "block";
        table.style.animation = "slideDown 0.3s forwards";
    } else {
        table.style.display = "none";
        table.style.animation = "slideUp 0.3s forwards";
    }
}

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Open modal on page load
window.onload = function() {
    openModal();
}

var style = document.createElement('style');
style.innerHTML = `
@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideUp {
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(-10px);
    }
}
`;
document.head.appendChild(style);
