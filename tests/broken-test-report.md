Broken test #1
Root cause:   Неправильный текст placeholder — в коде написано "User Name" 
              (с пробелом), а на реальной странице placeholder называется "Username"
Fix:          Изменила getByPlaceholder("User Name") на getByPlaceholder("Username")
How I verified: Запустила npx playwright test tests/broken-tests.spec.ts --project=chromium
              — тест прошёл

Broken test #2
Root cause:   Текст ожидаемого сообщения об ошибке был неполным — в коде написано
              "Username and password do not match", а реальное сообщение на странице:
              "Epic sadface: Username and password do not match any user in this service"
Fix:          Заменила текст в toHaveText() на точное сообщение со страницы
How I verified: Запустила тест с --headed и визуально проверила текст ошибки,
              затем тест прошёл

Broken test #3
Root cause:   Пропущено ключевое слово await перед page.locator(...).click() —
              Playwright начал проверять badge до того как клик успел выполниться
Fix:          Добавила await перед page.locator(...).click()
How I verified: Запустила тест — прошёл стабильно