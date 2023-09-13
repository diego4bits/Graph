## `is_connected_by(node: Node, clazz: Type) -> bool`

#### Description:
This method checks whether the current node is connected to another node of a given class through a specific relation. It belongs to the class `Node`.

#### Parameters:
- `node` (`Node`): The node to check the connection with.
- `clazz` (`Type`): The class of the node to check the connection with.

#### Returns:
- `bool`: True if the current node is connected to the given node of the specified class through a specific relation, False otherwise.

#### Exceptions:
- None

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
result_case1 = node1.is_connected_by(node2, Relation)
print(result_case1)

# Another use case (if applicable)
result_case2 = node3.is_connected_by(node4, Relation)
print(result_case2)
```

#### How it Works:

This method uses the `_relation` attribute of the current node to invoke the `is_node_linked_by` method of the `Relation` class. It passes the given node and class as arguments to the `is_node_linked_by` method. The `is_node_linked_by` method returns True if there is a connection between the current node and the given node of the specified class through a specific relation, and False otherwise. The result is then returned by the `is_connected_by` method.

#### Dependencies:
- `Relation`: This method depends on the `Relation` class to check the connection between nodes.