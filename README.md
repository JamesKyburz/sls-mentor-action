# Github Action sls-mentor

## Inputs

| input                      | required | default             | description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|----------------------------|----------|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `aws-region`               | Yes      |                     | AWS Region.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `tags`                     | No       |                     | Filter checked account resources by tags.
| `level`                    | Yes      |                     | Level on which to run checks (1-5).
| `cloudformation-stacks`    | No       |                     | Filter checked account resources by CloudFormation stack names.
| `no-fail`                  | No       | `false`             | Exit with success status, even if some checks failed (default: false).
| `report`                   | No       | `false`             | Generate an html report (default: false).
| `skip-verification`        | No       | `false`             | If true, the action will not validate the user or the commit verification status                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

## Examples

### Basic example

```yml
name: sls-mentor
on:
  push:
    branches:
      - main

jobs:
  sls-mentor:
    timeout-minutes: 10
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read
    steps:
      - uses: actions/checkout@v4
      - uses: aws-actions/configure-aws-credentials@v2.2.0
        with:
          role-to-assume: ${{ secrets.AWS-CI-ROLE }}
          aws-region: us-east-1
          role-duration-seconds: 900
      - uses JamesKyburz/sls-mentor-action@v<sls-mentor-version>
        with:
          aws-region: us-east-1
          level: 1
```
