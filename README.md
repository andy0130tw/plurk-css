# Paperplane -- (Heavily) Customized Plurk CSS

A theme that captures concepts of Material Design, made for my Plurk.

Originally I used a [gist](https://gist.github.com/andy0130tw/a3825c7610efcbdbe245) to manage the CSS. It had grown too big so I could hardly maintain afterwards. I decided to port it to SCSS as a practice.

# Check it out yourself!

You should have `gulp` installed globally.

Just clone the repo, `yarn`, and `gulp build`. Then paste the content of the built CSS file `dist/plurk-css.css` into the textarea of [the theme customization page of Plurk](https://www.plurk.com/Settings/show?page=theme). You can use alternative tools to compile it and do text substitutions yourself afterwards.

When developing, I use `gulp` or `gulp watch` to auto re-compile on changes.

# Side note

In some source files you can see a small piece of comment describing the HTML structure we are going to apply CSS on. That's because **Plurk has no documentation on theming, and the site changes frequently**. All I can do is try to inspect the DOM tree and write down the blueprint as reference. You are encouraged to read them when writing your own theme.

Sometimes the written selectors are not strong enough to override the "default" theme. There are two solutions: One is to introduce more classes/IDs, but resulting some long and rather meaningless selectors. The other is to use `!important`, which is a well-known anti-pattern when abused. I know that I should stick to a consistent rule, but it is too hard for a theme when the HTML part is not controlled by myself.

# Download (?)

I am sorry, but this repo does not maintain snapshots of pre-built CSS files. If you want to use it, try to learn to build it.
