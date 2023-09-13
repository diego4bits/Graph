## `_insert_node(node: Node) -> None`

#### Description:
This method performs the insertion of a node into a Red-Black Tree. It is used to add a new node to the tree while maintaining the properties of a Red-Black Tree. This method belongs to the class `RedBlackTree`.

#### Parameters:
- `node` (`Node`): The node to be inserted into the Red-Black Tree.

#### Returns:
- `None`: This method does not return anything.

#### Exceptions:
- This method does not throw any exceptions.

#### Usage Cases:

```python
rb_tree = RedBlackTree()
node1 = Node(10)
node2 = Node(20)
rb_tree._insert_node(node1)
rb_tree._insert_node(node2)
```

#### How it Works:
1. Initialize `y` as `None` and `x` as the root of the tree.
2. Iterate through the tree until reaching a leaf node (`NIL_LEAF`), while keeping track of the previous node in `y`.
3. Set the parent of the new node (`node`) as `y`.
4. If `y` is `None`, set the root of the tree as `node`.
5. If the key of `node` is less than the key of `y`, set `node` as the left child of `y`.
6. Otherwise, set `node` as the right child of `y`.
7. Set the left and right children of `node` as `NIL_LEAF` (leaf node) and set the color of `node` as red.
8. Call the `_fix_insert` method to balance the tree and maintain the Red-Black Tree properties.

#### Dependencies:
- This method does not have any dependencies.