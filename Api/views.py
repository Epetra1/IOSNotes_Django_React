from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from .serializers import *



# Create your views here.
@api_view(['GET'])
def getRoutes(request):

    
    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]

    
    return Response(routes)

@api_view(['GET','POST'])
def getNotes(request):
    if request.method == 'GET':
        notes = Note.objects.all()
        serializers = NoteSerializer(notes, many = True)
        return Response(serializers.data)
    if request.method == "POST":
        data = request.data
        note = Note.objects.create(
        body = data['body']
        )
        print('created is called ')

        serializers = NoteSerializer( data = data, many = False)
        return Response(serializers.data)


@api_view(['GET', 'PUT', 'DELETE'])
def getNote(request, pk):
    if request.method == 'GET':
        notes = Note.objects.get(id=pk)
        serializers = NoteSerializer(notes, many = False)
        return Response(serializers.data)
    if request.method == 'PUT':
        data = request.data
        note = Note.objects.get(id = pk)
        serializers = NoteSerializer(instance = note, data = data)
        if serializers.is_valid():
            serializers.save() 
        return Response(serializers.data)
    if request.method == 'DELETE':
        data = request.data
        note = Note.objects.get(id = pk)
        note.delete()
        return Response('note was deleted ')



