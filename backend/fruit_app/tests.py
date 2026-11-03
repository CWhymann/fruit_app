from django.test import TestCase


class FruitsApiTest(TestCase):
    def test_send_fruits_returns_list(self):
        response = self.client.get('/fruits/')
        self.assertEqual(response.status_code, 200)

        data = response.json()
        self.assertEqual(len(data), 5)
        self.assertEqual(set(data[0]), {'name', 'gewicht', 'farbe'})

    def test_cors_header_in_debug(self):
        response = self.client.get('/fruits/', HTTP_ORIGIN='http://127.0.0.1:5500')
        self.assertEqual(response.status_code, 200)