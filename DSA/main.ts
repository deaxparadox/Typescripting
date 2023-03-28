import { binaryTree, node } from "./Tree/binaryTree/binaryTree.ts";

function binaryTreeMain(): void {
    const bt = new binaryTree()
    bt.insert(23);

    bt.insert(45);
    bt.insert(34);
    bt.insert(2);
    bt.insert(100);


    console.log("\nPreorder")
    bt.preorder(bt.rootNode);
    
    console.log("\nInorder")
    bt.inorder(bt.rootNode);


    console.log("\nPostorder")
    bt.postorder(bt.rootNode);
}

for (const arg of Deno.args) {
    if (arg == "binaryTree") {
        binaryTreeMain();
    }
}