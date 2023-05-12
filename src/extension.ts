// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { v4 as uuidv4 } from 'uuid';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const config = vscode.workspace.getConfiguration();
	let variableToReplace = config.get<string>('stringToReplace');
	let generateOnSave = config.get<boolean>('generateOnSave');



	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "tmdl-uuid-generator" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json


	let commandsToPush = [
		vscode.commands.registerCommand('tmdl-uuid-generator.generateUUID', () => {
			// Write a UUID4 at the current cursor position
			const editor = vscode.window.activeTextEditor;
			if (editor) {
				const position = editor.selection.active;
				const uuid = uuidv4();
				editor.edit((editBuilder) => {
					editBuilder.insert(position, uuid);
				});

			}
		}),
		// Using the variable name from the settings file replace all occurances of that variable with a UUID4
		// in the currently open file
		vscode.commands.registerCommand('tmdl-uuid-generator.generateAllUUID', () => {
			const editor = vscode.window.activeTextEditor;
			if (editor) {
				const document = editor.document;
				const fullText = document.getText();
				let newText = fullText;
				const matches = newText.match(new RegExp(`\\${variableToReplace}`, 'g'));
				if (matches !== null) {
					for (let i = 0; i < matches!.length; i++) {
						const uuid = uuidv4();
						newText = newText.replace(variableToReplace as string, uuid);
					}
					editor.edit((editBuilder) => {
						const lastLine = document.lineAt(document.lineCount - 1);
						const lastCharacter = lastLine.range.end.character;
						const fullRange = new vscode.Range(0, 0, document.lineCount, lastCharacter);
						editBuilder.replace(fullRange, newText);
					});
				}
			}
		})
	];

	context.subscriptions.push(...commandsToPush);
	console.log(generateOnSave);
	if (generateOnSave) {
		vscode.workspace.onWillSaveTextDocument((event) => {
			// execute command to replace all occurances of the variable with a UUID4
			vscode.commands.executeCommand('tmdl-uuid-generator.generateAllUUID');
		});
	}


}

// This method is called when your extension is deactivated
export function deactivate() {}
