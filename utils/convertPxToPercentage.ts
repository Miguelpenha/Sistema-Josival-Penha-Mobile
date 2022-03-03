function convertPxToPercentage(fontSize: number) {
    const percentageExact = fontSize/5.6
    const percentage = percentageExact.toFixed(1)
    
    console.log(percentage)
}

export default convertPxToPercentage