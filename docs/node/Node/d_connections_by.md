## `connections_by(clazz: Type) -> List[Node]`

#### Description:
This method returns a list of connected nodes of a specific class. It is used to retrieve nodes that are connected to the current node by a specific relationship class. This method belongs to the class Node.

#### Parameters:
- `clazz` (`Type`): The class of the relationship that connects the nodes.

#### Returns:
- `List[Node]`: A list of nodes that are connected to the current node by the specified relationship class.

#### Exceptions:
- None

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
result_case1 = node.connections_by(Relation)
print(result_case1)

# Another use case (if applicable)
result_case2 = node.connections_by(AnotherRelation)
print(result_case2)
```

#### How it Works:
The method uses the `_relation` attribute to access the relationship object associated with the current node. It then calls the `connected_nodes_by` method of the relationship object, passing the specified class as the argument. This method returns a list of connected nodes that have a relationship of the specified class with the current node.

#### Dependencies:
- `Relation`: The relationship class used to connect nodes.