## `connected_nodes_by(clazz: Type) -> Set[Type]`

#### Description:
This method retrieves a set of connected nodes based on the given class. It belongs to the class Relation.

#### Parameters:
- `clazz` (`Type`): The class used to retrieve the connected nodes.

#### Returns:
- `Set[Type]`: A set of connected nodes that are of the given class.

#### Exceptions:
- `KeyError`: If the given class is not found in the relation.

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

The method tries to retrieve the connected nodes for the given class from the `_clazz_node_relation` dictionary. If the class is found, the set of connected nodes is returned. If the class is not found, an empty set is returned.

#### Dependencies:
- This method does not have any dependencies.