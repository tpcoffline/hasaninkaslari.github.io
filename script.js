let balance = 100.00;
let cards = [];

function updateBalance() {
    document.getElementById('balance').innerText = balance.toFixed(2);
}

function renderCards() {
    const cardsContainer = document.getElementById('cards');
    cardsContainer.innerHTML = '';
    cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `
            <img src="${card.img}" alt="${card.name}">
            <div class="name">${card.name}</div>
            <div class="price">${card.price.toFixed(2)} TL</div>
            <button onclick="toggleCart(${index})">
                ${card.inCart ? 'Sepetten Çıkar' : 'Sepete Ekle'}
            </button>
        `;
        cardsContainer.appendChild(cardElement);
    });
}

function checkAdminPassword() {
    const password = document.getElementById('adminPassword').value;
    if (password === 'hobala') {
        document.getElementById('adminPanel').classList.add('hidden');
        document.getElementById('cardManager').classList.remove('hidden');
        renderCardManager();
    } else {
        alert('Yanlış şifre!');
    }
}

function renderCardManager() {
    const existingCardsContainer = document.getElementById('existingCards');
    existingCardsContainer.innerHTML = '';
    cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.innerHTML = `
            <div>${card.name} - ${card.price.toFixed(2)} TL</div>
            <button onclick="deleteCard(${index})">Sil</button>
        `;
        existingCardsContainer.appendChild(cardElement);
    });
}

function deleteCard(index) {
    cards.splice(index, 1);
    renderCardManager();
    renderCards();
}

function addNewCard() {
    const name = prompt('Ürün Adı:');
    const price = parseFloat(prompt('Ürün Fiyatı:'));
    const img = prompt('Ürün Resmi URL:');
    cards.push({ name, price, img, inCart: false });
    renderCardManager();
    renderCards();
}

function closeCardManager() {
    document.getElementById('cardManager').classList.add('hidden');
}

document.getElementById('completePurchase').addEventListener('click', () => {
    document.getElementById('purchaseComplete').classList.remove('hidden');
});

document.getElementById('shareBtn').addEventListener('click', () => {
    alert('Paylaşma ekranı açılıyor...');
});

document.getElementById('adminBtn').addEventListener('click', () => {
    document.getElementById('adminPanel').classList.remove('hidden');
});

updateBalance();
renderCards();
