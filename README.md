# Content Management System (name TBD)

## What Can Our Site Do For You

Our web application allows visitors with no technical background to build a
website with ease. Visitors to our site will be able to sign up and create a
profile to start building multiple blogs. Each user will have their own home
page where their past blogs will display on a dashboard.  Our website generator
also allows users to customize and style their entries with ease.

**Reach Goal**: Implement authorization. Administrators should be able to delete pages or posts, while normal users should be able to edit pages. Only administrators can publish a new post, normal users can only save drafts.

## Technologies:

The overall look of the application formatted using bootstrap and the icons used
on the sidebar are imported through Google Icons. The main engine for interaction is operated by using Javascript and Jquery functions. As a team we
used node to modularize the javascript to practice clean and semantic coding.
Our blog pages and entries are both generated on the page using handlebars. We
also used a TinyMCE text editor on entry generator to give users an option to
style the text.  From there the html data is stored onto a NOS 


## Roles:

- **Project Lead/Product Lead: Kevin**

  Accountable for team meetings, team progress, and time management. Also accountable for team decisions on product features, scope, and timeline.

- **Front-End Lead: Jason**

  Accountable for team decisions on front-end implementation strategy and front-end dependencies and tools. Also accountable for front-end execution.

- **Back-End Lead: Robert**

  Accountable for team decisions on back-end implementation strategy and back-end dependencies and tools. Also accountable for back-end execution.

- **Quality Assurance: Jeremiah**

  Accountable for code quality through frequent pair-programming and code review. Also accountable for proper use of Git (commit messages, branching/merging strategies) throughout the project. If your group only has three members, everyone is jointly and individually accountable for quality.

## Technical Requirements
Our app **MUST**:
- [ ]   **Use Mongo and Express** to build an API.
- [ ] **Create an API using at least 2 related models**, one of which should be a user.
- [ ] Include **all major CRUD functions** in a **RESTful API** for at least one non-user model.
- [ ]  **Consume our own API** by making a front-end with HTML, Javascript, and jQuery
- [ ]  **Use authentication in our API** to restrict access to appropriate users.
- [ ]  **Craft thoughtful user stories together**, as a team.
- [ ] **Manage team contributions and collaboration** using a standard Git flow on Github.
- [ ]  Layout and style our front-end with **clean and well-formatted CSS**.
- [ ]  **Deploy our application online** so it's publicly accessible.

## Necessary Deliverables
- [ ]  A **working API, built by the whole team**, hosted somewhere on the
    internet.
- [ ]  A **client app that consumes our API, built be the whole team**,
 hosted somewhere on the internet.
- [ ]  **At least two Git repositories** (front-end and back-end) **hosted on
    Github**, with frequent commits from _every_ team member dating back to the
    _very beginning_ of the project.
    - The `README.md` file inside our   _**front-end**_ repo should have:

        - [ ] A short description of our application.
        - [ ] A brief explanation of the **technologies** (Node modules, Express
            middleware etc) used.
        - [ ] A couple of paragraphs detailing the **general approach you took**.
        - [ ] Notes on any **unsolved problems** or **major hurdles** our team had to overcome.
        - [ ] **Installation instructions** for any dependencies.
        - [ ] A link to our **user stories** – who are our users, what do they want,
            and why?
        - [ ]  A link to our **ERD** - what data models does our app use?
        - [ ] A link to our **wireframes** – sketches of major views / interfaces in
            our application.
        - [ ] A link to the deployed front-end app.
        - [ ] A link to the repo for our back-end.

    - The `README.md` file inside our _**back-end**_ repo should have:

      - [ ] A short description of our application.
      - [ ] A **catalog of routes (paths and methods)** that the API expects.
      - [ ] A link to the deployed back-end app
      - [ ] A link to the repo for our front-end.
