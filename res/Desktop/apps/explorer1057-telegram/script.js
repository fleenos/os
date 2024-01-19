var WindowID

window.addEventListener('message', function (event) {
    if (event.data.startsWith('YourID-')) {
        WindowID = Number(event.data.replace('YourID-', ''))
        /* Установка заголовка */ sendToTop('SetWindowHeader' + WindowID + '|' + $('title').html())  
        /* Установка иконки    */ sendToTop('SetWindowIcon' + WindowID + '|' + '../mods/apps/explorer1057-telegam/icon.png')        
    }
})

function killWindow () { // Функция закрывает окно
    sendToTop('KillWindow_' + WindowID)
}
