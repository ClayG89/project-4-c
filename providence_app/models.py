from django.db import models
from phone_field import PhoneField


class Truck(models.Model):
    name = models.CharField(max_length=100)
    trailertype = models.CharField(max_length=100)
    trailernum = models.IntegerField()
    hours = models.IntegerField()
    Phone = PhoneField(blank=True, help_text='Contact phone number')
    trucknum = models.IntegerField()
    drivernum = models.IntegerField()
    email = models.EmailField()

    def __str__(self):
        return self.name



class Load(models.Model):
    loadnum = models.IntegerField()
    pickupnum = models.IntegerField()
    deliverynum = models.IntegerField()
    pickuptime = models.DateTimeField()
    deliverytime = models.DateTimeField()
    rate = models.DecimalField(max_digits=7, decimal_places=2)
    miles = models.IntegerField()
    pickuploc = models.CharField(max_length=100)
    deliveryloc = models.CharField(max_length=100)
    droppick= models.BooleanField(default=False)
    dropdel= models.BooleanField(default=False)

    def __str__(self):
        return str(self.loadnum)

   

class Dispatch(models.Model):
    truckinfo = models.ForeignKey(
        Truck, on_delete=models.CASCADE, related_name='dispatch')
    loadinfo = models.ForeignKey(
        Load, on_delete=models.CASCADE, related_name='dispatch')


    def __str__(self):
        return str(self.truckinfo)
