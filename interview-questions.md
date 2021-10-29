# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer:
  You can create another table just for Students and assign a foreign key to the name of each student. The foreign key would be on the Students.


  Researched answer:
  You can create another table just for Students and assign a foreign key to the name of each student. 'Cohort' has many students and 'Students' belongs to a cohort. Students has the foreign key. Foreign key always lives on the 'belongs to' side. Name the column heading for the foreign key cohert_id

  rails g model Student name:string cohort_id:integer

  Tell the model class there is a relationship. When creating a new student it has to be connected to a particular cohort. Go in the file structure in atom.

  Go to app -> models -> cohort.rb
  add the code...
    has_many :students
  end

  Go to app -> models -> students.rb
  add the code...
    belongs_to :cohort
  end

2. Which RESTful routes must always be passed params? Why?

  Your answer:
  Show - need a param because we are pulling a specific item of data from the database, so need to pass in a params id of the item to be displayed
  Edit - need to know which item we need to edit in the database, so need pass in a params id of the item to be edited
  Update - need to know what we are updating in the database, so need pass in a params id of the item to be updated
  Destroy - need to know what we are deleting from the database, so need to pass a params id of the item to be updated

  Researched answer:
  (Note to self - REST is a pattern to follow when structuring routes between the server and the client.)
  Create - can use strong params method to create restrictions so only certain params can be called from the outside

3. Name three rails generator commands. What is created by each?

  Your answer:

  rails generate model - will generate the model with the specified columns and their associated data type
  rails db:migrate - will create/modify a schema file in the database
  rails generate controller - adding a controller method

  Researched answer:
  Generate means it will create the files with boiler plate code already in place that can be edited.

  rails generate model - will generate the model with the specified columns and their associated data type. Will create/modify a schema file in the database. Will create a model class and different object types. The model file, test file and migration would be created.

  rails db:migrate - is how you setup and interact with the database, creates a database migration file/script so the developer can setup his database. Each column created in the model is now part of the schema.

  rails generate controller - adding a controller method. Creates the controller class with associated functional test file, a helper for the view, and basic view templates.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students
Controller method name that would be called by each route is students#index. The action would display a list of all students in the table.

method="POST"   /students
Controller method name that would be called by each route is students#create. The action would create a new student in the table.   

method="GET"    /students/new
Controller method name that would be called by each route is students#new. The action would return an HTML form for creating a new student  in the table.

method="GET"    /students/2
Controller method name that would be called by each route is students#show. The action would display the specific student with ID=2 from the table.

method="GET"    /students/2/edit
Controller method name that would be called by each route is students#edit. The action would return an HTML form for editing a student with ID=2.

method="PATCH"  /students/2
Controller method name that would be called by each route is students#update. The action would update the specific student with ID=2.

method="DELETE" /students/2      
Controller method name that would be called by each route is students#destroy. The action would delete the specific student with ID=2 from the table.


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

As developer, I have been commissioned to create an application where a user can create and manage to do list items.
As developer, I can create a full-stack Rails application for managing a to-do list.
As developer, my to-do list can have a title and description.
As developer, I can add new to-do lists directly into my database.
As a user, I can see all the to-do list titles listed on the home page of the app.
As a user, I can click on the title of the to-do list and be routed to a page where I can see the full description of the to-do item.
As a user, I can navigate from the to-do description page back to the home page.
As a user, I can see a form where I can create a new to-do item.
As a user, I can click a button that will submit my to-do item to the database.
As a user, when I submit my to-do item, I am redirected to the home page.
