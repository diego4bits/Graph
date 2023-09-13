## `connected_nodes_by(clazz: Any) -> set`

#### Description:
This method returns the set of connected nodes by a given class. It belongs to the class `Relation`.

#### Parameters:
- `clazz` (`Any`): The class by which the connected nodes are retrieved.

#### Returns:
- `set`: A set of connected nodes by the given class.

#### Exceptions:
- `KeyError`: If the given class is not found in the `_clazz_node_relation` dictionary.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
result_case1 = connected_nodes_by(ClassA)
print(result_case1)

# Another use case (if applicable)
result_case2 = connected_nodes_by(ClassB)
print(result_case2)
```

#### How it Works:
The method attempts to retrieve the set of connected nodes by the given class from the `_clazz_node_relation` dictionary. If the class is found, the set of connected nodes is returned. If the class is not found, an empty set is returned.

#### Dependencies:
This method does not have any dependencies.