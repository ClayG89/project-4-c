from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TruckSerializer, LoadSerializer, DispatchSerializer
from .models import Truck, Load, Dispatch


class TruckView(viewsets.ModelViewSet):
    queryset = Truck.objects.all()
    serializer_class = TruckSerializer

class LoadView(viewsets.ModelViewSet):
    queryset = Load.objects.all()
    serializer_class = LoadSerializer

class DispatchView(viewsets.ModelViewSet):
    queryset = Dispatch.objects.all()
    serializer_class = DispatchSerializer
