from django.http import JsonResponse


def send_fruits(request):
    fruits = [
        {'name': 'Apfel', 'gewicht': 150, 'farbe': 'rot'},
        {'name': 'Banane', 'gewicht': 120, 'farbe': 'gelb'},
        {'name': 'Orange', 'gewicht': 200, 'farbe': 'orange'},
        {'name': 'Kiwi', 'gewicht': 75, 'farbe': 'grün'},
        {'name': 'Traube', 'gewicht': 5, 'farbe': 'violett'},
    ]

    return JsonResponse(fruits, safe=False)