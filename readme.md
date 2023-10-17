# BattleBitRemastered-Api
This wrapper contains easy-to-use access to BattleBits public api.

Currently suppported methods:
- Servers/GetServerList

## Table of Contents
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites
At least Node 18 is required, as this wrapper uses node 18's [internal fetch](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#fetch)

### Installation
To install run

```
npm install battlebit-remastered-ts-api
```

### Usage
The main point of entry is the client, which can be initialized as follows:

```
const client = new BBRClient();
```

From there, you can call the getServers method, which returns the list of servers.

```
//Types are also exposed and documented for easy navigation
const servers: Servers = await client.getServers();
```


## Contributing
Found any bugs? Please create a ticket in the Issues section

Want to add an improvement? Please create a pull request with a proper description of what changed and why.

## License
The source code for this wrapper is licensed under the MIT license, which you can find in the [MIT-LICENSE.txt](/mit-license.txt) file.


