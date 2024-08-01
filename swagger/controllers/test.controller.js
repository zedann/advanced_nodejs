const { prepareAudit } = require('../audit/audit')
const { auditAction } = require('../audit/auditAction')

const dateFormat = () => new Date(Date.now()).toLocaleString()

exports.testMe = async (req, res, next) => {

  try {

    prepareAudit(auditAction.TEST_AUDIT, { message: "ok king" }, 200, null, "client", dateFormat())

    res.status(200).json({
      message: "testMe"
    })

  } catch (error) {

    prepareAudit(auditAction.TEST_AUDIT, null, 200, JSON.stringify(error), "client", dateFormat())

    res.status(500).json({
      error: "error message"
    })

  }

}
