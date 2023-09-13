## `is_connected(node: Node) -> bool`

#### Description:
This method checks if the current node is connected to the given node. It belongs to the class `Node`.

#### Parameters:
- `node` (`Node`): The node to check the connection with.

#### Returns:
- `bool`: Returns `True` if the current node is connected to the given node, otherwise returns `False`.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
result_case1 = node.is_connected(other_node)
print(result_case1)

# Another use case (if applicable)
result_case2 = node.is_connected(another_node)
print(result_case2)
```

#### How it Works:
This method utilizes the `_relation` instance of the `Relation` class to check if the current node is linked to the given node. It returns the result of the `is_node_linked` method called on `_relation`.

#### Dependencies:
- `Relation`: This method depends on the `Relation` class, which is imported from the `Relation` module. The `Relation` class is responsible for managing the relationships between nodes.