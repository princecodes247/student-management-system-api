# Typescript Express Boilerplate

### How to generate modules
run `npm run module modulename` to generate complete folder structions with predefined contents to work with.

for example, `npm run module biskit` will generate these folders and files.

   `src/biskit/controller/index.ts`
   
   `src/biskit/model/index.ts`
   
   `src/biskit/service/index.ts`
   
   `src/biskit/route/index.ts`
   
   `src/biskit/schema/index.ts`
   
   `src/biskit/type/index.ts`

These are just template you can use and edit by yourself.

Once those are generated, you can add the interface you want at `type/index.ts`

After completion of your app, remember to register the routes to the `src/routes.ts` folder. By just importing and including them manually. You will see other examples there.

## Postman documentation
You can find the post man collection at `postman_collection.json`

`Thanks!`
