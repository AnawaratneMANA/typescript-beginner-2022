let employee: {
    id: number,
    name?: string
} = {id: 1, }
employee.name = 'Akash';

employee.id = 0; // This shouldn't be valid.
