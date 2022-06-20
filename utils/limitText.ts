function limitText(text: string, limit: number) {
    if (text.length > limit) {
        return text.slice(0, limit-3)+'...'
    } else {
        return text
    }
}

export default limitText