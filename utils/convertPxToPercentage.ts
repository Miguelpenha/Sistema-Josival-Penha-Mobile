function convertPxToPercentage(fontSize: number) {
    const percentageExact = fontSize/7.5
    const percentage = percentageExact.toFixed(1)
    
    console.log(percentage)
}

export default convertPxToPercentage