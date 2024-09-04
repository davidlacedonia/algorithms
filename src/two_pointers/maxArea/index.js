export function maxArea(height) {
    let maxArea = 0;

    let i = 0,
        j = height.length - 1;

    while (i < j) {
        const left = height[i];
        const right = height[j];
        const area = (j - i) * Math.min(left, right);
        maxArea = Math.max(area, maxArea);

        if (left < right) {
            i++;
        } else {
            j--;
        }
    }

    return maxArea;
}
