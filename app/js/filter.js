export function sortByAlphabet(products) {
    return [...products].sort((a, b) => a.name.localeCompare(b.name));
}

export function sortByAlphabetReverse(products) {
    return [...products].sort((a, b) => b.name.localeCompare(a.name));
}

export function lowToHigh(products) {
    return [...products].sort((a, b) => a.price - b.price);
}

export function highToLow(products) {
    return [...products].sort((a, b) => b.price - a.price);
}