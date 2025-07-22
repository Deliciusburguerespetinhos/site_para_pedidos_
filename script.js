let cart = {};

// Cole aqui os itemPrices e itemNames que eu te mandei anteriormente 👇
const itemPrices = {
  // Hamburgueres Tradicionais
  'burger-classico': 8.00,
  'burger-bacon': 12.00,
  'burger-deluxe': 12.00,
  'burger-duplo': 18.00,

  // Adicionais
  'Hanburguer': 2.00,
  'Bacon-adc': 2.00,
  'Frango-adc': 2.00,
  'Calabresa-adc': 2.00,
  'Coracao-adc': 4.00,
  'Batata': 4.00,

  // Linha Gold
  "Deliciu´s-burguer": 18.00,
  "Deliciu´s-Salada": 20.00,
  "Deliciu´s-Pepperoni": 30.00,
  "Deliciu´s-Pig": 24.00,
  "Deliciu´s-Bacon": 26.00,
  "Deliciu´s-Picanha": 28.00,
  "Deliciu´s-Mignon": 28.00,
  "Deliciu´s-Coracao": 26.00,
  "Deliciu´s-Super": 35.00,

  // Lomitos
  'lomito-carne': 20.00,
  'lomito-Frango': 20.00,
  'lomito-Misto': 24.00,
  'churras-grego': 20.00,

  // Cachorro Quente
  'Dog-simples': 10.00,
  'Dog-Duplo': 12.00,
  "Dog-deliciu´s": 16.00,

  // Veggie
  "Deliciu´s-veggie": 14.00,
  'Lomito-veggie': 16.00,

  // Porções
  'batata-por': 20.00,
  'mandioca-por': 20.00,
  'polenta-por': 20.00,
  'frango-por': 30.00,
  'tilapia-por': 40.00,
  'picanha-por': 50.00,
  'calabresa-por': 25.00,

  // Trios
  'frango-trio': 60.00,
  'calabresa-trio': 65.00,
  'Tilapia-trio': 65.00,
  'picanha-trio': 90.00,

  // Espetinhos
  'espeto-carne': 8.00,
  'espeto-linguica': 8.00,
  'espeto-frango': 8.00,
  'espeto-coracaozinho': 8.00,

  // Bebidas
  'refrigerante': 5.00,
  'Fanta-uva': 5.00,
  'Fanta-laranja': 5.00,
  'GUARANA-LATA': 5.00,
  'coca-zero': 5.00,
  'coca-1l': 8.00,
  'coca-1l-zero': 8.00,
  'coca-2L': 12.00,
  'coca-2L-Zero': 12.00,
  'guarana-2L': 12.00,
  'Fanta-laranja-2L': 11.00,
  'guarana-2L-Zero': 11.00,
  'Sprite-2L': 11.00,
  'Heineken': 6.00,
  'Budweiser': 6.00,
  'Amistel': 4.00,
  'Original': 5.00,
  'Suco': 15.00,
  'agua': 3.50,
  'agua-gas': 3.50
};

const itemNames = {
  'burger-classico': 'X-Burguer',
  'burger-bacon': 'X-Salada / X-Bacon',
  'burger-deluxe': 'X-Frango / X-Calabresa / X-Egg / X-Coração',
  'burger-duplo': 'X-Tudo',

  'Hanburguer': 'Adicional Hamburguer',
  'Bacon-adc': 'Adicional Bacon',
  'Frango-adc': 'Adicional Frango',
  'Calabresa-adc': 'Adicional Calabresa',
  'Coracao-adc': 'Adicional Coração',
  'Batata': 'Adicional Batata',

  "Deliciu´s-burguer": "Deliciu's Burguer",
  "Deliciu´s-Salada": "Deliciu's Salada",
  "Deliciu´s-Pepperoni": "Deliciu's Pepperoni",
  "Deliciu´s-Pig": "Deliciu's Pig",
  "Deliciu´s-Bacon": "Deliciu's Bacon",
  "Deliciu´s-Picanha": "Deliciu's Picanha",
  "Deliciu´s-Mignon": "Deliciu's Mignon",
  "Deliciu´s-Coracao": "Deliciu's Coração",
  "Deliciu´s-Super": "Deliciu's Super",

  'lomito-carne': 'Lomito Carne',
  'lomito-Frango': 'Lomito Frango',
  'lomito-Misto': 'Lomito Misto',
  'churras-grego': 'Churrasco Grego',

  'Dog-simples': 'Dog Simples',
  'Dog-Duplo': 'Dog Duplo',
  "Dog-deliciu´s": 'Dog Deliciu\'s',

  "Deliciu´s-veggie": "Deliciu's Veggie",
  'Lomito-veggie': 'Lomito Veggie',

  'batata-por': 'Batata (500g)',
  'mandioca-por': 'Mandioca (500g)',
  'polenta-por': 'Polenta (500g)',
  'frango-por': 'Frango a Passarinho (1kg)',
  'tilapia-por': 'Filé de Tilápia (500g)',
  'picanha-por': 'Picanha (500g)',
  'calabresa-por': 'Trio Calabresa (500g)',

  'frango-trio': 'Trio Frango',
  'calabresa-trio': 'Trio Calabresa',
  'Tilapia-trio': 'Trio Tilápia',
  'picanha-trio': 'Trio Picanha',

  'espeto-carne': 'Espeto de Carne',
  'espeto-linguica': 'Espeto Variado',
  'espeto-frango': 'Espeto de Frango',
  'espeto-coracaozinho': 'Espeto de Coraçãozinho',

  'refrigerante': 'Coca-Cola Lata',
  'Fanta-uva': 'Fanta Uva Lata',
  'Fanta-laranja': 'Fanta Laranja Lata',
  'GUARANA-LATA': 'Guaraná Lata',
  'coca-zero': 'Coca-Cola Zero Lata',
  'coca-1l': 'Coca-Cola 1L',
  'coca-1l-zero': 'Coca-Cola Zero 1L',
  'coca-2L': 'Coca-Cola 2L',
  'coca-2L-Zero': 'Coca-Cola Zero 2L',
  'guarana-2L': 'Guaraná 2L',
  'Fanta-laranja-2L': 'Fanta Laranja 2L',
  'guarana-2L-Zero': 'Guaraná Zero 2L',
  'Sprite-2L': 'Sprite 2L',
  'Heineken': 'Heineken (350ml)',
  'Budweiser': 'Budweiser (350ml)',
  'Amistel': 'Amistel (350ml)',
  'Original': 'Original (350ml)',
  'Suco': 'Suco Prast (900ml)',
  'agua': 'Água Mineral',
  'agua-gas': 'Água com Gás'
};


