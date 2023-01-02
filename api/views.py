from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import StudentSerializer
from api.models import Student

@api_view(['GET'])
def getData(request):
    student=Student.objects.all()
    serialzer=StudentSerializer(student,many=True)
    return Response(serialzer.data)
@api_view(['POST'])
def setData(request):
    serialzer=StudentSerializer(data=request.data)
    if serialzer.is_valid():
        serialzer.save()

    return Response(serialzer.data)