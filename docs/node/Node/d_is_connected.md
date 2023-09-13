## `is_connected(node: Any) -> bool`

#### Description:
This method checks if the current node is connected to another node. It belongs to the class `Node`.

#### Parameters:
- `node` (`Any`): The node to check if it is connected to the current node.

#### Returns:
- `bool`: True if the current node is connected to the specified node, False otherwise.

#### Exceptions:
- This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
result_case1 = is_connected(node1)
print(result_case1)

# Another use case (if applicable)
result_case2 = is_connected(node2)
print(result_case2)
```

#### How it Works:
The method `is_connected` uses the `_relation` instance variable of the current node to check if the specified `node` is linked to the current node. It does this by invoking the `is_node_linked` method on the `_relation` object, passing the `node` as an argument. The return value of `is_node_linked` is then returned by the `is_connected` method.

#### Dependencies:
- `Relation`: This method requires the `Relation` class to be imported in order to access the `_relation` instance variable.