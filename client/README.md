README - Phase-4 Project
========================

Description
-----------

This app allows a user to views a list of books and revies associated with each book. The user also has the abilitiy to create an account, add new books (as well as delete and edit their entries) to the list and write reviews on any list. 

Specification Description (PLEASE READ TO PREVENT PRIOR TO THE REVIEW TO AVOID ANY DISAGREEMENT!!!)
---------------------------------------------------------------------------------------------------

- Use a Rails API backend with a React frontend.
   *APi created in Railas and frontend in React* 
- [ ] Have at least three models on the backend, that include the following:
    *The trhee models are: Book, Review, User*
    - [ ] At least one reciprocal many-to-many relationship (implemented by using 2 has-many-through relationships). Note: in order to accomplish this, your project must include a joins table. This joins table must include a user submittable attribute.
    *The reciproval many-to-many relationship is: User has many Books (that they comment on) through Reviews*
    - [ ] Full CRUD actions for at least one resource. The update action should be implemented using a form that is pre-filled with existing values for the object. On submission of the form, the object should update. Note: Using a like button or similar will not meet the update requirement.
    *Full CRUD actions can be perfomed on the Book model. You can see the pre-filled form on path '/book_edit/:id'. After any CRUD action is performed the index of all books is updated accordingly on the fornt-end and the changes are persisted on the backend.*
You can create a user, boom and review
- [ ] Minimum of create and read actions for EACH resource.
*User can be created and read. Review can be created and read.*
- [ ] Follow RESTful routing convention for backend routes.
*Done.*
- [ ] Active Record validations must be present on your models for most attributes.
*Validations present for each model.*
- [ ] Use controller validations to alter back end json response to front end. The response should pass your object if the creation, update, or deletion succeeds. However, the response should pass error messages to the front end and display them if the action fails. HINT: Utilize record.errors.
*Done*
- [ ] Properly update front end state upon successful response from a POST, PATCH, or DELETE request. That is to say, you should NOT rely on another GET request or redirect to update front end state of your application.
*Done*
- [ ] Have at least three different client-side routes using React Router. Be sure to include a nav bar or other UI element that allows users to navigate between routes. Follow RESTful convention where applicable.
*Nav bar included that allows users to navigate between 7 different routes.*
- [ ] Implement authentication/authorization, including password protection. A user must be able to:
    - [ ] sign up with a new user account,
    *Done*
    - [ ] log in to the site with a secure password and stay logged in via user ID in the session hash, and
    *The user stays logged in whilst navigating through the app, however, when the page is relaoded the user is logged out.*
    - [ ] log out of the site.
    *Logout possible*
- [ ] Use the React hook useContext to persist your logged in user object in front end state and avoid props drilling.
*Done.*


Setting-up
----------

In the terminal, navigate to the *your-project-name* repository, and:
1. bundle install
2. rails s
3. rails db:migrate
4. rails db:seed (optional)

Then launch the React app by navigating to the *client* repository, and:
1. npm install
2. npm start