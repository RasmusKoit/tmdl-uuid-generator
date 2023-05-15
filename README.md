# TMDL UUID Generator

This is a Visual Studio Code extension that generates UUIDs for TMDL files.

## Features

- Generates UUIDs for TMDL files
- Supports generating UUIDs for individual files or all files in a workspace
- Can be triggered via a context menu item or keyboard shortcut
- Supports configuration options for generating UUIDs on save and customizing the string to replace with a UUID

## Requirements

This extension has no dependencies or requirements.

## Extension Settings

This extension contributes the following settings:

* `tmdl-uuid-generator.generateOnSave`: Enable/disable generating UUIDs for all TMDL files on save. (default: off)
* `tmdl-uuid-generator.stringToReplace`: The string to replace with a generated UUID. (default: $UUID)

## Usage

To generate a UUID for a TMDL file, right-click on the editor and select "Generate UUID" from the context menu, or use the keyboard shortcut `Ctrl+k g` (Windows, Linux) or `Cmd+k g` (macOS).

To generate UUIDs for all TMDL files in a workspace, right-click on the editor and select "Generate All UUIDs" from the context menu, or use the keyboard shortcut ``Ctrl+k Shift+g` (Windows, Linux) or `Cmd+k Shift+g` (macOS).

## Known Issues

There are no known issues with this extension.

## Release Notes

### 1.0.0

Initial release of TMDL UUID Generator.

### 1.1.0

Added support for generating UUIDs for all TMDL files in a workspace.

### 1.2.0

Added support for generating UUIDs on save and customizing the string to replace with a UUID.

## Credits

This extension was created by [Rasmus Koit](https://github.com/RasmusKoit).