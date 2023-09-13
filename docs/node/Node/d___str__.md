## `__str__() -> str`

#### Description:
This method returns a string representation of the object. It is used to provide a human-readable representation of the object. This method belongs to the class `Node`.

#### Parameters:
This method does not have any parameters.

#### Returns:
- `str`: The string representation of the object.

#### Usage Cases:

```python
# Sample usage
node = Node()
print(node)
```

#### How it Works:
The method first gets the class name of the object using `type(self).__name__`. It then iterates over the attributes of the object using `vars(self).items()`. It filters out the attributes that are in the `_printable_attr` list and formats them as `{attribute_name}: {attribute_value}`. These formatted attributes are stored in the `properties` list. Finally, the method returns a string that consists of the class name followed by the formatted attributes.

#### Dependencies:
- `Node`: The class `Node` is required for this method.