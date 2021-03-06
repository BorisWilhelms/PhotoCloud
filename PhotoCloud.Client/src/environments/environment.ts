// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  photoservice: {
    getall: 'http://localhost:7071/api/GetPhotos'
  },
  photostorage: {
    small: 'http://127.0.0.1:10000/devstoreaccount1/images-sm/',
    medium: 'http://127.0.0.1:10000/devstoreaccount1/images-md/',
    original: 'http://127.0.0.1:10000/devstoreaccount1/images/'
  }
};
