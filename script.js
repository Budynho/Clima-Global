const apiKey = 'API KEY'; // Chave API

// Função para pegar o clima
function getWeather() {
    const city = document.getElementById('city').value;
    if (!city) {
        alert('Digite o nome de uma cidade!');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert('Não conseguimos encontra a ciade');
            }
        })
        .catch(error => {
            console.error('Erro ao buscar os dados: ', error);
            alert('Ocorreu um erro ao tentar obter os dados!');
        });
}

// Função pra exibir o clima
function displayWeather(data) {
    document.getElementById('cityName').textContent = data.name + ', ' + data.sys.country;
    document.getElementById('temperature').textContent = `Temperatura: ${data.main.temp}°C`;
    document.getElementById('description').textContent = `Condição: ${data.weather[0].description}`;
    document.getElementById('humidity').textContent = `Umidade: ${data.main.humidity}%`;
    document.getElementById('wind').textContent = `Vento: ${data.wind.speed} m/s`;

    const icon = data.weather[0].icon;
    document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${icon}.png`;
}
