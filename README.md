# ProductsManagementClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.5.

Aplikacja frontowa w Angularze połączona z REST API (`RestApi`), umożliwiająca przeglądanie listy produktów, wyszukiwanie po nazwie oraz dodawanie nowych pozycji.

## Wymagania
- Node.js (LTS) oraz Angular CLI

Product: interfejs odwzorowujący ProductDto, z którego mapowane są dane
ProductService: Warstwa komunikacji między aplikacją kliencką, a rest api

Komponenty:
ProductFormComponent: formularz dodawania nowego produktu (kod, nazwa, cena), prosta walidacja po stronie klienta.
ProductListComponent: prezentacja produktów w tabeli, wyszukiwanie/filtrowanie po nazwie, czyszczenie filtra oraz obsługa stanów ładowania i błędów.
