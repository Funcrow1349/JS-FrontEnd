function editElement(ref, stringMatch, replacer) {
    const content = ref.textContent
    const editedText = content.replace(new RegExp(stringMatch, 'g'), replacer)
    ref.textContent = editedText
}