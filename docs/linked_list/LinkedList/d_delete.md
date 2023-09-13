## `delete(key: any) -> None`

#### Description:
This method deletes a node with a specific key from the linked list. It belongs to the class LinkedList.

#### Parameters:
- `key` (`any`): The key of the node to be deleted.

#### Returns:
- `None`: This method does not return any value.

#### Usage Cases:

```python
# Sample code to delete a node with key '4'
linked_list.delete(4)
```

#### How it Works:

The method starts by initializing a variable `current_node` with the head of the linked list. If the `current_node` is not None and its data is equal to the given key, the head is updated to the next node and the current node is deleted, then the method returns.

Otherwise, a variable `prev_node` is initialized to None. The method enters a loop where it traverses the linked list until it finds the node with the given key or reaches the end of the list. In each iteration, the `current_node` is updated to the next node and the `prev_node` is updated to the current node.

If the `current_node` is None, i.e., the end of the list is reached and the key is not found, the method returns.

If the key is found, the `prev_node` is connected to the next node of the `current_node`, effectively removing the `current_node` from the list. Finally, the `current_node` is deleted.

#### Dependencies:
This method does not have any dependencies.