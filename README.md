# Brainrot-Hackathon

## Inspiration
Recently, my new character A.K.A Chill Guy went viral again after two months of being off the radar, especially on platforms like TikTok and Twitter/X. It was amazing to see all the content, and I really enjoyed reading every "Chill Guy" moment I came across. It helped me stay positive each day, especially during my commute to school.

## What it does
This website allows users to share their own 'Chill Guy' moments, creating a space for everyone to celebrate their laid-back, positive experiences.

## How we built it
I developed the front end using HTML, CSS, and JavaScript, while the back end was built with Express.js and MySQL as the database.

## Challenges we ran into
One major challenge I faced was linking the front end to the back end. Since I’m still studying back-end development in school, I have not yet  learned about CORS (Cross-Origin Resource Sharing) and initially struggled to get my form to send a POST request properly.

## Accomplishments that we're proud of
This is my first-ever project, whether solo or in a group, and I’m incredibly proud of what I’ve accomplished. It’s been a great learning experience.

## What we learned
Through this project, I learned how to use CORS to properly link the front end with the back end.

## What's next for Chill guy moments
Given that it’s a viral trend, my next goal is to turn this into a full-fledged website where people worldwide can share their own "Chill Guy" moments.

# How to Use

1. **Open two separate VS Code windows:**
   - One for the **client** (frontend).
   - One for the **server** (backend).

2. **On the client:**
   - Open `index.html` and click **Go Live** (ensure you have the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension by Ritwick Dey installed).

3. **On the server:**
   - Create a `.env` file and add the following (make sure there are **no spaces** around the `=` signs):
   ```
   DB_HOST=your_database_host
   DB_USER=your_database_username
   DB_PASSWORD=your_database_password
   DB_DATABASE=your_database_name

4. **Initialize the database:**
    - In the server terminal, run the following command:
    ```
    npm run init_tables
    ```
    Once you see `Tables created successfully`, proceed to the next step.

5. **Start the server:**
    - In the server terminal, run the following command:
    ```
    npm run dev
    ```

6. **Now, have fun!**

**##Troubleshooting (Form not working)**
If the form does not work, go to `app.js` file in the server. (/src/app.js)
Find the following line and change the `127.0.0.1` and the `port number` to match what you see in the browser's `index.html` (for example, `https://localhost:3000`):
```js
// Enable CORS before setting up routes
app.use(cors({
    origin: 'http://127.0.0.1:5500',
}));
```