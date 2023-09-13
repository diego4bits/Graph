## `link_nodes(node: Any, edge: Any) -> None`

#### Description:
This method adds a relationship between a node and an edge. It belongs to the class Relation.

#### Parameters:
- `node` (`Any`): The node to link.
- `edge` (`Any`): The edge to link.

#### Returns:
- None

#### Usage Cases:

```python
rel = Relation()
rel.link_nodes(node1, edge1)
```

#### How it Works:
This method adds the given node and edge to the `_node_edge_relation` dictionary attribute of the Relation class. It also updates the `_clazz_node_relation` dictionary attribute by adding the node to the set associated with the type of the edge.

#### Dependencies:
This method does not have any dependencies.