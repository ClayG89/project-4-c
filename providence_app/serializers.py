from rest_framework import serializers
from .models import Truck, Load, Dispatch

class TruckSerializer(serializers.ModelSerializer):
    class Meta:
        model = Truck
        fields = ('id', 'name', 'trailertype', 'trailernum',
         'hours', 'Phone', 'trucknum', 'drivernum', 'email')

class LoadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Load
        fields = ('id', 'loadnum', 'pickupnum', 'deliverynum', 
        'pickuptime', 'deliverytime', 'rate', 'miles', 
        'pickuploc', 'deliveryloc', 'droppick', 'dropdel')

class DispatchSerializer(serializers.ModelSerializer):
    loadinfo = LoadSerializer()
    truckinfo = TruckSerializer()
    class Meta:
        model = Dispatch
        fields = ('id', 'truckinfo', 'loadinfo')