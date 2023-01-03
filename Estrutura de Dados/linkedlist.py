from node import Node

# sequencial = []
# sequencial.append(5)

class LinkedList:
    def __init__(self):
        self.head = None
        self._size = 0
    
    def append(self, elem):
        if self.head:
            # Inserção quando a lista ja possui elementos
            pointer = self.head
            while(pointer.next):
                pointer = pointer.next
            pointer.next = Node(elem)
        else:
            # Primeira Inserção
            self.head = Node(elem)
        self._size = self._size + 1
        
    def __len__(self):
        """Retorna o Tamanho da lista"""
        return self._size    

    def _getnode(self, index):
        pointer = self.head
        for i in range(index):
            if pointer:
                pointer = pointer.next
            else:
                raise IndexError("list index out of range")
        return pointer
        
    
    def set(self, index, elem):
        pass
    
    def __getitem__(self, index):
        # a = lista[6]
        pointer = self._getnode(index)
        if pointer:
            return pointer.data
        else:
             raise IndexError("list index out of range")
    
    def __setitem__ (self, index, elem):
        # lista[5] = 8
        pointer = self._getnode(index)
        if pointer:
            pointer.data = elem
        else:
            raise IndexError("list index out of range")
        
    def index(self, elem):
        """Retorna o indice do elemento na lista"""
        pointer = self.head
        i = 0   
        while(pointer):
            if pointer.data == elem:
                return i
            pointer = pointer.next
            i = i+1
        raise ValueError("{} is not in list".format(elem))

    def insert(self, index, elem):
        node = Node(elem)
        if index == 0:
            node.next = self.head
            self.head = node
        else: 
            pointer = self._getnode(index-1)
            node.next = pointer.next
            pointer.next = node    
        self._size = self._size + 1
        
    def remove(self, elem):
        if self.head == None:
            raise ValueError("{} is not in list".format(elem))
        elif self.head.data == elem:
            self.head = self.head.next
            self._size = self._size - 1
            return True
        else:
            ancestor = self.head
            pointer = self.head.next
            while(pointer):
                if pointer.data == elem:
                    #remove
                    ancestor.next = pointer.next
                    pointer.next = None        
                ancestor = pointer
                pointer = pointer.next
                self._size = self._size - 1
            return True        
        raise ValueError("{} is not in list".format(elem))    
    
    def __repr__(self):
        r = ""
        pointer = self.head
        while(pointer):
            r = r + str(pointer.data) + "->"
            pointer = pointer.next
        return r
    
    def __str__(self):
        return self.__repr__()
        

lista = LinkedList()
lista.append(7)
lista.append(80)
lista.append(56)
lista.append(32)
lista.append(17)   
