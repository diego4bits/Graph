## `connect_right(other: Node, edge: str) -> None`

#### Description:
This method performs the action of linking the current node to another node using a specified edge. It is used to establish a relationship between nodes in a graph. This method belongs to the class `Node`.

#### Parameters:
- `other` (`Node`): The node to which the current node will be connected.
- `edge` (`str`): The edge that will be used to establish the connection between the nodes.

#### Returns:
- `None`: This method does not return any value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
node1 = Node()
node2 = Node()
node1.connect_right(node2, 'edge')
```

#### How it Works:
The `connect_right` method uses the `_relation` attribute of the current node to link it to the `other` node using the specified `edge`. The `_relation.link_nodes()` method is called with the current node as the source node and the `other` node as the target node, along with the `edge` parameter. This establishes a relationship between the two nodes.

#### Dependencies:
- `Relation`: This method depends on the `Relation` class, which is imported from the `Relation` module. The `Relation` class provides the functionality for linking nodes and managing relationships in the graph.