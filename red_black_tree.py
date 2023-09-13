class Node:
    RED = True
    BLACK = False
    
    def __init__(self, key, color=RED):
        self.key = key
        self.color = color
        self.left = None
        self.right = None
        self.parent = None

class RedBlackTree:
    def __init__(self):
        self.NIL_LEAF = Node(None, color=Node.BLACK)
        self.root = self.NIL_LEAF

    def is_red(self, node):
        if not node:
            return False
        return node.color == Node.RED

    def left_rotate(self, x):
        y = x.right
        x.right = y.left
        if y.left != self.NIL_LEAF:
            y.left.parent = x
        y.parent = x.parent
        if x.parent is None:
            self.root = y
        elif x == x.parent.left:
            x.parent.left = y
        else:
            x.parent.right = y
        y.left = x
        x.parent = y

    def right_rotate(self, y):
        x = y.left
        y.left = x.right
        if x.right != self.NIL_LEAF:
            x.right.parent = y
        x.parent = y.parent
        if y.parent is None:
            self.root = x
        elif y == y.parent.left:
            y.parent.left = x
        else:
            y.parent.right = x
        x.right = y
        y.parent = x

    def insert(self, key):
        node = Node(key)
        if self.root == self.NIL_LEAF:
            self.root = node
            node.parent = None
            node.color = Node.BLACK
        else:
            self._insert_node(node)

    def _insert_node(self, node):
        # Basic binary tree insert
        y = None
        x = self.root
        while x != self.NIL_LEAF:
            y = x
            if node.key < x.key:
                x = x.left
            else:
                x = x.right

        node.parent = y
        if y is None:
            self.root = node
        elif node.key < y.key:
            y.left = node
        else:
            y.right = node

        # Set node's children to NIL_LEAF and color to RED
        node.left = self.NIL_LEAF
        node.right = self.NIL_LEAF
        node.color = Node.RED

        # Balance
        self._fix_insert(node)

    def _fix_insert(self, k):
        # Fix the rb tree
        while k.parent and self.is_red(k.parent):
            if k.parent == k.parent.parent.left:
                u = k.parent.parent.right
                if self.is_red(u):
                    k.parent.color = Node.BLACK
                    u.color = Node.BLACK
                    k.parent.parent.color = Node.RED
                    k = k.parent.parent
                else:
                    if k == k.parent.right:
                        k = k.parent
                        self.left_rotate(k)
                    k.parent.color = Node.BLACK
                    k.parent.parent.color = Node.RED
                    self.right_rotate(k.parent.parent)
            else:
                u = k.parent.parent.left
                if self.is_red(u):
                    k.parent.color = Node.BLACK
                    u.color = Node.BLACK
                    k.parent.parent.color = Node.RED
                    k = k.parent.parent 
                else:
                    if k == k.parent.left:
                        k = k.parent
                        self.right_rotate(k)
                    k.parent.color = Node.BLACK
                    k.parent.parent.color = Node.RED
                    self.left_rotate(k.parent.parent)
            if k == self.root:
                break
        self.root.color = Node.BLACK
