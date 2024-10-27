function showPanel(nick) {
  // Скрываем обе панели
  document.querySelectorAll('.panel').forEach(panel => {
    panel.classList.remove('active');
  });

  // Плавно показываем выбранную панель
  setTimeout(() => {
    document.getElementById(`panel-${nick}`).classList.add('active');
  }, 50); // Небольшая задержка для плавного эффекта
}

function showPrice(service, price) {
  document.getElementById('price-display').textContent = `Цена ${service}: ${price}`;
}