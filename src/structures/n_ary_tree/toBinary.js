
function encode(root) {
    if (!root) return null

    const newRoot = new Node(root.val, [])
    const head = new Pair(newRoot, root)
    const queue = [head]

    while (queue.length > 0) {
        const pair = queue.shift()

        const bNode = pair.binary
        const nNode = pair.n_ary

        let prevBNode = null, headBNode = null
        for (let i = 0; i < nNode.children.length; i++) {
            const nChild = nNode.children[i]
            const newBNode = new Node(nChild.val, [])
            
            if (!prevBNode) {
                headBNode = newBNode
            } else {
                prevBNode.right = newBNode
            }
            prevBNode = newBNode

            const nextEntry = new Pair(newBNode, nChild)
            queue.push(nextEntry)
        }

        bNode.left = headBNode
    }

    return newRoot
}

function decode(root) {
    if (!root) return null

    const newHead = new Node(root.val, [])
    let queue = [new Pair(newHead, root)]

    while (queue.length) {
        const curr = queue.shift()
        const nNode = curr.n_ary
        const bNode = curr.binary

        let firstChild = bNode.left
        let sibling = firstChild

        while (sibling) {
            const nChild = new Node(sibling.val, [])
            nNode.children.push(nChild)

            const next = new Pair(nChild, sibling)
            queue.push(next)

            sibling = sibling.right
        }
    }

    return newHead
}