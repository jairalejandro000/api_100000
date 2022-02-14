'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlumnosSchema extends Schema {
  up () {
    this.create('alumnos', (table) => {
      table.increments()
      table.string('nombre')
      table.string('matricula')
      table.integer('edad')
      table.integer('grupo')
      table.string('seccion')
      table.timestamps()
    })
  }

  down () {
    this.drop('alumnos')
  }
}

module.exports = AlumnosSchema
