CHANGE MASTER TO MASTER_HOST='mysql-source', MASTER_USER='repl', MASTER_PASSWORD='repl_password', MASTER_LOG_FILE='mysql-bin.000001', MASTER_LOG_POS=0;

START SLAVE;