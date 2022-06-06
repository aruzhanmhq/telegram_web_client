const BACKEND_URL = "http://localhost:8080";
const sendButton = $("#send_btn")
let selectedChatId = null;

sendButton.click(() => {
    let data = {
        chatId: selectedChatId,
        message: $("#message_input").val()
    }

    console.log(data)
    let settings = {
        url: BACKEND_URL + '/users/sendMessage',
        method: 'post', 
        data: {
            chatId: selectedChatId,
            message: $("#message_input").val()
        }

    }

    $.ajax(settings);
})

const getUsers = async () => {
    let settings = {
        url: BACKEND_URL + '/users',
        method: 'get'
    }

    return await $.ajax(settings);
}

const setUser = (chatId) => {
    selectedChatId = chatId;
}

const drawUsers = async () => {
    let users = await getUsers();
    let usersBlock = $("#users");
    for(let item of users) {
        usersBlock.append(
            `
                <div onclick="setUser(${item.chatId})">
                    ${item.fullName}
                </div>
            `
        );
    }
}
drawUsers();