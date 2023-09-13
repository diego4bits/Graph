## `is_connected_by(node: Node, clazz: Type[Relation]) -> bool`

#### Description:
This method checks if the current node is connected to another node through a specific relation class. It belongs to the class `Node`.

#### Parameters:
- `node` (`Node`): The node to check if it is connected to the current node.
- `clazz` (`Type[Relation]`): The relation class that defines the type of connection between the nodes.

#### Returns:
- `bool`: Returns `True` if the current node is connected to the specified node through the given relation class, otherwise returns `False`.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
node1 = Node()
node2 = Node()
relation = Relation()
node1._relation = relation

result_case1 = node1.is_connected_by(node2, Relation)
print(result_case1)

# Output: False

# Another use case (if applicable)
result_case2 = node1.is_connected_by(node2, type(relation))
print(result_case2)

# Output: False
```

#### How it Works:
The method `is_connected_by` uses the `_relation` attribute of the current node, which is an instance of the `Relation` class, to check if the specified node is connected to the current node through the given relation class. It calls the `is_node_linked_by` method of the `Relation` class passing the specified node and relation class as arguments. The `is_node_linked_by` method returns `True` if the connection exists, otherwise it returns `False`.

#### Dependencies:
- `Relation`: The `Relation` class is required to define the type of connection between the nodes.