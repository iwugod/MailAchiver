Initial thought: 

While waiting for the project to arrive in my inbox, I was thinking of the Tech stack to combine in other to complete this task. 
After unzipping the tar file, I inspected the content of the files and saw the design for a design for Archive management system.

Analysis challenges:

After choosing to use Angular for Html and Javascript. I also decided to use Tailwind css as it allows me to develop UI faster and easily. 
However while googling for NPM libraries for a date selector that allows for start date and end date selection,  I was kin on flexibility of the library. 
Since I couldn’t find one that suits my need, I decided to create one with Pikaday library.

Moreover, I choose angular framework because it is one of the frameworks that I am comfortable with. It encourages component reusability, easy data, state management and helps  limits the amount of code blocks needed to make a functionality.

Process and challenges:

During the course of development, it took some time to figure out how to include and implement a  custom pikaday library according to the design provided. 
Having install the NPM library, the next issue I faced was to customise the pikayday library in Angular. Although JQuery implementation seem easy and simple. 

In Angular to use a library, we simply : Import { Lirbary } from ‘@library’;  Importing the pikaday library was throwing type script errors. 
To fix this I imported all the packages in ‘pikaday’ : import * as Pikaday from ‘pikaday’.

The next challenge was writing the code to store start date and end date in variables, while keeping the date selection box open if only one of the option was selected. 
Angular encourages code reusability and parent to child relation. So the store start date and end date was transferred to the child component through Angular EventEmiters, 
consequently the emitted data was used in the child component to filter the result and display in the table.

