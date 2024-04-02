# nodeash-sql Server

nodeash-sql is a lightweight Node.js Sql Connection package for running servers efficiently.

## Installation

You can install nodeash-sql via npm:

```bash
npm install nodeash-sql
```

# Usage
```bash

import { SQLClient } from 'nodeash-sql';


const DBConfig = {
    name :process.env.databaseName,
    username :  process.env.username,
    password :  process.env.password,
    hostName : process.env.hostname,
}

const { DBWrite, DBRead, checkDatabaseConnection } = await SQLClient(DBConfig);

const checkSqlConnection = await checkDatabaseConnection()



```

Contributing
Contributions are welcome! If you find any issues or would like to contribute to nodeash-sql, please feel free to open an issue or submit a pull request on the GitHub repository.

License
This project is licensed under the MIT License - see the LICENSE file for details.

