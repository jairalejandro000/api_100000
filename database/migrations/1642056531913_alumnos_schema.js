'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlumnosSchema extends Schema {
  up () {
    this.create('alumnos', (table) => {
      table.increments()
      table.string('nombre', 50).notNullable()
      table.string('matricula', 10).notNullable()
      table.integer('edad', 2).notNullable()
      table.integer('grupo', 1).notNullable()
      table.string('seccion', 1).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('alumnos')
  }
}

module.exports = AlumnosSchema
