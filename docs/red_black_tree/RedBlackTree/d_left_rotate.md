## `left_rotate(x: Node) -> None`

#### Description:
This method performs a left rotation operation on a Red-Black Tree. It is used to balance the tree after an insertion or deletion operation. This method belongs to the class `RedBlackTree`.

#### Parameters:
- `x` (`Node`): The node on which the left rotation operation is performed.

#### Returns:
- `None`: This method does not return anything.

#### Usage Cases:

```python
# Perform a left rotation on node x
red_black_tree.left_rotate(x)
```

#### How it Works:
1. Assign the right child of node `x` to node `y`.
2. Update the right child of node `x` to be the left child of node `y`.
3. If the left child of node `y` is not the NIL leaf (sentinel node), update its parent to be node `x`.
4. Update the parent of node `y` to be the parent of node `x`.
5. If node `x` is the root of the tree, update the root to be node `y`.
6. If node `x` is the left child of its parent, update the left child of the parent to be node `y`.
7. Otherwise, update the right child of the parent to be node `y`.
8. Set the left child of node `y` to be node `x`.
9. Set the parent of node `x` to be node `y`.

#### Dependencies:
This method does not have any dependencies.