'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonasSchema extends Schema {
  up () {
    this.create('personas', (table) => {
      table.increments()
      table.string('apodo')
      table.string('nombre')
      table.integer('edad')
      table.string('direccion')
      table.integer('numero')
      table.timestamps()
    })
  }

  down () {
    this.drop('personas')
  }
}

module.exports = PersonasSchema
