[![Build status](https://ci.appveyor.com/api/projects/status/8vo890axph6fkefy?svg=true)](https://ci.appveyor.com/project/IlyaDyakonov/containers)



# Домашнее задание к лекции «Контейнеры»

**Важно**: каждая задача выполняется в виде отдельного проекта с собственным GitHub репозиторием.

**Важно**: код должен проходить ESLint без ошибок.

**Важно**: тесты должны обеспечивать 100% покрытие тестируемых функций по строкам.

**Важно**: решения должны быть построены на базе [шаблона Webpack](/ci-template).

В личном кабинете на сайте [netology.ru](http://netology.ru/) в поле комментария к домашней работе вставьте ссылки на ваш GitHub-проекты.

---

## `Set`

### Легенда

Игрок может выбирать персонажей в команду на конкретный раунд исходя из их текущего состояния, уровня и стратегии игры. Нам необходимо не позволять ему добавлять в команду несколько раз одного и того же персонажа.

### Описание

Создайте класс `Team` с методами `add`, `addAll` и `toArray`. Класс должен хранить данные о персонажах команды в поле типа `Set`:
```javascript
class Team {
    constructor() {
        this.members = new Set();
    }
    ...
}
```

Метод `add` должен добавлять выбранного персонажа в команду (объект класса `Character`). При этом такой объект уже существует в команде - дублирования происходить не должно, должна генерироваться ошибка.

Метод `addAll` должен иметь возможность добавлять произвольное количество персонажей (используйте rest-parameters) в команду. При этом задвоения быть не должно, ошибка генерироваться **не должна**.

Метод `toArray` должен производить конвертацию `Set` в массив.

Не забудьте написать unit-тесты, которые обеспечивают 100% покрытие функций и классов, которые вы тестируете.

---

## Map

### Легенда

Вы решили упорядочить работу с ошибками в своём приложении, а именно ввести цетрализованно числовой код ошибки и её описание. И при генерации любых ошибок в коде приложения брать их из централизованного хранилища.

### Описание

Создайте свой класс `ErrorRepository` внутри которого храните `Map`, в котором ключ - это код ошибки (число), а значение - текстовое описание (человекочитаемое).

Реализуйте метод `translate(code)`, позволяющий по коду получить текст ошибки, а в случае отсутствия подобного кода возвращать строку `'Unknown error'`.

Не забудьте написать unit-тесты, которые обеспечивают 100% покрытие функций и классов, которые вы тестируете.

----

## Map (задача со звёздочкой)

**Важно**: данная задача не является обязательной 

### Легенда

Давать возможность пользователю кастомизировать внешний вид приложения - достаточно хорошая идея. Поэтому вы решили также реализовать поддержку этой функциональности в своей игре.

### Описание

У вас есть default'ные настройки, хранящиеся в `Map`'е:
1. `'theme': 'dark'` (другие возможные значения - `'light'`, `'gray'`);
1. `'music': 'trance'` (другие возможные значения - `'pop'`, `'rock'`, `'chillout'`, `'off'`);
1. `'difficulty': 'easy'` (другие возможные значения - `'normal'`, `'hard'`, `'nightmare'`).

Напишите класс `Settings`, который содержит:
1. Набор настроек по умолчанию - хранить в `Map`'е;
1. Набор пользовательских настроек (пользователь может установить конкретную настройку по имени и значению) - хранить в `Map`'е нужно только те настройки, которые пользователь установил;
1. Get'тер `settings`, который возвращает `Map`, полученный путём наложения пользовательских настроек, на default'ные.

Не забудьте написать unit-тесты, которые обеспечивают 100% покрытие функций и классов, которые вы тестируете.
