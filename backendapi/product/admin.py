from django.contrib import admin

# Register your models here.

from .models import *

admin.site.register(ProductImage)
admin.site.register(Product)