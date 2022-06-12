# REST API BerBuah App - Articles

Hello, this is source code of REST API for BerBuah APP for GET Fruits Articles.

## **Table Of Contents**
- [API Specification](#api-specification)
    - [Get Articles By ID](#get-articles-by-id)
    - [Search Articles By Name](#search-articles-by-name)
    - [List Articles](#list-articles)
    - [List Articles By Name](#list-articles-by-name)
- [How to Use](#how-to-use)

## API Specification

### Get Articles By ID

Request :

- Method : GET
- Endpoint : `/articles/{id_article}`
- Header :
  - Accept : application/json
- Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "string, unique",
      "nama": "string",
      "nama_latin": "string",
      "deskripsi": "string",
      "gambar": "string",
      "manfaat": {
        "0": "string",
        "1": "string",
        "2": "string",
        "3": "string",
        "4": "string",
        "5": "string"
      },
      "nutrisi": {
        "air": "number",
        "lemak": "number",
        "gula": "number",
        "protein": "number",
        "karbohidrat": "number",
        "kalori": "number",
        "serat": "number"
      }
    },
    {
      "id": "string, unique",
      "nama": "string",
      "nama_latin": "string",
      "deskripsi": "string",
      "gambar": "string",
      "manfaat": {
        "0": "string",
        "1": "string",
        "2": "string",
        "3": "string",
        "4": "string",
        "5": "string"
      },
      "nutrisi": {
        "air": "number",
        "lemak": "number",
        "gula": "number",
        "protein": "number",
        "karbohidrat": "number",
        "kalori": "number",
        "serat": "number"
      }
    }
  ]
}
```

### Search Articles By Name

Request :

- Method : GET
- Endpoint : `/articles/search?buah={buah_name}`
- Header :
  - Accept : application/json
- Query Param :
  - buah : string
- Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "string, unique",
      "nama": "string",
      "nama_latin": "string",
      "deskripsi": "string",
      "gambar": "string",
      "manfaat": {
        "0": "string",
        "1": "string",
        "2": "string",
        "3": "string",
        "4": "string",
        "5": "string"
      },
      "nutrisi": {
        "air": "number",
        "lemak": "number",
        "gula": "number",
        "protein": "number",
        "karbohidrat": "number",
        "kalori": "number",
        "serat": "number"
      }
    },
    {
      "id": "string, unique",
      "nama": "string",
      "nama_latin": "string",
      "deskripsi": "string",
      "gambar": "string",
      "manfaat": {
        "0": "string",
        "1": "string",
        "2": "string",
        "3": "string",
        "4": "string",
        "5": "string"
      },
      "nutrisi": {
        "air": "number",
        "lemak": "number",
        "gula": "number",
        "protein": "number",
        "karbohidrat": "number",
        "kalori": "number",
        "serat": "number"
      }
    }
  ]
}
```

### List Articles

Request :

- Method : GET
- Endpoint : `/articles`
- Header :
  - Accept : application/json
- Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "string, unique",
      "nama": "string",
      "nama_latin": "string",
      "deskripsi": "string",
      "gambar": "string",
      "manfaat": {
        "0": "string",
        "1": "string",
        "2": "string",
        "3": "string",
        "4": "string",
        "5": "string"
      },
      "nutrisi": {
        "air": "number",
        "lemak": "number",
        "gula": "number",
        "protein": "number",
        "karbohidrat": "number",
        "kalori": "number",
        "serat": "number"
      }
    },
    {
      "id": "string, unique",
      "nama": "string",
      "nama_latin": "string",
      "deskripsi": "string",
      "gambar": "string",
      "manfaat": {
        "0": "string",
        "1": "string",
        "2": "string",
        "3": "string",
        "4": "string",
        "5": "string"
      },
      "nutrisi": {
        "air": "number",
        "lemak": "number",
        "gula": "number",
        "protein": "number",
        "karbohidrat": "number",
        "kalori": "number",
        "serat": "number"
      }
    }
  ]
}
```

### List Articles By Name

Urgent request from Mobile Developer

Request :

- Method : GET
- Endpoint : `/articles/buah/{nama_buah}`
- Header :
  - Accept : application/json
- Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "string, unique",
      "nama": "string",
      "nama_latin": "string",
      "deskripsi": "string",
      "gambar": "string",
      "manfaat": {
        "0": "string",
        "1": "string",
        "2": "string",
        "3": "string",
        "4": "string",
        "5": "string"
      },
      "nutrisi": {
        "air": "number",
        "lemak": "number",
        "gula": "number",
        "protein": "number",
        "karbohidrat": "number",
        "kalori": "number",
        "serat": "number"
      }
    },
    {
      "id": "string, unique",
      "nama": "string",
      "nama_latin": "string",
      "deskripsi": "string",
      "gambar": "string",
      "manfaat": {
        "0": "string",
        "1": "string",
        "2": "string",
        "3": "string",
        "4": "string",
        "5": "string"
      },
      "nutrisi": {
        "air": "number",
        "lemak": "number",
        "gula": "number",
        "protein": "number",
        "karbohidrat": "number",
        "kalori": "number",
        "serat": "number"
      }
    }
  ]
}
```

## How to Use

1. Select your folder or other place and open terminal
2. Clone repository with command:
   ```
    git clone https://github.com/andriefatah/berbuah-restful-api.git
   ```
3. Open Firebase Console
4. Click Add Project
5. Ketikkan Nama Project Baru atau klik project dari Google Cloud yang sudah tersedia
6. Anda dapat memilih disable fitur Google Analytics for this project (Optional)
7. Go to Project settings, in Your Apps, select web app
8. Register your App 
9. Open the project folder from the repository that you cloned in Terminal/Bash Terminal and type command:
    ```
    npm install firebase
    ```
10. Back to Firebase Tab, click continue to console.
11. Go to Service Accounts Menu.
12. Click Node.js option in Admin SDK configuration snippet and click Generate new private key
13. Save file.json & put to your project folder.
14. Back to option number 9, after installing firebase, type command:
    ```
    firebase init
    ```
15. Follow instruction below:
    ```
    Are you ready to proceed? Y
    ```
16. Select Functions option with space and Enter to proceed.
17. Follow instruction below:
    ```
    ? What language would you like to use to write Cloud Functions? (Use arrow keys)
    > JavaScript (selected)
    TypeScript

    ? Do you want to use ESLint to catch probable bugs and enforce style? (y/N) n
    ? Do you want to use ESLint to catch probable bugs and enforce style? No
    ? File functions/package.json already exists. Overwrite? Yes
    +  Wrote functions/package.json
    ? File functions/index.js already exists. Overwrite? No
    i  Skipping write of functions/index.js
    ? File functions/.gitignore already exists. Overwrite? No
    i  Skipping write of functions/.gitignore
    ? Do you want to install dependencies with npm now? Yes
    ```
18. Move to Functions Folder
    ```
    cd functions
    ```
19. Install library
    ```
    npm install express capitalize-the-first-letter body-parser cors
    ```
20. You can try this REST API using Firebase Emulator (In Functions Folder)
    ```
    npm run serve
    ```
20. Wait until it's finished, you can show your http function (example)
    ```
    i functions: Watching "G:\app\rest-api-capstone\functions" for Cloud Functions...
    + functions[us-central1-articles]: http function initialized (http://localhost:5001/lustrous-maxim-349908/us-central1/articles).
    ```
21. Open Postman
22. Select GET Method and put http function link in text box
23. Click Send, and you can see data
