# Frontend Torre

This project is about create a copy for some views of Torre.co, mainly the view of user profile with a same design but with freedom to change the design if we want, in mi case i tried to make more mobile friendly the current design.

## Stack

The stack for this project was free,so in my i choose a stack that i consider faster, modern and scalable, this stack is:

- Vue.js 2
- Vuex
- Typescript
- Vuetify
- Pug
- Babel

## Problem with endpoints

I had many problem with the endpoints , now i explain about the problem with those:

- https://torre.bio/api/bios/$username -> This endpoints generate CORS problems(server problems), so is nessesary configurte the server to accept the request.
- https://torre.co/api/suite/opportunities/$id -> I was searching many time what mean opportunities and i dont found it, i only found "opportunities" in the first endpoint and they dont work either
- https://search.torre.co/opportunities/_search/?, https://search.torre.co/people/_search/? ->
  I can't test them since I need the json structure to send the post.

![error-CORS](https://develop)

## Temp Solution

As we saw none of those endpoints works well or i needed more information about the use of them so the only way to get data is by json object that containst the data, in my case i only use the json of data of Torrenegra in this applications, this data is by the name "data.ts", so the complete solution was i use these json and save the main data of it and save this data in a store variable into vuex state, and from here the aplication receive data.

## Arquitecture

In each component of vue i use Typescript and use components like a function, in vuex i created 3 modules one general, and each of the rest for each page of the application, i only use the main module because i cant extract data from the endpoints but the logic to that is commented

# Design

In the part of design i only try to improve the current design to make more mobile friendly the application, and in the part of development i chose Vuetify because is oriented to mobile. Here some views of the project in mobile.

![views-mobile](https://github.com/)
![views-mobile](https://github.com/)

# How to run the project

The project is configurated to run like a traditional vue application, so.

### Project setup

First we need to install the node dependencies with:

```
npm install
```

### Compiles and hot-reloads for development

If we want to run the proyect in local host we can use the command:

```
npm run serve
```

### Compiles and minifies for production

And finally to build the aplication to production we need to run the command:

```
npm run build
```

### Lints and fixes files

Also we can run the lint of the project, in this application i use the configuration "eslint + prettier"

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
