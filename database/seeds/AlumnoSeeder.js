'use strict'

/*
|--------------------------------------------------------------------------
| AlumnoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class AlumnoSeeder {
  async run () {
    const alumnosArray = await Factory.model("App/Models/Alumno").createMany(99990);
  }
}

module.exports = AlumnoSeeder