function changeQuantity(itemId, change) {
  if (!cart[itemId]) cart[itemId] = 0;
  cart[itemId] += change;
  if (cart[itemId] < 0) cart[itemId] = 0;
  if (cart[itemId] === 0) delete cart[itemId];
  updateDisplay();
}

function updateDisplay() {
  Object.keys(itemPrices).forEach(itemId => {
    const qtyEl = document.getElementById(`qty-${itemId}`);
    if (qtyEl) qtyEl.textContent = cart[itemId] || 0;
  });
  updateOrderSummary();
  updateSubmitButton();
}

function updateOrderSummary() {
  const summaryItems = document.getElementById('summaryItems');
  const emptyCart = document.getElementById('emptyCart');
  const totalAmount = document.getElementById('totalAmount');
  const totalValue = document.getElementById('totalValue');

  summaryItems.innerHTML = '';
  let total = 0;
  let hasItems = false;

  Object.keys(cart).forEach(itemId => {
    if (cart[itemId] > 0) {
      hasItems = true;
      const itemTotal = cart[itemId] * itemPrices[itemId];
      total += itemTotal;
      const div = document.createElement('div');
      div.className = 'summary-item';
      div.innerHTML = `<span>${cart[itemId]}x ${itemNames[itemId]}</span><span>R$ ${itemTotal.toFixed(2).replace('.', ',')}</span>`;
      summaryItems.appendChild(div);
    }
  });

  emptyCart.style.display = hasItems ? 'none' : 'block';
  totalAmount.style.display = hasItems ? 'block' : 'none';
  totalValue.textContent = total.toFixed(2).replace('.', ',');
}

function updateSubmitButton() {
  const submitBtn = document.getElementById('submitBtn');
  const hasItems = Object.keys(cart).some(id => cart[id] > 0);
  submitBtn.disabled = !hasItems;
}

document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
  radio.addEventListener('change', function () {
    const changeGroup = document.getElementById('changeGroup');
    if (this.value === 'dinheiro') {
      changeGroup.style.display = 'block';
    } else {
      changeGroup.style.display = 'none';
      document.getElementById('changeAmount').value = '';
    }
  });
});

document.getElementById('customerPhone').addEventListener('input', function (e) {
  let value = e.target.value.replace(/\D/g, '');
  value = value.replace(/^(\d{2})(\d)/, '($1) $2');
  value = value.replace(/(\d{5})(\d)/, '$1-$2');
  e.target.value = value;
});

document.getElementById('orderForm').addEventListener('submit', function (e) {
  e.preventDefault();

  if (!Object.keys(cart).some(id => cart[id] > 0)) {
    alert('Adicione pelo menos um item!');
    return;
  }

  const data = new FormData(this);
  const customerName = data.get('customerName');
  const customerPhone = data.get('customerPhone');
  const street = data.get('street');
  const number = data.get('number');
  const neighborhood = data.get('neighborhood');
  const cep = data.get('cep');
  const city = data.get('city'); // Certifique-se que esse campo está no HTML

  const address = `${street}, Nº ${number}, ${neighborhood}, ${city} - CEP: ${cep}`;
  const paymentMethod = data.get('paymentMethod');
  const changeAmount = data.get('changeAmount');
  const observations = data.get('observations');

  let summary = `🍔 *NOVO PEDIDO - DELICIU'S BURGER & ESPETINHOS*\n\n`;
  summary += `👤 *Cliente:* ${customerName}\n📱 *Telefone:* ${customerPhone}\n📍 *Endereço:* ${address}\n\n🛒 *ITENS:*\n`;

  let total = 0;
  Object.keys(cart).forEach(id => {
    const q = cart[id];
    const t = q * itemPrices[id];
    total += t;
    summary += `• ${q}x ${itemNames[id]} - R$ ${t.toFixed(2).replace('.', ',')}\n`;
  });

  summary += `\n💰 *TOTAL:* R$ ${total.toFixed(2).replace('.', ',')}\n`;
  summary += `💳 *Pagamento:* ${paymentMethod}`;
  if (paymentMethod === 'dinheiro' && changeAmount) {
    summary += ` (Troco para R$ ${parseFloat(changeAmount).toFixed(2).replace('.', ',')})`;
  }
  summary += '\n';
  if (observations) summary += `\n📝 *Obs:* ${observations}\n`;
  summary += `⏰ *Horário:* ${new Date().toLocaleString('pt-BR')}`;

  const whatsapp = '5545999432205';
  const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(summary)}`;
  window.open(url, '_blank');

  setTimeout(() => {
    if (confirm('Pedido enviado! Deseja limpar o carrinho?')) {
      cart = {};
      updateDisplay();
      document.getElementById('orderForm').reset();
    }
  }, 1000);
});

updateDisplay();
