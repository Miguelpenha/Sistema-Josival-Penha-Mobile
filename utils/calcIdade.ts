function calcIdade(nascimento: string) {
    const newNascimento = new Date(`${nascimento.split('/')[2]}-${nascimento.split('/')[1]}-${nascimento.split('/')[0]}`)

    return Math.floor(
        Math.ceil(
            Math.abs(newNascimento.getTime()-new Date().getTime())/(1000*3600*24)
        )/365.25
    )
}

export default calcIdade