## `is_node_linked(node: Any) -> bool`

#### Description:
This method checks if a given node is linked to any edges in the Relation object. This method belongs to the class Relation.

#### Parameters:
- `node` (`Any`): The node to check if it is linked to any edges.

#### Returns:
- `bool`: True if the node is linked to any edges, False otherwise.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
result_case1 = relation.is_node_linked(node1)
print(result_case1)

# Another use case (if applicable)
result_case2 = relation.is_node_linked(node2)
print(result_case2)
```

#### How it Works:
The method checks if the given `node` exists in the `_node_edge_relation` dictionary keys. If the node is found, it means that it is linked to at least one edge, so the method returns True. If the node is not found, it means that it is not linked to any edges, so the method returns False.

#### Dependencies:
This method does not have any dependencies.