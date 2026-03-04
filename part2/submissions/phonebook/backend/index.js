const express = require('express');
const app = express();
app.use(express.json());

let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Default entry page</h1>');
});

app.get('/api/persons', (request, response) => {
    response.json(persons);
});

app.get('/info', (request, response) => {
    response.send(`
        <div>
            <p>Phonebook has info for ${persons.length} people</p>
            <p>${new Date()}</p>
       </div> `)
});

app.get('/api/persons/:id', (request, response) => {
    const person = persons.find(p => p.id === request.params.id);
    if (person) {
        response.json(person);
    } else {
        response.status(404).send();
    }
    
});

app.delete('/api/persons/:id', (request, response) => {
    persons = persons.filter(p => p.id !== request.params.id);
    response.status(204).end();
});

app.post('/api/persons', (request, response) => {
    const body = request.body;

    console.log('body: ', body);
    if (!body.name || !body.number) {
        return response.status(400).json({
            error: `person's name or phone number missing`
        });
    } else {
        if (persons.find(p => p.name === body.name)) {
            return response.status(400).json({
                error: `name must be unique`
            });
        }
        
        const id = Math.floor(Math.random() * 9999999999999);
        const newPerson = { id: id, name: body.name, number: body.number };
        persons = persons.concat(newPerson);
        response.json(newPerson);
    }
})

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on the port ${PORT}`);
});