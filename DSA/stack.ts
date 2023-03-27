enum Options {
    Some,
    None
}

class StackNode {
    data: any | null
    nex: any | StackNode | null
    constructor(data) {
        this.data = data
        this.nex = null
    }
}


class Stack {
    root: StackNode | null;
    pointer: StackNode | null;
    len: number;
    constructor() {
        this.root = null
        this.pointer = null
        this.len = 0
    }
    
    append(data: any) {
        const newNode: StackNode = new StackNode(data);
        if (this.root === null) {
            this.pointer = this.root = newNode;
            this.len += 1;
        } else {
            newNode.nex = this.pointer
            this.pointer = newNode;
            this.len += 1;
        }
    }

    pop(): any {
        let remove: StackNode | null = this.pointer;
        this.pointer = this.pointer?.nex;
        this.len -= 1
        return remove?.data;
    }

    print(): void {
        let temp: StackNode | null = this.pointer
        while (temp !== null) {
            console.log(temp?.data);
            temp = temp?.nex;
        }
    }

    get_first(): any {
        return this.pointer?.data
    }
}

let s = new Stack()
for (let i=0; i<5; i++) {
    s.append(i);
}
console.log(`Length: ${s.len}`)
// console.log(s.get_first());
// console.log(s.pointer?.nex)
s.print()
console.log(`Removed: ${s.pop()}`)
console.log(`Length: ${s.len}`)
s.print();