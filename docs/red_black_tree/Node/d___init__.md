## `__init__(key: Any, color: str = RED) -> None`

#### Description:
This method initializes a Node object and sets its key, color, left, right, and parent attributes. It belongs to the class Node.

#### Parameters:
- `key` (`Any`): The value to be stored in the node.
- `color` (`str`, optional): The color of the node. Defaults to RED.

#### Returns:
- `None`: This method does not return anything.

#### Usage Cases:

```python
# Create a new node with key = 10 and color = RED
node1 = Node(10)

# Create a new node with key = 20 and color = BLACK
node2 = Node(20, color=BLACK)
```

#### How it Works:
The `__init__` method is the constructor for the Node class. It is called when a new Node object is created. It takes a key value and an optional color parameter. The key value is assigned to the `key` attribute of the node, and the color is assigned to the `color` attribute. The `left`, `right`, and `parent` attributes are initialized to None.

#### Dependencies:
- This method does not have any dependencies.