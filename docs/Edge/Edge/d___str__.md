## `__str__() -> str`

#### Description:
This method returns a string representation of an instance of the `Edge` class.

#### Returns:
- `str`: A string representation of the instance of the `Edge` class.

#### Usage Cases:

```python
edge = Edge(1, 2, 5.0)
print(str(edge))  # Output: "[Edge -> vertex1: 1, vertex2: 2, weight: 5.0]"
```

#### How it Works:
The method first retrieves the class name of the instance using `type(self).__name__`. Then, it iterates over the instance's attributes and filters out the ones that are present in the `_printable_attr` list. For each attribute, it removes the leading underscore from the attribute name and appends the attribute name and its value to the `properties` list. Finally, it joins the elements of the `properties` list with commas and wraps the class name and properties in brackets to form the string representation.

#### Dependencies:
This method does not have any dependencies.