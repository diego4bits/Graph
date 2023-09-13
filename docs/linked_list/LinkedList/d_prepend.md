## `prepend(data: Any) -> None`

#### Description:
This method adds a new node containing the given data at the beginning of the linked list. This method belongs to the class LinkedList.

#### Parameters:
- `data` (`Any`): The data to be added to the linked list.

#### Returns:
- `None`: This method does not return anything.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
linked_list = LinkedList()
linked_list.prepend(10)
linked_list.prepend(20)
linked_list.prepend(30)
print(linked_list)

# Output:
# 30 -> 20 -> 10
```

#### How it Works:
1. Create a new node with the given data.
2. Set the 'next' pointer of the new node to point to the current head of the linked list.
3. Set the head of the linked list to the new node.

#### Dependencies:
This method does not have any dependencies.