## `connect_right(other: Node, edge: Relation) -> None`

#### Description:
This method links the current node with another node using the specified edge. It belongs to the class Node.

#### Parameters:
- `other` (`Node`): The node to be linked with the current node.
- `edge` (`Relation`): The edge to be used for linking the nodes.

#### Returns:
- `None`: This method does not return any value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Link node2 to node1 using the edge "likes"
node1.connect_right(node2, "likes")

# Link node3 to node1 using the edge "follows"
node1.connect_right(node3, "follows")
```

#### How it Works:
This method uses the `_relation` attribute of the current node (an instance of the `Relation` class) to link the current node with another node (`other`) using the specified edge (`edge`).

#### Dependencies:
- `Relation`: This method depends on the `Relation` class to create and manage the relationship between nodes.