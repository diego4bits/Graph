## `right_rotate(y: Node) -> None`

#### Description:
This method performs a right rotation operation on the Red-Black Tree. It is used to balance the tree after an insertion or deletion operation. This method belongs to the class RedBlackTree.

#### Parameters:
- `y` (`Node`): The node on which the right rotation operation is performed.

#### Returns:
- `None`: This method does not return anything.

#### Exceptions:
- This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
tree = RedBlackTree()
node = Node(5)
tree.right_rotate(node)
```

#### How it Works:

The `right_rotate` method performs the following steps:

1. Assign the left child of `y` to a variable `x`.
2. Update the left child of `y` with the right child of `x`.
3. If the right child of `x` is not the NIL leaf node, update its parent to be `y`.
4. Update the parent of `x` to be the parent of `y`.
5. If `y` is the root of the tree (i.e., its parent is None), update the root to be `x`.
6. If `y` is the left child of its parent, update the left child of the parent to be `x`.
7. Otherwise, update the right child of the parent to be `x`.
8. Set the right child of `x` to be `y`.
9. Update the parent of `y` to be `x`.

#### Dependencies:
- This method does not have any dependencies.