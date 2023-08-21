Что сделать?

1. Если Windows - установить WSL
2. Установить NVM и через эту утилиту поставить одну из последних версий NodeJs
   1. Как установите nvm -> `nvm install --lts` или `nvm install 20`
3. Если у вас скачан готовый проект, тогда `npm i`
4. Если нужно с нуля проинициализировать проект:
   1. `npm init -y`
   2. `git init`
   3. `npx gitignore node`
   4. `npx eslint --init`
   5. Прописать стартовый скрипт `"start": "node app.js"`
5. Чтобы Eslint форматировал и линтил код по сохранению, нужно прописать в `setting.json` (Ctrl+Shift+P) следующие строчки:
```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true,
}
```
