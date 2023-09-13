## `__init__(data: Any) -> None`

#### Description:
This method initializes a Node object. It assigns the given data to the `data` attribute of the Node object and sets the `next` attribute to `None`. This method belongs to the class `Node` in the `linked_list.py` file.

#### Parameters:
- `data` (`Any`): The data to be stored in the Node object.

#### Returns:
- `None`: This method does not return anything.

#### Exceptions:
- None: This method does not throw any exceptions.

#### Usage Cases:

```python
# Creating a Node object with data = 10
node1 = Node(10)

# Creating a Node object with data = "Hello"
node2 = Node("Hello")
```

#### How it Works:
The `__init__` method is the constructor of the Node class. It is called when a new Node object is created. The `data` parameter is used to initialize the `data` attribute of the Node object. The `next` attribute is set to `None` as the initial value. This method is responsible for setting up the initial state of a Node object.

#### Dependencies:
This method does not have any dependencies.