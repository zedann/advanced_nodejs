const events = require('events');
const Audit = require('../models/audit.model');
const { QUERIES } = require('../db/queries');
const { dbQuery } = require('../db/db.connection');
const { throws } = require('assert');

const emitter = new events.EventEmitter()

const AUDIT_EVENT = "audit"

emitter.on(AUDIT_EVENT, async function(audit) {

  console.log("auditing ... ", JSON.stringify(audit))

  // save into db
  try {

    const values = [audit.auditAction, JSON.stringify(audit.data), audit.status, JSON.stringify(audit.error), audit.auditBy, audit.auditOn];

    const queryStr = QUERIES.AUDIT_QUERY;

    await dbQuery(queryStr, values);

  } catch (error) {

    console.error(error);

    throw error;

  }





});


exports.prepareAudit = function(auditAction, data, status, error, auditBy, auditOn) {

  const auditObj = new Audit(auditAction, data, status, error, auditBy, auditOn)

  console.log("prepare")

  emitter.emit(AUDIT_EVENT, auditObj)
}
