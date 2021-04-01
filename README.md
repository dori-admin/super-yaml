# super-yaml

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/super-yaml.svg)](https://npmjs.org/package/super-yaml)
[![Codecov](https://codecov.io/gh/doriaviram/super-yaml/branch/master/graph/badge.svg)](https://codecov.io/gh/doriaviram/super-yaml)
[![Downloads/week](https://img.shields.io/npm/dw/super-yaml.svg)](https://npmjs.org/package/super-yaml)
[![License](https://img.shields.io/npm/l/super-yaml.svg)](https://github.com/doriaviram/super-yaml/blob/master/package.json)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g super-yaml
$ super-yaml COMMAND
running command...
$ super-yaml (-v|--version|version)
super-yaml/0.0.0 darwin-x64 node-v12.9.1
$ super-yaml --help [COMMAND]
USAGE
  $ super-yaml COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`super-yaml compile [FILE]`](#super-yaml-compile-file)
- [`super-yaml hello [FILE]`](#super-yaml-hello-file)
- [`super-yaml help [COMMAND]`](#super-yaml-help-command)

## `super-yaml compile [FILE]`

describe the command here

```
USAGE
  $ super-yaml compile [FILE]

OPTIONS
  -s, --source=source

EXAMPLE
  $ super-yaml hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/compile.ts](https://github.com/doriaviram/super-yaml/blob/v0.0.0/src/commands/compile.ts)_

## `super-yaml hello [FILE]`

describe the command here

```
USAGE
  $ super-yaml hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ super-yaml hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/doriaviram/super-yaml/blob/v0.0.0/src/commands/hello.ts)_

## `super-yaml help [COMMAND]`

display help for super-yaml

```
USAGE
  $ super-yaml help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

<!-- commandsstop -->
