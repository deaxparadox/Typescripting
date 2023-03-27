class LNode {
    pre: any | LNode;
    nex: any|LNode;
    data: any
    constructor(data) {
        this.pre = this.nex = null;
        this.data = data 
    }
}

interface LList {
    append(data: any): void;
    insert(data: any): void;
    remove(): any;
    pop(): any;
    print(): void;
    printReverse(): void;
    len: number
}

class LinkedList implements LList {
    tail: LNode|null;
    head: LNode|null;
    len: number;
    constructor() {
        this.tail = this.head = null
        this.len = 0;
    }
    
    insert(data: any): void {
        let newNode: LNode = new LNode(data);
        if (this.head === null) {
            this.tail = this.head = newNode;
            this.len += 1;
        } else {
            this.head.pre = newNode;
            newNode.nex = this.head;
            this.head = newNode;
            this.len += 1;
        }
    }
    append(data: any): void {
        let newNode: LNode = new LNode(data);
        if (this.tail === null) {
            this.head = this.tail = newNode;
            this.len += 1;
        } else {
            
            this.tail.nex = newNode; 
            newNode.pre = this.tail;
            this.tail = newNode;
            this.len += 1;
        }
    }
    remove(): void {
        if (this.head === null) {
            throw Error("empty list!")
        }

        let temp: LNode|null = this.head;
        this.head = this.head?.nex;
        if (this.head !== null) {
            this.head!.pre = null;
        } else {
            this.tail = this.head = null;
        }
        this.len -= 1;
        return temp?.data;
    }
    pop(): void {
        if (this.tail === null) {
            throw Error("empty list!")
        }
        
        let temp: LNode|null = this.tail;
        this.tail = this.tail?.pre;
        if (this.tail !== null) {
            this.tail!.nex = null;
        } else {
            this.tail = this.head = null;
        }
        
        this.len -= 1;
        return temp?.data;
    }
    print(): void {
        let temp: LNode|null = this.head;       
        while (temp !== null) {
            console.log(temp.data);
            temp = temp.nex;
        }
    }
    printReverse(): void {
        let temp: LNode|null = this.tail;       
        while (temp !== null) {
            console.log(temp.data);
            temp = temp.pre;
        }
    }
}

let l = new LinkedList();
for (let i=0; i<10; i++) {
    l.append(i);
}
l.print();
const total:number = l.len;
for (let i=0; i<total; i++) {
    // console.log(`Pop: ${l.pop()}`);
    console.log(`Pop: ${l.remove()}`);
    console.log(`Length: ${l.len}`);
}
