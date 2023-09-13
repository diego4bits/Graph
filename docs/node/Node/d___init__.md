## `__init__(self) -> None`

#### Description:
This method initializes an instance of the Node class. It creates a new instance of the Relation class and assigns it to the `_relation` attribute of the Node object. 

#### Parameters:
This method does not take any parameters.

#### Returns:
- `None`: This method does not return anything.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Creating a new instance of the Node class
node = Node()
```

#### How it Works:
The `__init__` method is a special method in Python that is automatically called when a new instance of a class is created. In this case, the `__init__` method initializes the `_relation` attribute of the Node object by creating a new instance of the Relation class using the line `self._relation = Relation()`. This allows each Node object to have its own instance of the Relation class, which can be used to establish relationships with other nodes.

#### Dependencies:
- `Relation`: This method depends on the Relation class, which is imported from the `Relation` module. The Relation class is responsible for managing the relationships between nodes.