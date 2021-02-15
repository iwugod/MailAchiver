Initial thought: 

While waiting for the project to arrive in my inbox, I was thinking of the Tech stack to combine in other to achive this task. 
After unzipping the tar file, I inspected the content of the files and saw the design specification an Archive management system.

Analysis challenges:

Having gone through and decided on the tech stack to combine in in achiveing this task. I made up my mind to use Angular 10 framework which provides Html, css/scss and Javascript as a bundle.
In other not to spend too much time time on UI design, I installed Tailwind css library as it allows me to develop UI faster and easily.

Then I started googling for NPM libraries that has a date selector with a start date and end date capability, at the same time I was kin on flexibility of such a library.  It turns out there isn't one 
developed specification for Angular 2+ and above. So I decided to create one my use using Pikaday library as it provided the needed flexibility when it comes to start date and end date.

Moreover, I choose Angular framework because it is one of the frameworks that I am comfortable with. It encourages component reusability, parent child relationship, 
state management and limits the amount of code blocks needed to make a functionality.

Process and challenges:

During the course of development, it took some time to figure out how to include and implement a  custom pikaday library according to the design provided. 
Having install the NPM library, the next issue I faced was to customise the pikayday library in Angular. Although JQuery implementation seem easy and simple. 

In Angular to use a library, we simply : Import { Lirbary } from ‘@library’;  Importing the pikaday library was throwing typescript errors. 
To fix this I had to imported all the packages in ‘pikaday’ : import * as Pikaday from ‘pikaday’.

The next challenge was writing the code to store start date and end date in variables, while keeping the date selection box open if only one of the option was selected.
This was achived through Pikaday functions such as setStartRange() and setEndRange(). 

Moveover, Angular encourages code reusability and parent to child relation. So the store start date and end date was transferred to the child component through Angular EventEmiters, 
consequently the emitted data was used in the child component to filter the result and display in the table.

Also note that the filter can only filter for a limited number of range(01/02/2021 - 10/02/2021) as it is using a static/dummy data that is provided in archive-results component. If provided with an API point the filtering will work for any amount of range.

In conclusion it has been an interesting project and have helped me expand my knowledge on tailwind css as it is relatively new in the development community.
