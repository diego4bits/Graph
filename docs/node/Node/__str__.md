## `__str__() -> str`

#### Description:
This method returns a string representation of the object. It belongs to the class Node.

#### Parameters:
This method does not take any parameters.

#### Returns:
- `str`: A string representation of the object.

#### Usage Cases:

```python
# Example usage case
node = Node()
print(node)
```

#### How it Works:
The method first retrieves the name of the class the object belongs to and assigns it to the variable `clazz`. Then, it iterates over the attributes of the object and filters out those that are in the `_printable_attr` list. It creates a string representation for each attribute, removing the leading underscore from the attribute name, and joins them together with a comma separator. Finally, it returns a string that consists of the class name followed by an arrow symbol and the string representation of the object's attributes.

#### Dependencies:
- `Node`: The class to which this method belongs.