export const UNORDERED_ARRAY = [6, 2, 4, 3, 8, 7, 1, 10, 5, 9];
export const ORDERED_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const LIST = [[1, [2, 3, [4], [5, 6, 7, [8, 9]], 10]], 11];
export const FLATTENED_LIST = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
export const TREE = {
    data: 1,
    prev: null,
    next: {
        data: 2,
        prev: {
            data: 3,
            next: null,
        },
        next: null,
    },
};
export const ORDERED_TREE = [1, 2, 3];
export const REVERSED_TREE = [3, 2, 1];
export const INORDER_TREE = [1, 3, 2];
