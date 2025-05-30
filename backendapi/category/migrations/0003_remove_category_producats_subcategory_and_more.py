# Generated by Django 5.2 on 2025-05-08 17:06

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('category', '0002_initial'),
        ('product', '0002_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='category',
            name='producats',
        ),
        migrations.CreateModel(
            name='SubCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('subcategory_image', models.ImageField(blank=True, null=True, upload_to='subcategory/')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='subcategories', to='category.category')),
                ('products', models.ManyToManyField(blank=True, related_name='products', to='product.product')),
            ],
        ),
        migrations.AddField(
            model_name='category',
            name='sub_categories',
            field=models.ManyToManyField(blank=True, related_name='subcategories', to='category.subcategory'),
        ),
    ]
