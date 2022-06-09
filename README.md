# REST API BerBuah App - Articles

Hello,

Table Of Contents

- [API Specification](#API-Specification)
- [How to Use](#How-to-Use)

## API Specification

### Get Articles By ID

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

### Get Articles By Name

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

## How to Use
