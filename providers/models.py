from django.db import models

# Create your models here.

class Provider(models.Model):

    CATEGORIE = (
        ('P', 'PetFood'),
        ('T', 'Toys'),
    )

    company = models.CharField(max_length=255, blank=False, null=False)
    email = models.EmailField(max_length=255, blank=False, null=False)
    categorie = models.CharField(max_length=1, choices=CATEGORIE, blank=False, null=False, default='P')

    def __str__(self): 
        return self.company