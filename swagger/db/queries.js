exports.QUERIES = {
  AUDIT_QUERY: `INSERT INTO 
                app_audit(audit_action , audit_data   , audit_status , audit_error , audit_by , audit_on)
                VALUES ($1,$2,$3,$4,$5,$6);
  `
}
