export const dateEven = () => {

    const date = new Date();
    // get the date as a string
    return date.getDate() % 2 === 0

}

export const randomNumber = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}