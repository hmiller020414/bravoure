# Bravoure Assignment – Hayley Miller
This assignment showcases one of my favorite television shows, Jane the Virgin, and my favorite season of that show, Season 3. I used React, Sass and the FontAwesome Icon package for this project.

## Step 1 – Set Up
First, I set up my repository and then created my React App. I did some initial clean up in it to remove styling and files I wouldn't need, such as logos, and then added my own icon as the favicon.

## Step 2 – Research + Initial API Calls
Next, I received my OMDB API key and began to play around in their database to see the kind of data I would receive. I set up a services subfolder in my app and took notes on what information I needed to receive based on the designs provided for this assignment. Then I wrote three functions to fetch that data:

### Show: From show, I receive the show name and plot details.
### Season: From season, I receive the number of episodes in that season. I also receive episode titles, and IMDB ratings.
### Episode: From episode, I also receive episode titles and IMDB ratings, but I also get the episode poster URL and plot details.

Once I had these, I tested them in the app component to make sure I was receiving everything properly.

## Step 3 – Component Set Up
Using the design provided, I wrote out a list of all components I would need. I separated the design into two columns, the left column having the series and season details, and the right column having a single episode's details. Once I had this list, I set up folders and files for each component.

## Step 4 – Shell Development
Once I had this information, I developed a "shell" using FPO copy to make sure my components were linked and passing data to each other.

## Step 5 – Data
I began to swap this FPO copy for actual data, beginning at my higher level components and moving down into sub-components.

## Step 6 – Desktop Styles
Once I had all the correct data rendered on the screen, I installed Sass and replicated the design provided to me.

## Step 7 – Carousel
With the design set, I was in a good place to develop the carousel functionality. I used math from the styles to get the carousel to transform the way that I wanted it to. I set my previous and next buttons to disable accordingly, based on the index of the slides.

## Step 8 – Responsive Styles
I worked from desktop to tablet to mobile to adjust the styles. Since I didn't have a responsive design to work off of, I took a lot of liberty here to mess around with the design and come up with something I find visually satisfying. This was the step I enjoyed the most since I really like styling and bringing my eye for design into my development.

## Step 9 – Episode Data
The last remaining functionality I had left was to make each carousel slide clickable so that the correct episode details rendered on the right side of the screen. I had temporarily hardcoded a specific episode number up until this point. I passed a function down to the CarouselSlide component to update the episode state on click of each slide, and passed that state to the EpisodeOverview component.

## Step 10 – Episode Rating
With my CarouselSlide working, I noticed that some episodes didn't have ratings and were rendering "N/A/10". I wrote a ternary to change that display based on the imdbRating data. If the rating is "N/A", now it just shows "N/A". If the rating is a number, it will show, for example, 8/10.