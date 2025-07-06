# Tailwind Projects — Getting started study

Tailwind CSS is a utility-first framework that offers low-level utility classes to build custom designs directly in HTML. It enables rapid development and easy customization, making it a popular choice among developers. Tailwind is highly flexible and allows you to create unique, responsive designs without being limited by predefined components like those in Bootstrap.

Courses or videos attended:

-   Tailwind CSS Crash Course (Traversy Media)
-   Tailwind Crash Course | Project From Scratch (Traversy Media)
-   Brad Traversy Tailwind CSS From Scratch | Learn By Building Projects
-
-
-
-
-

## Tailwind Responsive Projects

### Brad Traversy Tailwind CSS From Scratch | Learn By Building Projects

1- Manager Platform:

<img src="./.github/Manager-Platform.gif" alt="Manager Platform" height="300px">

2- [Manager Platform]

3-

4-

5-

6-

7-

8-

9-

10-

## Tailwind CSS — Prons & Cons

Pros:

-   Utility-first CSS framework.

-   Uses mobile-first approach.

-   Encourages rapid development.

-   Reduces the need for writing CSS and reduces CSS verbosity.

-   It's unopinionated and highly customizable which is different from frameworks like Bootstrap where the components have the same look and feel across different projects (predefined components). Beyond being low-level, we can define `@themes` to adjust breakpoints or add colors and `@utility` to extend and create utility classes.

-   Intuitive class names that describe their function. In CSS we would have a class like `list-item`, but what is it? Is it a Grid or Flex container? In Tailwind we know the styling directly from the class name, e.g. `flex`, `grid`, `text-center`, etc.

-   High popularity and large community support.

-   It's an abstraction of CSS. It's generic. That is different from other libraries where a `button` style is specific, a `button` is different in Bootstrap, Material UI, Chakra UI, etc.

-   Automatically generates responsive classes for different screen sizes, making it easy to create responsive designs. A simple `container` class will automatically assume a `max-width` of 100% on mobile devices, and a `max-width` of 1280px on larger screens. This is done by using the `@media` queries under the hood. Also provides `sm`, `md`, `lg`, `xl` and `2xl` prefixes to apply any styles at different breakpoints.

Cons:

-   Tailwind assumes knowledge of CSS, as it is built on top of it with classes ready to use. Example `relative flex`, what are relative and flex? We need to know CSS to understand they are `position` and `display` properties, although `Tailwind CSS IntelliSense` extension helps with that.
-   Can lead to large HTML files (large number of utility classes in tags).
-   Learning curve for beginners (requires reference to documentation to understand utility classes)

## Example comparison of Tailwind vs Vanilla CSS:

Tailwind CSS:

```html
<button class="p-2 bg-blue-500">Click me</button>
```

Vanilla CSS:

```html
<button class="btn">Click me</button>
<!-- What is .btn? We need to read the css below -->
```

```css
.btn {
    padding: 0.5rem;
    background-color: blue;
}
```

### Final Remarks

-   Vanilla css is sustainable and future-proof, and doesn't depend on any third-party tools.
-   However, vanilla CSS may be complex and even frustating (center a div lol). Also, changing the `.btn` class could take side effects on other parts of the application that use the same class.
-   Tailwind brings more control, predictability and developement efficienty
-   Requires learning an abstraction on top of CSS
