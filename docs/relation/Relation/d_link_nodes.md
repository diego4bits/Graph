## `link_nodes(node: Any, edge: Any) -> None`

#### Description:
This method performs the action of linking a node to an edge and updates the internal data structures of the class `Relation` accordingly.

#### Parameters:
- `node` (`Any`): The node to be linked to the edge.
- `edge` (`Any`): The edge to which the node will be linked.

#### Returns:
- `None`: This method does not return any value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Linking a node to an edge
relation = Relation()
node = "A"
edge = "B"
relation.link_nodes(node, edge)
```

#### How it Works:
This method updates the `_node_edge_relation` dictionary of the `Relation` class, where each node is mapped to its corresponding edge. It also updates the `_clazz_node_relation` dictionary, which maps the type of each edge to a set of nodes that are linked to edges of that type.

#### Dependencies:
This method does not have any dependencies.