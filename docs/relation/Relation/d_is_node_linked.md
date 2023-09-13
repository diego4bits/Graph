## `is_node_linked(node: Any) -> bool`

#### Description:
This method checks whether a given node is linked to any edges in the relation. It belongs to the class `Relation`.

#### Parameters:
- `node` (`Any`): The node to check for linkage.

#### Returns:
- `bool`: True if the node is linked to any edges, False otherwise.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
result_case1 = is_node_linked(node1)
print(result_case1)

# Another use case (if applicable)
result_case2 = is_node_linked(node2)
print(result_case2)
```

#### How it Works:

The method checks if the given `node` is present in the keys of the `_node_edge_relation` dictionary. If the node is found, it means that it is linked to one or more edges, and the method returns True. Otherwise, if the node is not present in the keys, it means that it is not linked to any edges, and the method returns False.

#### Dependencies:
This method does not have any dependencies.