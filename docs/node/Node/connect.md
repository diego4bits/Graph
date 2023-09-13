## `connect(other: Node, edge: Relation) -> None`

#### Description:
This method connects the current node with another node by creating a bi-directional connection. It belongs to the class `Node`.

#### Parameters:
- `other` (`Node`): The node to connect with.
- `edge` (`Relation`): The relation between the current node and the other node.

#### Returns:
- `None`: This method does not return anything.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
node1 = Node()
node2 = Node()
relation = Relation()
node1.connect(node2, relation)
```

#### How it Works:

The `connect` method first calls the `connect_right` method of the current node, passing the `other` node and the `edge` relation as parameters. This creates a connection from the current node to the other node.

Then, it calls the `connect_right` method of the `other` node, passing the current node and the same `edge` relation as parameters. This creates a connection from the other node to the current node, completing the bi-directional connection.

#### Dependencies:
- `Relation`: This class is required to define the relation between the nodes.