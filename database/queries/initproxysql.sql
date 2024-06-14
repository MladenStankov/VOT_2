INSERT INTO mysql_servers (hostgroup_id, hostname, port, max_connections) VALUES (0, 'mysql-source', 3306, 1000);
INSERT INTO mysql_servers (hostgroup_id, hostname, port, max_connections) VALUES (1, 'mysql-replica', 3306, 1000);

INSERT INTO mysql_users (username, password, default_hostgroup) VALUES ('root', 'password', 0);

LOAD MYSQL SERVERS TO RUNTIME;
SAVE MYSQL SERVERS TO DISK;

LOAD MYSQL USERS TO RUNTIME;
SAVE MYSQL USERS TO DISK;

INSERT INTO mysql_query_rules (rule_id, match_pattern, destination_hostgroup, apply) VALUES (1, '^SELECT.*FOR UPDATE', 0, 1);
INSERT INTO mysql_query_rules (rule_id, match_pattern, destination_hostgroup, apply) VALUES (2, '^SELECT', 1, 1);
INSERT INTO mysql_query_rules (rule_id, match_pattern, destination_hostgroup, apply) VALUES (3, '^(INSERT|UPDATE|DELETE|REPLACE|CREATE|DROP|ALTER|TRUNCATE|RENAME|GRANT|REVOKE|FLUSH|LOAD|CALL|ANALYZE|OPTIMIZE|REPAIR|INSTALL|UNINSTALL|SET)', 0, 1);

LOAD MYSQL QUERY RULES TO RUNTIME;
SAVE MYSQL QUERY RULES TO DISK;