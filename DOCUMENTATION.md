# CRUD API DOCUMENTATION

This is a detailed documentation for the CRUD API task built using JavaScript.

### APIs
1. Create a Person
**Endpoint:** `POST /api`

**Request:**

```json

{
  "name": "Daniel Van",
  "age": 67,
  "email": "danvan@gmail.com"
}
```
Sample success response:

```json
{
    "data": {
        "name": "Daniel Van",
        "age": 67,
        "email": "danvan@gmail.com",
        "_id": "6501e6707972c515d5625b09",
        "__v": 0
    },
    "message": "Daniel Van created",
    "status": 0
}
```
Sample error response:

```json
{
    "data": {},
    "error": "Error: Key: 'Person.Name' Error:Field validation for 'Name' failed on the 'required' tag\nKey: 'Person.Location' Error:Field validation for 'Location' failed on the 'required' tag\nKey: 'Person.Title' Error:Field validation for 'Title' failed on the 'required' tag",
    "status": 1,
  
}
```
### 2. Retrieve all persons

**Endpoint:** `GET /api`

**Request:**

```json
{}
```

**Sample success response:**

```json
{
    "data": [
        {
            "_id": "6501e02460c9128529caef29",
            "name": "Oge Okoye",
            "age": 44,
            "email": "ogeokoye@gmail.com",
            "__v": 0
        },
        {
            "_id": "6501e6707972c515d5625b09",
            "name": "Daniel Van",
            "age": 67,
            "email": "danvan@gmail.com",
            "__v": 0
        }
    ],
    "message": "All persons fetched",
    "status": 0
}
```

**Sample error response:**

```json
{
    "data": {},
    "error": "Error fetching persons: mongo: no documents in result",
    "status": 1,
  
}
```

### 3. Retrieve a single person

**Endpoint:** `GET /api/:id`

**Request:**

```json
{}
```

**Sample success response:**

```json
{
    "data": {
        "_id": "6501e6707972c515d5625b09",
        "name": "Daniel Van",
        "age": 67,
        "email": "danvan@gmail.com",
        "__v": 0
    },
    "message": "Details found",
    "status": 0
}
```

**Sample error response:**

```json
{
    "data": {},
    "message": "Error: Cast to ObjectId failed for value \"6501e6707972c515d5625b0\" (type string) at path \"_id\" for model \"user\"",
    "status": 1
}
```

### 4. Update a person

**Endpoint:** `PUT /api/:id`

**Request:**

```json
{
    "name": "Daniel Lopez",
    "age": 59,
    "email": "danvan@gmail.com"
}
```

**Sample success response:**

```json
{
    "data": {
        "_id": "6501e6707972c515d5625b09",
        "name": "Daniel Lopez",
        "age": 59,
        "email": "danvan@gmail.com",
        "__v": 0
    },
    "message": "6501e6707972c515d5625b09 has been updated",
    "status": 0
}
```

**Sample error response:**

```json
{
    "data": {},
    "message": "6501e6707972c515d5625b05 does not exist",
    "status": 1
}
```

### 5. Delete a person

**Endpoint:** `DELETE /api/:id`

**Request:**

```json
{}
```

**Sample success response:**

```json
{
    "message": "64ff2b1db54df90375eee62d deleted",
    "status": 0
}
```

**Sample error response:**

```json
{
    "message": "64ff2cccb98a089abef97f6d does not exist",
    "status": 1
}
```

## Known Limitations/Assumptions

- Two different individuals can have the same name. 
- Only basic input validation is implemented.
- No solid athentication or authurization was done

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/oputaolivia/hng-task-2.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
node index.js / nodeom index.js
```