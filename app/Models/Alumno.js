'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Alumno extends Model {
    static get hidden () {
        return ['id']
    }
}

module.exports = Alumno
