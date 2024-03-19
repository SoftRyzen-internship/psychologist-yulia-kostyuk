# Psychologist Yulia Kostiuk

---

## 🗂️ Project description 🗂️

A website for the Psychologist Yulia Kostiuk.

- **Project name**: psychologist-yulia-kostyuk

## ⚙️ Creating the project ⚙️

This project is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Features

- **Optimization**: The website is optimized for fast loading, providing users
  with quick access to information.
- **Modularity and reusability**: The product is built using a component
  approach, which makes the code modular and allows components to be used on
  different pages and in different sections of the project. This simplifies the
  maintenance of the site and the expansion of its functionality.
- **Linters and formatting**: Using tools like Prettier and ESLint helps
  maintain code standards, ensures a consistent style, and identifies potential
  problems in the code.
- **Adaptability**: The website is responsive, allowing you to create dynamic
  and interactive user interfaces without reloading pages. This increases user
  engagement and interaction.
- **Convenient content management**: The content management system has an
  intuitive interface that simplifies the process of updating and editing
  content. You can easily make changes to texts, images and other content
  without special knowledge in web development.
- **Accessibility**:
  - Intuitive design
  - Semantic HTML
  - Mobile-friendly interface
  - Web resource available for any internet connection

### Design

[Design layout on Figma](<https://www.figma.com/file/0jRQbr4RWvSRsL3UK2D6AV/Psychologist-(Yulia-Kostyuk)>)

```

|-- public -> static files
|-- src -> source directory with the main application code
  |-- actions -> asynchronous functions that are executed on the server
  |-- app -> pages and routing
    |-- / --> routing group for main UI
    |-- (admin) --> routing for sanity CMS
  |-- components -> folder with reusable components
    |-- common -> base sections/block components (accordion, form, slider, etc.)
    |-- ui -> small reusable components (button, modal, etc.)
      |-- NameComponent -> folders for each component
        |-- NameComponent.tsx -> main component
        |-- NameComponent.module.css -> file for special components styles
        |-- index.ts -> file for re-export
        |-- NameComponent.types.ts -> file for special components types (props)
  |-- layout -> components that are used as a main template (header, footer)
      |-- NameLayout -> folders for each component layout
        |-- NameLayout.tsx -> main component layout
        |-- NameLayout.module.css -> file for special components layout styles
        |-- index.ts -> file for re-export
        |-- NameLayout.types.ts -> file for special components layout types(props)
  |-- sections -> folder with section components
      |-- NameComponent -> folders for each component section
        |-- NameComponent.tsx -> main component section
        |-- NameComponent.module.css -> file for special section components styles
        |-- index.ts -> file for re-export
        |-- NameComponent.types.ts -> file for special section components types(props)
  |-- data -> static data for the project (json)
  |-- types -> folder with reusable type definitions
  |-- utils -> additional reusable functions

```

</details>

### Components API

Each component has its own API. You can find it in the component's folder. This
is a list of more common components and their API.

<details>

<summary><b>Base sections/block components (accordion, form, slider, etc.): </b></summary>

<br/>

- #### Example component Title

| Prop         | Default | Description                                                  |
| ------------ | ------- | ------------------------------------------------------------ |
| `children`   | -       | required, `ReactNode`.                                       |
| `isWhite`    | `false` | optional, `boolean`, changes color to white.                 |
| `isCentered` | `false` | optional, `boolean`, adds css property `text-align: center`. |
| `className`  | ''      | optional, `string`, adds custom css class.                   |

- #### Example component Slider

| Prop             | Default     | Description                                                                                               |
| ---------------- | ----------- | --------------------------------------------------------------------------------------------------------- |
| `slideComponent` | -           | required, `React.FC<any>`, It`s the component that will be rendered as side.                              |
| `slidesData`     | -           | required, `Record<string, any>[]`, It is a array with slide`s objects                                     |
| `section`        | -           | required, `cases`, `reviews`, `partners`, `advantages`, name of the section where slider will be rendered |
| `wrapClassName`  | `undefined` | optional, `string`, adds custom css class to the Swiper component.                                        |
| `slideClassName` | `undefined` | optional, `string`, adds custom css class to the SlideComponent component.                                |

```

```

- #### component Logo

| Prop         | Default | Description                                                   |
| ------------ | ------- | ------------------------------------------------------------- |
| `path`       | --      | required, `string`. choose 'header' or 'footer'               |
| `onClick`    | --      | required, `() => void`, add the function of closing the modal |
| `stylesLogo` | --      | optional, `string`, adds custom css class to the Logo         |

- #### component Socials

| Prop            | Default | Description                                              |
| --------------- | ------- | -------------------------------------------------------- |
| `stylesSocials` | --      | optional, `string`, adds custom css class to the Socials |
