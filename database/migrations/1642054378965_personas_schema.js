'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonasSchema extends Schema {
  up () {
    this.create('personas', (table) => {
      table.increments()
      table.string('apodo', 50).notNullable()
      table.string('nombre', 50).notNullable()
      table.integer('edad', 2).notNullable()
      table.string('direccion', 100).notNullable()
      table.integer('numero', 10).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('personas')
  }
}

module.exports = PersonasSchema
