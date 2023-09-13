## `connections_by(clazz: Type) -> List[Node]`

#### Description:
This method returns a list of nodes that are connected to the current node through a specific type of relation. This method belongs to the class 'Node'.

#### Parameters:
- `clazz` (`Type`): The type of relation that the connected nodes should have.

#### Returns:
- `List[Node]`: A list of nodes that are connected to the current node through the specified relation type.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Example 1: Get all nodes connected through a "Friend" relation
friend_nodes = node.connections_by(Friend)
print(friend_nodes)

# Example 2: Get all nodes connected through a "Colleague" relation
colleague_nodes = node.connections_by(Colleague)
print(colleague_nodes)
```

#### How it Works:
This method calls the '_relation.connected_nodes_by(clazz)' method to retrieve the connected nodes of the specified relation type. The returned nodes are then returned as a list.

#### Dependencies:
- `Relation`: A dependency that provides the 'connected_nodes_by' method used to retrieve the connected nodes.