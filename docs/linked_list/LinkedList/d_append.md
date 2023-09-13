## `append(data: Any) -> None`

#### Description:
This method appends a new node with the given data to the end of the linked list. It belongs to the class LinkedList.

#### Parameters:
- `data` (`Any`): The data to be stored in the new node.

#### Returns:
- `None`: This method does not return anything.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
linked_list = LinkedList()
linked_list.append(10)
linked_list.append(20)
linked_list.append(30)
```

#### How it Works:
1. Create a new instance of the Node class with the given data.
2. If the linked list is empty (self.head is None), set the new node as the head node and return.
3. If the linked list is not empty, traverse the linked list starting from the head node.
4. Find the last node in the linked list by checking if the next node is None.
5. Set the next node of the last node to the new node.

#### Dependencies:
This method does not have any dependencies.