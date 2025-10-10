export interface Answer {
  text: string
  points: number
}

export interface Question {
  question: string
  answers: Answer[]
}

export const questions: Question[] = [
  {
    question: "¿Qué dispositivos usamos para trabajar con una computadora?",
    answers: [
      { text: "Mouse / Ratón", points: 40 },
      { text: "Teclado", points: 35 },
      { text: "Monitor / Pantalla", points: 15 },
      { text: "Impresora", points: 10 },
    ],
  },
  {
    question: "¿Qué programas usamos para navegar en Internet?",
    answers: [
      { text: "Google Chrome", points: 45 },
      { text: "Firefox", points: 25 },
      { text: "Microsoft Edge", points: 20 },
      { text: "Safari", points: 10 },
    ],
  },
  {
    question: "¿Qué partes tiene una computadora por dentro?",
    answers: [
      { text: "Procesador / CPU", points: 35 },
      { text: "Memoria RAM", points: 30 },
      { text: "Disco Duro", points: 25 },
      { text: "Tarjeta Madre", points: 10 },
    ],
  },
  {
    question: "¿Qué redes sociales son más populares?",
    answers: [
      { text: "TikTok", points: 40 },
      { text: "Instagram", points: 30 },
      { text: "Facebook", points: 20 },
      { text: "YouTube", points: 10 },
    ],
  },
  {
    question: "¿Qué sistemas operativos conoces?",
    answers: [
      { text: "Windows", points: 45 },
      { text: "Android", points: 30 },
      { text: "iOS / Mac", points: 15 },
      { text: "Linux", points: 10 },
    ],
  },
  {
    question: "¿Qué aplicaciones usas para hacer tareas escolares?",
    answers: [
      { text: "Word / Documentos", points: 40 },
      { text: "PowerPoint / Presentaciones", points: 30 },
      { text: "Excel / Hojas de cálculo", points: 20 },
      { text: "Google Classroom", points: 10 },
    ],
  },
  {
    question: "¿Qué tipos de archivos conoces?",
    answers: [
      { text: "PDF", points: 35 },
      { text: "JPG / Imágenes", points: 30 },
      { text: "MP4 / Videos", points: 25 },
      { text: "MP3 / Música", points: 10 },
    ],
  },
  {
    question: "¿Qué haces para proteger tu información en Internet?",
    answers: [
      { text: "Usar contraseñas seguras", points: 40 },
      { text: "No compartir datos personales", points: 35 },
      { text: "Usar antivirus", points: 15 },
      { text: "Cerrar sesión", points: 10 },
    ],
  },
  {
    question: "¿Qué plataformas usas para ver videos?",
    answers: [
      { text: "YouTube", points: 50 },
      { text: "TikTok", points: 30 },
      { text: "Netflix", points: 15 },
      { text: "Twitch", points: 5 },
    ],
  },
  {
    question: "¿Qué teclas especiales del teclado conoces?",
    answers: [
      { text: "Enter", points: 35 },
      { text: "Espacio", points: 30 },
      { text: "Borrar / Delete", points: 25 },
      { text: "Shift / Mayúsculas", points: 10 },
    ],
  },
  {
    question: "¿Qué servicios de correo electrónico conoces?",
    answers: [
      { text: "Gmail", points: 50 },
      { text: "Outlook / Hotmail", points: 30 },
      { text: "Yahoo", points: 15 },
      { text: "iCloud", points: 5 },
    ],
  },
  {
    question: "¿Qué puedes hacer con una computadora?",
    answers: [
      { text: "Hacer tareas", points: 35 },
      { text: "Jugar videojuegos", points: 30 },
      { text: "Ver videos", points: 25 },
      { text: "Chatear con amigos", points: 10 },
    ],
  },
  {
    question: "¿Qué programas usas para comunicarte?",
    answers: [
      { text: "WhatsApp", points: 45 },
      { text: "Zoom", points: 25 },
      { text: "Discord", points: 20 },
      { text: "Skype", points: 10 },
    ],
  },
  {
    question: "¿Qué significa WWW en una dirección web?",
    answers: [
      { text: "World Wide Web", points: 60 },
      { text: "Red Mundial", points: 25 },
      { text: "Internet", points: 10 },
      { text: "No sé", points: 5 },
    ],
  },
  {
    question: "¿Qué dispositivos móviles usas?",
    answers: [
      { text: "Celular / Smartphone", points: 50 },
      { text: "Tablet", points: 30 },
      { text: "Laptop", points: 15 },
      { text: "Smartwatch", points: 5 },
    ],
  },
  {
    question: "¿Qué buscadores de Internet conoces?",
    answers: [
      { text: "Google", points: 60 },
      { text: "Bing", points: 20 },
      { text: "Yahoo", points: 15 },
      { text: "DuckDuckGo", points: 5 },
    ],
  },
  {
    question: "¿Qué juegos en línea son populares?",
    answers: [
      { text: "Minecraft", points: 35 },
      { text: "Roblox", points: 30 },
      { text: "Fortnite", points: 25 },
      { text: "Free Fire", points: 10 },
    ],
  },
  {
    question: "¿Qué es importante al crear una contraseña?",
    answers: [
      { text: "Que sea larga", points: 35 },
      { text: "Usar números y letras", points: 30 },
      { text: "No compartirla", points: 25 },
      { text: "Cambiarla seguido", points: 10 },
    ],
  },
  {
    question: "¿Qué aplicaciones usas para editar fotos?",
    answers: [
      { text: "Instagram", points: 40 },
      { text: "TikTok", points: 30 },
      { text: "Snapchat", points: 20 },
      { text: "Photoshop", points: 10 },
    ],
  },
  {
    question: "¿Qué significa USB?",
    answers: [
      { text: "Universal Serial Bus", points: 50 },
      { text: "Puerto para conectar", points: 30 },
      { text: "Memoria USB", points: 15 },
      { text: "No sé", points: 5 },
    ],
  },
  {
    question: "¿Qué dispositivo usas para escribir en la computadora?",
    answers: [
      { text: "Teclado", points: 60 },
      { text: "Mouse", points: 20 },
      { text: "Micrófono", points: 15 },
      { text: "Pantalla táctil", points: 5 },
    ],
  },
  {
    question: "¿Qué haces cuando la computadora está lenta?",
    answers: [
      { text: "Reiniciarla", points: 40 },
      { text: "Cerrar programas", points: 35 },
      { text: "Esperar", points: 15 },
      { text: "Limpiar archivos", points: 10 },
    ],
  },
  {
    question: "Nombra un lenguaje de programación",
    answers: [
      { text: "Python", points: 35 },
      { text: "Java", points: 25 },
      { text: "JavaScript", points: 25 },
      { text: "Scratch", points: 15 },
    ],
  },
  {
    question: "¿Qué consola de videojuegos es más popular?",
    answers: [
      { text: "PlayStation", points: 35 },
      { text: "Xbox", points: 30 },
      { text: "Nintendo Switch", points: 25 },
      { text: "PC", points: 10 },
    ],
  },
  {
    question: "Nombra un tipo de virus informático",
    answers: [
      { text: "Troyano", points: 30 },
      { text: "Gusano", points: 25 },
      { text: "Malware", points: 25 },
      { text: "Ransomware", points: 20 },
    ],
  },
  {
    question: "Nombra una marca de computadoras",
    answers: [
      { text: "HP", points: 35 },
      { text: "Dell", points: 25 },
      { text: "Lenovo", points: 20 },
      { text: "Apple / Mac", points: 20 },
    ],
  },
  {
    question: "¿Qué necesitas para conectarte a internet?",
    answers: [
      { text: "WiFi / Router", points: 45 },
      { text: "Modem", points: 25 },
      { text: "Contraseña", points: 20 },
      { text: "Datos móviles", points: 10 },
    ],
  },
  {
    question: "¿Para qué sirve el USB?",
    answers: [
      { text: "Guardar archivos", points: 40 },
      { text: "Transferir información", points: 35 },
      { text: "Hacer respaldo", points: 15 },
      { text: "Conectar dispositivos", points: 10 },
    ],
  },
  {
    question: "Nombra una inteligencia artificial famosa",
    answers: [
      { text: "ChatGPT", points: 45 },
      { text: "Alexa", points: 25 },
      { text: "Siri", points: 20 },
      { text: "Google Assistant", points: 10 },
    ],
  },
]
