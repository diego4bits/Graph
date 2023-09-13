## `__init__(name: str) -> None`

#### Description:
This method initializes a new instance of the User class. It sets the name attribute of the user.

#### Parameters:
- `name` (`str`): The name of the user.

#### Returns:
- `None`: This method does not return any value.

#### Usage Cases:

```python
# Example of creating a new User instance
user1 = User("John")
```

#### How it Works:
The method initializes a new instance of the User class by setting the name attribute to the provided name value. It uses the `super()` function to call the constructor of the parent class.