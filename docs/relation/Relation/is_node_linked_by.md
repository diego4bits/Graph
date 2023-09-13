## `is_node_linked_by(node: Any, clazz: Type) -> bool`

#### Description:
This method checks if a given node is linked by an edge of a specified class. It belongs to the class `Relation`.

#### Parameters:
- `node` (`Any`): The node to check if it is linked.
- `clazz` (`Type`): The class of the edge to check if it links the node.

#### Returns:
- `bool`: Returns `True` if the node is linked by an edge of the specified class, otherwise returns `False`.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
result_case1 = relation.is_node_linked_by(node1, EdgeClass)
print(result_case1)

# Another use case (if applicable)
result_case2 = relation.is_node_linked_by(node2, AnotherEdgeClass)
print(result_case2)
```

#### How it Works:
The method first retrieves the edge linked to the given node from the `_node_edge_relation` dictionary using the node as the key. Then it checks if the retrieved edge is an instance of the specified class using the `isinstance()` function. If the edge is an instance of the specified class, it means that the node is linked by an edge of that class, and the method returns `True`. Otherwise, it returns `False`.

#### Dependencies:
This method does not have any dependencies.