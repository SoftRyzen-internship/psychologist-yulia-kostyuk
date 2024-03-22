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

| Prop        | Default | Description                                                         |
| ----------- | ------- | ------------------------------------------------------------------- |
| `path`      | --      | required, `string`. choose 'header' or 'footer'                     |
| `onClick`   | --      | optional, `() => void`, add the function of closing the mobile-menu |
| `className` | --      | optional, `string`, adds custom css class to the Logo               |

- #### component Socials

| Prop        | Default | Description                                              |
| ----------- | ------- | -------------------------------------------------------- |
| `className` | --      | optional, `string`, adds custom css class to the Socials |

- #### component Button

| Prop         | Default     | Description                                                                  |
| ------------ | ----------- | ---------------------------------------------------------------------------- |
| `tag`        | --          | required, `string`, it can be either an 'a' or a 'button'.                   |
| `accent`     | --          | required, `boolean`, should button have an accent style or not.              |
| `children`   | --          | required, `ReactNode`                                                        |
| `href`       | `undefined` | optional, `string`, specifies the URL of the link.                           |
| `buttonType` | `button`    | optional, `string`, specifies the type of button.                            |
| `onClick`    | `undefined` | required, `() => void`, function is called when the button is clicked.       |
| `disabled`   | `false`     | optional, `string`, if 'true', the button is disabled and cannot be clicked. |
| `classname`  | `undefined` | optional, `string`, adds custom css class to the Button component.           |

- #### component Navbar

| Prop        | Default     | Description                                                          |
| ----------- | ----------- | -------------------------------------------------------------------- |
| `variant`   | --          | required, `string`, it can be either 'header' or 'mobile-menu'.      |
| `className` | `undefined` | optional, `string`, adds custom CSS classes to the Navbar component. |
| `onclick`   | `undefined` | optional, `() => void`, function is called when                      |

the Navbar is clicked.

- #### component NavbarLink

| Prop      | Default     | Description                                                  |
| --------- | ----------- | ------------------------------------------------------------ |
| `title`   | --          | required, `string`, specifies the title of the NavbarLink.   |
| `href`    | --          | optional, `string`, specifies the URL of the link.           |
| `variant` | --          | required, `string`, specifies the variant of the NavbarLink. |
| `onclick` | `undefined` | optional, `() => void`, function is called when              |

the NavbarLink is clicked.

- #### component Button

| Prop      | Default | Description                                                   |
| --------- | ------- | ------------------------------------------------------------- |
| `onClose` | --      | required, `() => void`, add the function of closing the modal |

- #### component BurgerMenu

| Prop      | Default | Description                                                   |
| --------- | ------- | ------------------------------------------------------------- |
| `onClose` | --      | required, `() => void`, add the function of closing the modal |

- #### component Notification

| Prop   | Default | Description                                       |
| ------ | ------- | ------------------------------------------------- |
| `type` | --      | required, `sucess`, `error`, type of notification |

- #### component Modal

| Prop       | Default | Description                                                     |
| ---------- | ------- | --------------------------------------------------------------- |
| `type`     | --      | required, `conditions`, `sucess`, `error`, type of notification |
| `onClose`  | --      | required, `() => void`, add the function of closing the modal   |
| `children` | --      | optional, `React.ReactNode`, React components                   |
