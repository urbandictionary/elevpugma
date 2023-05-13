# Eleventy Pug Bulma Template

This template provides a starting point for projects using Eleventy, Pug templates, and a custom Bulma build.

## Getting Started

Follow these steps to get the project up and running:

1. Clone the repository or download the source code.
2. Install the dependencies by running the following command:

`npm install`

## Configuration

To customize the Bulma styles, you can edit the custom Bulma build located in `src/assets/main.scss`. Add your custom styles, override Bulma variables, or import additional stylesheets.

If you want to change the primary font or colors, you can modify the `_bulma-custom.scss` file located in `src/assets`. Update the respective variables to suit your preferences.

## Creating Pug Templates

To create new Pug templates, follow these steps:

1. Add a new `.pug` file in the `src` directory or its subdirectories.
2. Use the existing Pug templates as a reference for structuring your new templates.
3. Extend the `_layouts/default.pug` layout or create your own layout file.
4. Customize the content and layout of your Pug templates as needed.

## Development

To start the development server and watch for changes, run the following command:

`npm start`

This will initiate the Sass watcher and the Eleventy server concurrently. The Sass watcher will recompile the Sass files when changes are made, and the Eleventy server will serve the generated site at `http://localhost:8080/`.