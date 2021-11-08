#!/usr/bin/env node
import program from "commander";
import { listIconsAction } from "./actions/listIconsAction.js";
import { convertNewAction } from "./actions/convertNewAction.js";
import { convertAllAction } from "./actions/convertAllAction.js";

program.version("0.1.0");
program
  .command("list-icons")
  .description(`Generates a list of all our icon components`)
  .action(listIconsAction);

program
  .command("convert-new")
  .description(
    `Converts any svg file in './svg' that isn't in the '/src' folder`
  )
  .action(convertNewAction);

program
  .command("convert")
  .description(`Converts all svg files into the '/src' folder from scratch.`)
  .action(convertAllAction);

// Assert that a VALID command is provided
if (
  process.argv.slice(2).length <= 0 ||
  !/[adlru]/.test(process.argv.slice(2))
) {
  program.outputHelp();
  process.exit();
}
program.parse(process.argv);
