# Welcome to nodepostgre!
Это приложение является простой реализацией REST API на базе NodeJS и PostgreSQL

### Перед тем, как протестировать приложение, воспользуйтесь командой, указанной ниже для установки всех зависимостей
	`npm i`
Для запуска приложения необходимо установить PostgreSQL, так же на основе файла `db.sql` в папке `db` нужно создать таблицы в локальной базе данных, к которым будет выполнено подключение, на основе указанных данных в файле `db.js`.
## Пример использования приложения
Запуск приложения выполняется командой `npm run dev`
Нужно с помощью Postman или Insomnia выполнить запросы к api.
1) Создание пользователя - `POST` запрос на 
`localhost:8080/api/user`
 и в `body` запроса указать данные, которые соответствуют таблице `person`
`{ "name": "alex", "surname": "alexa" }`
Получение конкретного юзера - `GET` запрос на 
`localhost:8080/api/${id}`
Получение списка всех юзеров - `GET` запрос на 
`localhost:8080/api/user`
Удаление конкретного юзера - `DELETE` запрос на
`localhsot:8080/api/user/${id}`

2) Создание поста - `POST` запрос на 
`localhost:8080/api/post` 
и в `body` запроса указать данные, которые соответствуют таблице `post`
`{ "title": "hello", "content": "world", "personId": 1 }`
Получение постов конкретного пользователя
`GET` запрос с указанием id существующего юзера в query на 
`localhost:8080/api/post?id=1`
