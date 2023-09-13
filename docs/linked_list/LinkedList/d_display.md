## `display() -> None`

#### Description:
This method performs the action of printing the elements of the linked list in a specific format. It is used to display the elements of the linked list. This method belongs to the class LinkedList.

#### Parameters:
This method does not take any parameters.

#### Returns:
- `None`: This method does not return any value.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
linked_list = LinkedList()
linked_list.add(1)
linked_list.add(2)
linked_list.add(3)
linked_list.display()

# Output:
# 1 -> 2 -> 3
```

#### How it Works:
- Initialize an empty list called `nodes`.
- Set the `current_node` variable to the head of the linked list.
- Iterate through the linked list using a while loop until `current_node` is None.
  - Append the data of the current node to the `nodes` list.
  - Update the `current_node` to the next node.
- Join the elements in the `nodes` list into a string separated by ' -> ' using the `join` method and the `map` function to convert each element to a string.
- Print the resulting string.

#### Dependencies:
This method does not have any dependencies.