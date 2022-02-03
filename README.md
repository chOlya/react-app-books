## Общая информация 

Приложение написано с использованием React, Redux.
Документация https://developers.google.com/books/docs/v1/using.
Для авторизации запросов к API выбран способ с предоставлением API key https://developers.google.com/books/docs/v1/using#APIKey. Необходимо в папке проекта создать файл .env, где API key должен быть прописан в таком формате: REACT_APP_API_KEY=your_api_key.

##  Функционал

Реализован поиск книг с сортировками по категориям и по степени новизны.
relevance - возвращает результаты в порядке релевантности условий поиска (по умолчанию).
newest - возвращает результаты в порядке от самого новейшего.

Во время загрузки книг показывается preloader.

Найденные книги отображаются карточками с краткой информацией ( обложка, название книги, авторы, категория (в случае нескольких категорий отображается первая)). При клике на карточку происходит переход на детальную страницу (обложка, название, все категории, все аторы, описание).

Шаг пагинации равен 30. При клике на кнопку Load more загружается следующая часть найденных книг.

## Установка

Приложение использует node.js.

### `git clone https://github.com/chOlya/react-app-books`

Затем перейти в скаченный проект.

### `npm install`

Для запуска введите 

### `npm start`

Приложение будет запущено.

## Внешний вид приложения 

![Скриншот](https://github.com/chOlya/react-app-books/blob/master/screenshots/screen1.png)