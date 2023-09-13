## `insert(key: Any) -> None`

#### Description:
This method inserts a new node with the given key into the Red-Black Tree. It belongs to the class `RedBlackTree`.

#### Parameters:
- `key` (`Any`): The key value to be inserted into the Red-Black Tree.

#### Returns:
- `None`: This method does not return anything.

#### Exceptions:
- None

#### Usage Cases:

```python
# Insert a new node with key value 10 into the Red-Black Tree
tree.insert(10)

# Insert a new node with key value 'apple' into the Red-Black Tree
tree.insert('apple')
```

#### How it Works:

The `insert` method first creates a new node with the given key. If the root of the Red-Black Tree is empty (NIL_LEAF), the new node becomes the root and is colored black. Otherwise, the `_insert_node` helper method is called to insert the node into the tree.

#### Dependencies:
- None