CREATE TABLE app_audit(
  audit_id BIGSERIAL NOT NULL,
  audit_action VARCHAR(100) NOT NULL,
  audit_data json NULL,
  audit_by VARCHAR(50) NOT NULL,
  audit_on TIMESTAMP NOT NULL,
  audit_status VARCHAR(20) ,
  audit_error json,

  PRIMARY KEY(audit_id)
)
