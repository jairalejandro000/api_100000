'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
 const Factory = use('Factory')

 Factory.blueprint('App/Models/Persona', (faker) => {
   return {
     apodo: faker.username(),
     nombre: faker.name(),
     edad: faker.age(),
     direccion: faker.address()
   }
 })
 Factory.blueprint('App/Models/Alumno', (faker) => {
    return {
      nombre: faker.name(),
      matricula: faker.string(),
      edad: faker.age(),
    }
  })
