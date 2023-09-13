## `is_red(node: Node) -> bool`

#### Description:
This method checks if a given node is red. It is used to determine the color of a node in a Red-Black Tree. This method belongs to the class `RedBlackTree`.


#### Parameters:
- `node` (`Node`): The node to be checked.

#### Returns:
- `bool`: Returns `True` if the given node is red, otherwise `False`.

#### Usage Cases:

```python
# Sample code to demonstrate how to use the 'is_red' method
tree = RedBlackTree()
node1 = Node(10, Node.RED)
node2 = Node(20, Node.BLACK)
node3 = Node(30, Node.RED)

result_case1 = tree.is_red(node1)
print(result_case1)  # Output: True

result_case2 = tree.is_red(node2)
print(result_case2)  # Output: False

result_case3 = tree.is_red(node3)
print(result_case3)  # Output: True
```

#### How it Works:
The `is_red` method first checks if the given node is `None` (i.e., empty node). If it is, then it returns `False` since an empty node cannot be red. Otherwise, it checks the color attribute of the node. If the color attribute is equal to `Node.RED`, it means the node is red, so the method returns `True`. Otherwise, it returns `False`.

#### Dependencies:
This method does not have any dependencies.