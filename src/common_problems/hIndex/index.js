export function hIndex(citations) {
    const orderedCitations = citations.sort((a, b) => b - a);

    for (let i = 0; i < orderedCitations.length; i++) {
        if (orderedCitations[i] < i + 1) return i--;
    }

    return citations.length;
}
