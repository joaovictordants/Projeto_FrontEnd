  // codigo para o botão de rolagem suave
  document.querySelector('.scroll-button').addEventListener('click', function() {
  const targetId = this.getAttribute('data-target');
  const targetElement = document.getElementById(targetId);
  
  targetElement.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
    });
  });

  // codigo para o sumário com rolagem suave
  document.querySelectorAll('.sumario a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);            
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 20, // Ajuste para o espaço do cabeçalho
                behavior: 'smooth'
            });            
            // Atualiza a URL sem recarregar a página (opcional)
            history.pushState(null, null, targetId);
        }
    });
  });
 

    // codigo para o mapa interativo
    // Coordenadas do IFPB Campus João Pessoa
    var latitude = -7.1375;
    var longitude = -34.8769;
    
    // Criar o mapa centralizado nas coordenadas com zoom 16
    var map = L.map('map').setView([latitude, longitude], 17);
    
    // Adicionar camada do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19
    }).addTo(map);
    
    // Adicionar marcador com popup
    L.marker([latitude, longitude]).addTo(map)
      .bindPopup(`
        <b>IFPB Campus João Pessoa</b><br>
        Rua: Primeiro de Maio, 720 - Jaguaribe<br>
        João Pessoa - PB, 58015-435
      `)
      .openPopup();
    
    // Opcional: Adicionar círculo para destacar a área
    L.circle([latitude, longitude], {
      color: '#ff0000',
      fillColor: '##ff0000',
      fillOpacity: 0.2,
      radius: 100
    }).addTo(map);