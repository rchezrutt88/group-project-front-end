# Content Management System (name TBD)

## What Can Our Site Do For You

Our web application allows visitors with no technical background to build a
website with ease. Visitors to our site will be able to sign up and create a
profile to start building multiple blogs. Each user will have their own home
page where their past blogs will display on a dashboard.  Our website generator
also allows users to customize and style their entries with ease.

## Visitor Interface

In our planning our team all agreed that we want our visitors to have a quality
user experience. When visitors visit our site they are first greeted by a
welcome page. The page has a friendly design with a carousel and information
about the functionality at the bottom of the page. We also wanted users to feel
like they own a space, so once they signed in the welcome screen transitions to
a profile page.  The overall layout of the profile page is familar, it allows
the user to have typical profile functions like changing passwords and signing
out. At the center, past blogs are generated with the option of either deleting
a page or viewing the blog they have created.

When the user choose to view a blog they are transported to a third page where
past blog entries are generated in an organized fashion. To further provide
a good user experience we have incorporated the TinyMCE text editor which allows
our user to have fun with their content. Our application is able to record a lot
of what TinyMCE generates, including font colors, emoticons, and a few others.
We also have a home button which takes the user back to the profile page. As a
group we achieved our goal in having a fully functioning blog web application.

## Technologies:

The overall look of the application is formatted using bootstrap and the icons
used on the sidebar are imported through Google Icons. The main engine for
interaction is operated by using Javascript and Jquery functions. As a team we
used node to modularize the javascript to practice clean and semantic coding.
Our blog pages and entries are both generated on the page using handlebars. We
also used a TinyMCE text editor on entry generator to give users an option to
style the text.  Text from the editor or any other form data is sent to the
backend using AJAX request.  The backend of our site is powered by an Express
framework which uses CRUD actions to send data to our MongoDB database.

## Challenges and Goals

The most challenging problem we have dealt with storing and generating HTML.
In the beginning we had no direction how we would go about doing this and once
we got footing we ran into even more challenges. We want to make sure the html
stored by the user is safe so we had to make a filter which is still a work in
progress.  We also want our site to be very customizable so in the future we
our reach goal is to have a profile picture and the ability to change the
background color.

## Wireframes

![Wirefram](http://i.imgur.com/5mGunkC.jpg)

## ERD
![ERD](http://i.imgur.com/6SazDqy.jpg) 

## Back End Repo
[See Our Back End Here. It's WEB SCALE!©](https://github.com/Insert-Squad-Name/group-project-back-end)

## Meet the Gentleman Who Created This Project:

- **Project Lead/Product Lead: Kevin**

  Accountable for team meetings, team progress, and time management. Also accountable for team decisions on product features, scope, and timeline.

- **Front-End Lead: Jason**

  Accountable for team decisions on front-end implementation strategy and front-end dependencies and tools. Also accountable for front-end execution.

- **Back-End Lead: Robert**

  Accountable for team decisions on back-end implementation strategy and back-end dependencies and tools. Also accountable for back-end execution.

- **Quality Assurance: Jeremiah**

  Accountable for code quality through frequent pair-programming and code review. Also accountable for proper use of Git (commit messages, branching/merging strategies) throughout the project. If your group only has three members, everyone is jointly and individually accountable for quality.
