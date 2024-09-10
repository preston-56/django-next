from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

class ChartDataTests(APITestCase):
    def test_candlestick_data(self):
        response = self.client.get(reverse('candlestick-data'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('data', response.data)
        self.assertIsInstance(response.data['data'], list)

    def test_line_chart_data(self):
        response = self.client.get(reverse('line-chart-data'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('labels', response.data)
        self.assertIn('data', response.data)
        self.assertIsInstance(response.data['labels'], list)
        self.assertIsInstance(response.data['data'], list)

    def test_bar_chart_data(self):
        response = self.client.get(reverse('bar-chart-data'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('labels', response.data)
        self.assertIn('data', response.data)
        self.assertIsInstance(response.data['labels'], list)
        self.assertIsInstance(response.data['data'], list)

    def test_pie_chart_data(self):
        response = self.client.get(reverse('pie-chart-data'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('labels', response.data)
        self.assertIn('data', response.data)
        self.assertIsInstance(response.data['labels'], list)
        self.assertIsInstance(response.data['data'], list)