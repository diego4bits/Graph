## `__init__()` -> None

#### Description:
This method initializes a new instance of the Node class. It creates a new relation object and assigns it to the _relation attribute.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Creating a new instance of the Node class
node = Node()
```

#### How it Works:
The `__init__` method is a special method in Python that is automatically called when a new object of the Node class is created. It initializes the new object by creating a new instance of the Relation class and assigning it to the `_relation` attribute of the object.

#### Dependencies:
- `Relation`: This method depends on the Relation class, which is imported from the Relation module. The Relation class is responsible for handling the relationships between nodes.