## `main`

#### Description:
This code snippet performs a series of actions related to connecting and interacting with users in a social network. It creates instances of the `User` class, establishes connections between users using instances of the `Friend` and `Enemy` classes, and performs various checks to verify the connections between users.

#### Important info:
This code snippet demonstrates the functionality of the `User` class and its methods for connecting and interacting with other users.

#### Usage :

- This code snippet is used to demonstrate the functionality of the `User` class and its methods.
- This code snippet can be used as a reference for implementing similar user connection features in a social networking application.
- This code snippet can be used for testing and verifying the correctness of the `User` class and its methods.

#### How it Works:

1. Two instances of the `User` class, `user1` and `user2`, are created with the names "Paco" and "Juan" respectively.
2. The `print` function is used to display the details of `user1` and `user2`.
3. An instance of the `Friend` class, `friend`, is created.
4. The `connect_right` method of `user1` is called, passing `user2` and `friend` as arguments, to establish a connection between `user1` and `user2`.
5. The `is_connected` method is used to check if `user1` is connected to `user2` and if `user2` is connected to `user1`. The results are printed.
6. Two additional instances of the `User` class, `user3` and `user4`, are created with the names "Paco" and "Iniesta" respectively.
7. An instance of the `Enemy` class, `enemy`, is created.
8. The `connect` method of `user3` is called multiple times, passing `user4`, `user3`, and `user2` as arguments, along with `friend` and `enemy` instances, to establish various connections between users.
9. The `is_connected` method is used to check the connections between `user3`, `user4`, and `user2`. The results are printed.
10. The `is_connected_by` method is used to check if `user1` is connected to `user2` by a `Friend` or an `Enemy`. The results are printed.
11. The `connections` method is called on `user3` to retrieve a dictionary of all the users connected to `user3` and their respective connections. The dictionary is then printed.
12. The `connections_by` method is called on `user3` to retrieve a list of all the users connected to `user3` by a `Friend`. The list is then printed.

#### Dependencies:
- `User`: Represents a user in a social network.
- `Friend`: Represents a friend connection between users.
- `Enemy`: Represents an enemy connection between users.