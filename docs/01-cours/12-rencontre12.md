# classes et objets

## Introduction

Jusqu'ici on a eu du code et des données. L'idée d'une classe est
- de regrouper des données et du code
- de donner un nom à ce regroupement
- de le rendre réutilisable

## Première classe

On va créer une classe qui représente un point dans un plan. On va pouvoir créer des points, les déplacer, les afficher, etc.

```python   

class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def deplace(self, dx, dy):
        self.x += dx
        self.y += dy

    def affiche(self):
        print(f"({self.x}, {self.y})")
```

## Exercices

### Exercice 

