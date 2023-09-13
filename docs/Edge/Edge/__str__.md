## `__str__() -> str`

#### Description:
This method returns a string representation of the object. It belongs to the class `Edge` and is used to provide a human-readable representation of an instance of the `Edge` class.

#### Parameters:
This method does not take any parameters.

#### Returns:
- `str`: A string representation of the object.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
edge = Edge(source='A', target='B', weight=5)
result = str(edge)
print(result)  # Output: "[Edge -> source: A, target: B, weight: 5]"
```

#### How it Works:
The `__str__` method first gets the class name of the object using the `type(self).__name__` expression and assigns it to the variable `clazz`. 

Next, it iterates over the attributes of the object using the `vars(self).items()` expression. It filters the attributes based on whether they are present in the `_printable_attr` list. For each attribute, it creates a string in the format `"{attribute_name}: {attribute_value}"` and adds it to the `properties` list.

Then, it joins the elements of the `properties` list using a comma as a separator and assigns the resulting string to the `properties` variable.

Finally, it returns a string in the format `"[{clazz} -> {properties}]"`, which represents the object's class name followed by the attributes and their values.

#### Dependencies:
This method does not have any dependencies.