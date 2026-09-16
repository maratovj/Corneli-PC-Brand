export function sortByAlphabet(products) {
    return [...products].sort((a, b) => a.name.localeCompare(b.name));
}

export function sortByAlphabetReverse(products) {
    return [...products].sort((b, a) => b.name.localeCompare(a.name));
}