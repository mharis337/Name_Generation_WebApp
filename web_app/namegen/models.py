from django.db import models


class Abbreviations(models.Model):
    abv = models.CharField(max_length=264, unique=True, primary_key=True)
    entity = models.CharField(max_length=264)
    asset_type = models.CharField(max_length=264)
    
    
    def __str__(self):
        return str(self.asset_type) + " " + str(self.entity) + " " + str(self.abv)

# Create your models here.
