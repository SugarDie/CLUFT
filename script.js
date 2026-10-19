document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-btn');
    
    // 1. Проверяем, какую тему пользователь выбирал ранее (хранится в памяти браузера)
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // 2. Вешаем событие клика на кнопку переключения темы
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            // Получаем текущую активную тему
            const currentTheme = document.documentElement.getAttribute('data-theme');
            
            // Меняем тему на противоположную
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            // Применяем тему к сайту и сохраняем в память компьютера
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
});
