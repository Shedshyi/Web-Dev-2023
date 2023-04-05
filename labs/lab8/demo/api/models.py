from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255)

    def to_json(self):
        return{
            'id' : self.id,
            'name' : self.name
        }



class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField(default=1000)
    description = models.TextField()
    count = models.IntegerField(default=1)
    is_active = models.BooleanField(default=True)
    categoryId = models.ForeignKey(Category, on_delete=models.CASCADE)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count' : self.count,
            'is_active' : self.is_active,
            # 'categoryId':self.categoryId
        }

