def busca(lista, elem):
    """Retorna o Indice elem se ele estiver na lista ou None, caso o contrario"""
    for i in range(len(lista)):
        if lista[i] == elem:
            return i
    return None

lista_estranha = [8, "5", 32,   "python", 11]
elemento = 50

indice = busca(lista_estranha, elemento)
if indice is not None:
    print("O indice do elemento {} é {}".format(elemento, indice))   
else:
    print("O elemento {} não se encontra na lista".format(elemento))