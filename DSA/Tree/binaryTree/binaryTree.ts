


export class node {
    #left: node|null;
    #right: node|null;
    #data: number | string | boolean;
    constructor(data: number | string | boolean) {
        this.#left = null;
        this.#right = null;
        this.#data = data;
    }

    get leftNode() {
        return this.#left;
    }
    set leftNode(a0: node | null) {
        // console.log(a0)
        if (!a0) {
            throw Error("left: `a0` must be of type `node`")
        }
        this.#left = a0
    }

    get rightNode() {
        return this.#right;
    }
    set rightNode(a0: node | null) {
        if (!a0) {
            throw Error("right: `a0` must be of type `node`")
        }
        this.#right = a0
    }

    get data() {
        return this.#data;
    }
    set data(a0: number | string | boolean) {
        this.#data = a0;
    }

}


interface BinaryTree {
    insert(data: number | string | boolean): void;
    inorder(): void;
    preorder(): void;
    postorder(): void;
}


export class binaryTree implements BinaryTree {
    #root: node|null;
    constructor() {
        this.#root = null;
    }
    
    get rootNode() {
        // 
        // return the root node.
        // 
        return this.#root;
    }


    insert(data: number | string | boolean) {
        // 
        // Create a new node
        // 
        const newNode: node|null = new node(data);
        

        if (!this.#root) {
            // 
            // if `root` node is null,
            // then assign `newNode` to `root`
            // 
            this.#root = newNode;
        } else {
            // 
            // if `root` is not null
            // then recurse
            // 
            this.#insert(this.#root, newNode);
        }
    }
    #insert(root: node|null, newNode: node|null) {
        if(newNode!.data < root!.data) {
            // 
            // if `newNode.data` < `root.data
            // 
            if (!root?.leftNode) {
                // 
                // if `root.leftNode` is null
                // then assign `newNode` to `root.leftNode`
                // 
                root!.leftNode = newNode;
            } else {
                // 
                // if `root.leftNode`,
                // then recurse on `leftNode`
                // 
                this.#insert(root.leftNode, newNode);
            }
        } else {
            // 
            // if `newNode.data >= `root`
            // 
            if (!root?.rightNode) {
                // 
                // if `root.rightNode` is null
                // then assign `newNode` to `root.rightNode`
                // 
                root!.rightNode = newNode;
            } else {
                // 
                // if `root.rightNode`,
                // then recurse on `rightNode`
                // 
                this.#insert(root.rightNode, newNode);
            }
        }
    }

    inorder(root: node|null = null) {
        // console.log(root?.data);
        if (root !== null) {
            if (root) {
                this.inorder(root.leftNode);
                console.log(`${root.data}`);
                this.inorder(root.rightNode);
            }
        }
    }

    preorder(root: node|null = null) {
        // console.log(root?.data);
        if (root !== null) {
            if (root) {
                console.log(`${root.data}`);
                this.preorder(root.leftNode);
                this.preorder(root.rightNode);
            }
        }
    }

    postorder(root: node|null = null) {
        // console.log(root?.data);
        if (root !== null) {
            if (root) {
                this.postorder(root.leftNode);
                this.postorder(root.rightNode);
                console.log(`${root.data}`);
            }
        }
    }
    
}

