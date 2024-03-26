import { Command, Flags } from '@oclif/core'
import { existsSync } from 'fs-extra'
import chalk from 'chalk'

import { coreDir, coreNodeModulesDir, tmpDir } from '../utils/directory'
import { runCommandSync } from '../utils/runCommandSync'

export default class GenerateGraphql extends Command {
  static flags = {
    debug: Flags.boolean({ char: 'd' }),
    core: Flags.boolean({ char: 'c', hidden: true }),
  }

  async run() {
    const { flags } = await this.parse(GenerateGraphql)

    const debug = flags.debug ?? false
    const isCore = flags.core ?? false

    if (!isCore && !existsSync(tmpDir)) {
      console.log(
        `${chalk.red(
          'error'
        )} - The ".faststore" directory could not be found. When running faststore dev or faststore build, the generate-graphql command is automatically executed.`
      )

      process.exit(1)
    }

    runCommandSync({
      cmd: `NODE_PATH="${coreNodeModulesDir}" yarn generate:schema`,
      errorMessage:
        "Failed to run 'yarn generate:schema'. Please check your setup.",
      throws: 'error',
      debug,
      cwd: isCore ? undefined : tmpDir,
    })

    runCommandSync({
      cmd: `NODE_PATH="${coreNodeModulesDir}" yarn generate:codegen`,
      errorMessage:
        'GraphQL was not optimized and TS files were not updated. Changes in the GraphQL layer did not take effect',
      throws: 'error',
      debug,
      cwd: isCore ? undefined : tmpDir,
    })

    runCommandSync({
      cmd: `NODE_PATH="${coreNodeModulesDir}" yarn format:generated`,
      errorMessage:
        "Failed to format generated files. 'yarn format:generated' thrown errors",
      throws: 'warning',
      debug,
      cwd: isCore ? undefined : tmpDir,
    })

    // yarn generate:copy-back expects the DESTINATION var to be present so it can copy the files to the correct directory
    runCommandSync({
      cmd: `NODE_PATH="${coreNodeModulesDir}" DESTINATION=${coreDir} yarn generate:copy-back`,
      errorMessage:
        "Failed to copy back typings files. 'yarn generate:copy-back' thrown errors",
      throws: 'warning',
      debug,
      cwd: isCore ? undefined : tmpDir,
    })

    console.log(
      `${chalk.green(
        'success'
      )} - GraphQL schema, types, and optimizations successfully generated 🎉`
    )
  }
}
