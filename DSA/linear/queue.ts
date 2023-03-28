

class QNode {
    data: any | null
    nex: any | QNode | null
    constructor(data) {
        this.data = data
        this.nex = null
    }
}

interface Q {
    insert(data: any): void;
    remove(): any;
    print(): any;
}


class Queue implements Q {
    root: QNode | null;
    pointer: QNode | null;
    constructor() {
        this.root = this.pointer = null;
    }

    insert(data: any): void {
        let newNode: QNode = new QNode(data)
        if (this.pointer === null) {
            this.root = this.pointer = newNode;
        } else {
            this.pointer.nex = newNode;
            this.pointer = newNode;
        }
    }

    remove() {
        let remove: QNode|null = this.root;
        this.root =  this.root?.nex;
        return remove?.data
    }

    print() {
        let temp: QNode|null = this.root; 
        while (temp !== null) {
            console.log(temp.data);
            temp = temp.nex;
        }
    }
}

let q = new Queue();
for (let i=0; i<5; i++) {
    q.insert(i)
}
q.print();
console.log(`Removed: ${q.remove()}`)
console.log(`Removed: ${q.remove()}`)
console.log(`Removed: ${q.remove()}`)

export default Queue;