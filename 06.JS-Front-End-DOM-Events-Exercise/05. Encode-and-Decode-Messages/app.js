function encodeAndDecodeMessages() {

    let sendBtn = document.getElementsByTagName("button")[0]
    let receiveBtn = document.getElementsByTagName("button")[1]

    let sendText = document.getElementsByTagName("textarea")[0]
    let receiveText = document.getElementsByTagName("textarea")[1]

    sendBtn.addEventListener("click", encodeAndSendText)
    receiveBtn.addEventListener("click", decodeAndReadText)

    function encodeAndSendText() {
        let message = sendText.value
        let encodedText = ""

        for (let index = 0; index < message.length; index++) {
            let newChar = String.fromCharCode(message[index].charCodeAt(0) + 1)
            encodedText += newChar
        }

        receiveText.value = encodedText
        sendText.value = ""

    }

    function decodeAndReadText() {
        let message = receiveText.value
        let decodedText = ""

        for (let index = 0; index < message.length; index++) {
            let newChar = String.fromCharCode(message[index].charCodeAt(0) - 1)
            decodedText += newChar
        }

        receiveText.value = decodedText
    }
}