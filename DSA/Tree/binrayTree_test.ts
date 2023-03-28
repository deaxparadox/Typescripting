import { assertEquals } from "https://deno.land/std@0.181.0/testing/asserts.ts";
import { binaryTree, node } from "./binaryTree/binaryTree.ts";

const n = new node(1);
n.leftNode = new node(2);

Deno.test("node", () => {
    assertEquals(n.data, 1);
})


Deno.test("node left", () => {
    assertEquals(n.leftNode?.data, 2);
})