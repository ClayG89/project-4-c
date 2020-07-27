from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('trucks', views.TruckView)
router.register('loads', views.LoadView)
router.register('dispatchs', views.DispatchView)

urlpatterns = [
    path('', include(router.urls)),
]